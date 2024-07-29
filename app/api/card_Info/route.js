import con from "@/utils/db";

//Handle for /api/card_Info
export async function GET(request) {
  try {
    let result;
    await new Promise((resolve, reject) => {
      con.query(
        "SELECT property_id, title, prop_type from img",
        function (err, results) {
          if (err) reject(err);
          // console.log(results)
          result = results
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

