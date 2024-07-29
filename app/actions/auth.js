"use server";

import { SignupFormSchema } from "@/app/lib/definitions";
import * as bcrypt from "bcrypt";
import con from "@/utils/db";
import { createSession } from "@/app/lib/sessions";

export const signup = async (formData) => {
  // Validate form fields
  const validatedFields = SignupFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    console.log(validatedFields.error.flatten().fieldErrors);
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const saltRounds = 10;

  // Generate salt and hash the password
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(validatedFields.data.password, salt);
    validatedFields.data.password = hash;
  } catch (err) {
    console.error("Error hashing password:", err);
    return { success: false, errors: { password: "Error hashing password" } };
  }

  // Convert con.query to a promise-based function
  const query = (query, values) => {
    return new Promise((resolve, reject) => {
      con.query(query, values, (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(results);
      });
    });
  };

  // Call the provider or db to create a user...
  try {
    const sqlQuery =
      "INSERT INTO user (name, email, password) VALUES (?, ?, ?)";
    const values = [
      validatedFields.data.name,
      validatedFields.data.email,
      validatedFields.data.password,
    ];
    const results = await query(sqlQuery, values);
    console.log("User created with ID:", results.insertId);
    await createSession(results.insertId);
    return { success: true, userId: results.insertId };
  } catch (err) {
    console.error("Database error:", err);
    return { success: false, errors: { database: "Database error" } };
  }
};

// Dummy function for fetching user from the database
const getUserFromDatabase = async (email) => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM user WHERE email = ?";
    con.query(query, [email], (err, results) => {
      if (err) {
        reject(err);
      } else if (results.length > 0) {
        resolve({ ...results[0] }); // Spread into a plain object
      } else {
        resolve(null); // No user found
      }
    });
  });
};

export const login = async (formData) => {
  try {
    const password = formData.get("password");

    // Fetch user from the database (replace with actual query)
    const user = await getUserFromDatabase(formData.get("email"));

    if (!user) {
      return { success: false, errors: { email: "User not found" } };
    }

    // Compare provided password with stored hash
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      console.log("if this appears it means the password is wrong.");
      return { success: false, errors: { password: "Invalid password" } };
    }

    fetch('http://localhost:3000/api/login', {
      method: 'POST',
      body: user
    })

    // Successful login
    const session = await createSession(user.id);
    return { success: true, session };
  } catch (err) {
    console.error("Error during login:", err);
    return { success: false, errors: { general: "Login error" } };
  }
};
