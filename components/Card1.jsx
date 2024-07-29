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
}) => {

  const randomImage = getRandomImage();

  return (
    <div
      className="card flex flex-row w-full mb-8"
      // style={{
      //   width: `${width ? width : "18rem"}`,
      //   height: "30rem",
      // }}
    >
      <div id={id} className="carousel slide w-1/2">
        <div className="carousel-inner">
          {images.map((image, idx) => (
            <div
              key={`${idx}-${image.property_id}`}
              className={`carousel-item ${idx === 0 ? "active" : ""} w-full`}
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
              className="carousel-control-prev h-[100%]"
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
              className="carousel-control-next h-[100%]"
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
      </div>
      <div className="card-body flex flex-col items-start justify-start w-1/2">
        <div className="flex items-start justify-start w-[90%] poppins-semibold">
          <a href="/" className="card-title text-[17px] font-bold truncate">
            {desc}
          </a>
        </div>
        <h5 className="poppins mb-2 text-[17px]">
          {`Fixed USD price: ${price}${purpose === "FOR RENT" ? "/month" : ""}`}
        </h5>

        <div className="h-8 w-[90%] flex items-start justify-start">
          <p className="card-text text-[14px] text-gray-400 truncate poppins">{`${
            address1 || "N/A"
          }, ${area || "N/A"}, ${country || "N/A"}`}</p>
        </div>
        <p className="text-[14px] font-semibold mt-2 poppins">{type}</p>
        {/*Number of cars, bahrooms and bedrooms*/}
        <div className="flex items-start justify-start mb-5">
          <ul className="flex items-start justify-start mr-4 space-x-4 ml-[-10px]">
            <li className="h-7 w-7 flex items-center justify-between">
              <img src="/assets/shower.svg" alt="Shower icon" className="w-full h-full"/>
              {bathrooms}
            </li>
            <li className="h-7 w-7 flex items-center justify-center">
              <img src="/assets/bed.svg" alt="Bed icon" className="mr-1 ml-2 w-full h-full" />
              {bedrooms}
            </li>
            <li className="h-7 w-7 flex items-center justify-center">
              <img src="/assets/car.svg" alt="Car icon" className="mr-1 ml-1 w-full h-full" />
              {car_space}
            </li>
          </ul>
        </div>
        {date ? date : ""}
        {/*  */}
        <div className="flex items-center justify-between border-t-2 w-full pt-2">
          <a href="#" className="btn w-1/2 h-auto">
            <img src={randomImage.src} alt="pic1" className="w-[80%] h-[80%]"/>
          </a>
          <div className="flex">
            <a href="#" className="btn border flex poppins mr-2">
              <img src="/assets/call_cell.svg" alt="" className="w-5 h-5 mr-2"/><p>Call</p>
            </a>

            <a href="#" className="btn border flex poppins">
              <img src="/assets/email.svg" alt="" className="w-5 h-5 mr-2"/><p>Email</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
