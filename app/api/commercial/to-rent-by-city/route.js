import con from "@/utils/db";
import { NextResponse } from "next/server";

//Handle for /api/users/route
export async function POST(req) {
  try {
    const { searchLocation } = await req.json();
    console.log(`Received searchLocation: ${searchLocation}`);
    const query = `
          SELECT img.img_path, img.property_id, property.id, property.title, property.price, property.prop_type, 
             property.desc1, property.purpose, property.n_of_bedrooms, property.n_of_bathrooms, property.address1, 
             property.region, property.area, property.country, property.car_space 
      FROM img 
      JOIN property ON img.property_id = property.id 
      WHERE property.purpose = 'FOR RENT' AND property.area = ? 
        `;

    const results = await new Promise((resolve, reject) => {
      con.query(query, [searchLocation], (err, results) => {
        if (err) return reject(err);
        resolve(results);
      });
    });

    console.log(results);
    return NextResponse.json(results);
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json({ error: "Internal Server Error" });
  }
}
