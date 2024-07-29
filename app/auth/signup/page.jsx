"use client";

import { signup } from "@/app/actions/auth";
import { useState } from "react";

import { useRouter } from "next/navigation";

const SignupForm = () => {
  const router = useRouter();
  const [errors, setErrors] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const response = await signup(formData);

    if (response.success) {
      console.log("User created successfully");
      // Handle success (e.g., redirect to another page or show a success message)
      router.push("/auth/login");
    } else {
      console.log("Errors:", response.errors);
      setErrors(response.errors); // Set errors to display them to the user
    }
  };

  return (
    <div className="h-[100vh] flex items-center justify-center pt-[2%]">
      <form
        onSubmit={handleSubmit}
        className="h-[70%] w-[30%] flex flex-col items-center justify-center border-[2px] border-black rounded-md pr-[3%] poppins-semibold"
      >
        <p className="text-[30px] ml-16 mb-6">Sign Up</p>
        <div className="w-full ml-24 mb-[7%] flex flex-col items-start justify-center h-[7%]">
          <label
            htmlFor="name"
            className="mr-9 flex justify-center items-center"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            className="border border-black outline-none rounded-md w-[90%] pl-2"
          />
        </div>

        <div className="w-full ml-24 mb-[7%] flex flex-col items-start justify-center h-[7%]">
          <label
            htmlFor="email"
            className="mr-10 flex justify-center items-center"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="border border-black outline-none rounded-md w-[90%] pl-2"
          />
        </div>

        <div className="w-full ml-24 mb-[5%] flex flex-col items-start justify-center h-[7%]">
          <label
            htmlFor="password"
            className="mr-2 flex justify-center items-center"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            className="border border-black outline-none rounded-md w-[90%] pl-2"
          />
        </div>

        {errors && (
          <div className="text-red-500 ml-8 mb-4">
            {Object.keys(errors).map((key) => (
              <p className="block w-full" key={key}>
                {errors[key]}
              </p>
            ))}
          </div>
        )}

        <button
          type="submit"
          className="w-[75%] mb-[19px] bg-[#03CAA6] text-[16px] tracking-[2.2px] text-white pt-[18px] pr-[14px] pb-[16px] pl-[14px] cursor-pointer rounded-[4px] ml-12 mt-3"
        >
          Submit
        </button>

        <div className="ml-8 mt-6">
          <p>
            Already have an account? <a href="/auth/login" className="underline">Login</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
