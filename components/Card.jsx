"use client";

import pic1 from "@/public/assets/agencies/agency.png"
import pic2 from "@/public/assets/agencies/aguila.png"
import pic3 from "@/public/assets/agencies/intro.jpg"
import pic4 from "@/public/assets/agencies/national.png"
import pic5 from "@/public/assets/agencies/palm.png"

let pics = [pic1, pic2, pic3, pic4, pic5]

const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * pics.length);
  return pics[randomIndex];
};

const Card = ({
  title,
  price,
  desc,
  type,
  bedrooms,
  bathrooms,
  images,
  src,
  purpose,
  id,
  date,
  width,
  address1,
  region,
  area,
  country,
  car_space,
  height,
  agency
}) => {

  const randomImage = getRandomImage();

  return (
    <div
      className="card"
      style={{
        width: `${width ? width : "18rem"}`,
        height: `${height ? height : "30rem"}`,
      }}
    >
      {purpose ? (
        <>
          <div id={id} className="carousel slide">
            <div className="carousel-inner">
              {images.map((image, idx) => (
                <div
                  key={`${idx}-${image.property_id}`}
                  className={`carousel-item ${
                    idx === 0 ? "active" : ""
                  } w-full`}
                >
                  <img
                    className="card-img-top d-block"
                    key={idx}
                    src={image.img_path}
                    alt="image"
                  />
                </div>
              ))}
            </div>
            {images.length > 1 ? (
              <>
                <button
                  className="carousel-control-prev h-[50%]"
                  type="button"
                  data-bs-target={`#${id}`}
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next h-[50%]"
                  type="button"
                  data-bs-target={`#${id}`}
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </>
            ) : (
              <></>
            )}
            <div className="card-body flex flex-col items-start justify-start">
              {date ? date : ""}
              <h5 className="card-title font-bold mb-2 text-[16px]">
                {`Fixed USD price: ${price}/${
                  purpose === "FOR RENT" ? "month" : ""
                }`}
              </h5>
              <div className="flex items-start justify-start w-[90%]">
                <a
                  href="/"
                  className="card-title text-[16px] font-bold truncate"
                >
                  {desc}
                </a>
              </div>

              <div className="h-8 w-[90%] flex items-start justify-start">
                <p className="card-text text-[14px] text-gray-400 truncate">{`${
                  address1 || "N/A"
                }, ${region || "N/A"}, ${area || "N/A"}, ${
                  country || "N/A"
                }`}</p>
              </div>
              <p className="text-[14px] font-semibold mt-2">{type}</p>
              {/*Number of cars, bahrooms and bedrooms*/}
              <div className="flex items-start justify-start mb-4">
                <ul className="flex items-start justify-start mr-4 space-x-4 ml-[-10px]">
                  <li className="h-7 w-7 flex items-center justify-between">
                    <img src="/assets/shower.svg" alt="Shower icon" style={{ width: '25px', height: '25px'}}/>
                    {bathrooms}
                  </li>
                  <li className="h-7 w-7 flex items-center justify-center">
                    <img
                      src="/assets/bed.svg"
                      alt="Bed icon"
                      className="mr-1 ml-2"
                      style={{ width: '25px', height: '25px'}}
                    />
                    {bedrooms}
                  </li>
                  <li className="h-7 w-7 flex items-center justify-center">
                    <img
                      src="/assets/car.svg"
                      alt="Car icon"
                      className="mr-1 ml-1"
                      style={{ width: '25px', height: '25px'}}
                    />
                    {car_space}
                  </li>
                </ul>
              </div>
              {/*  */}
              <div className="flex items-center justify-between border-t-2 w-full pt-2">
                <a href="#" className="btn">
                  <img src={randomImage.src} style={{width: '35px', height: '35px'}}/>
                </a>
                <div className="flex h-[30px]">
                  <a href="#" className="btn border flex items-center justify-evenly poppins mr-1">
                      <img
                        src="/assets/call_cell.svg"
                        alt=""
                        className="mr-2"
                        style={{ width: '20px', height: '20px' }}
                      />
                      <p>Call</p>
                  </a>

                  <a href="#" className="btn border poppins flex items-center justify-evenly">
                    <img src="/assets/email.svg" alt="" className="mr-2" style={{ width: '20px', height: '20px' }}/>
                    <p>Email</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col items-center justify-between overflow-hidden">
            <div className="w-full">
              <img className="" src={src} alt="image" />
            </div>

            <div className="card-body flex flex-col items-start justify-between">
              {date ? date : ""}
              <div className="flex items-start justify-start">
                <a href="#" className="card-title font-bold">
                  {title}
                </a>
              </div>
            </div>
            <div className="p-[2%] w-[90%]">
              <p className=" text-[16px]  truncate ">
                {desc}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
