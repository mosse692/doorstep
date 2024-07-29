import con from "@/utils/db";

//Handle for /api/users/route
export async function GET(request) {
  try {
    let result;
    await new Promise((resolve, reject) => {
      con.query(
        "SELECT img.img_path, img.property_id, property.id, property.title, property.price, property.prop_type, property.desc1, property.purpose, property.n_of_bedrooms, property.n_of_bathrooms, property.address1, property.region, property.area, property.country, property.car_space FROM img JOIN property ON img.property_id = property.id WHERE property.purpose = 'FOR SALE' LIMIT 45",
        function (err, results) {
          if (err) reject(err);
          // console.log(results)
          result = results;
          console.log("Query successful!");
          resolve();
        }
      );
    });

    return new Response(JSON.stringify(result));
  } catch (error) {
    console.error("An error occurred:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
