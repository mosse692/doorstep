"use client";

import Card1 from "@/components/Card1";
import Card from "@/components/Card";
import React from "react";
import { useState, useEffect } from "react";

const ToSale = () => {
  const options = [
    10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000,
    110000, 120000, 130000, 140000, 150000, 160000, 170000, 180000, 190000,
    200000, 210000, 220000, 230000, 240000, 250000, 275000, 300000, 325000,
    350000, 375000, 400000, 425000, 450000, 475000, 500000, 550000, 600000,
    650000, 700000, 750000, 800000, 850000, 900000, 950000, 1000000, 1100000,
    1200000, 1300000, 1400000, 1500000, 1600000, 1700000, 1800000, 1900000,
    2000000, 2500000, 5000000, 10000000,
  ];

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const options1 = [1, 2, 3, 4, 5, 6, 7, , 8, 9, 10, "Any"];

  const options2 = ["-Condo", "-Penthouse", "-Studio", "-house", "-land"];

  const [filterText, setFilterText] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [dropdownVisible1, setDropdownVisible1] = useState(false);
  const [dropdownVisible2, setDropdownVisible2] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [filteredOptions1, setFilteredOptions1] = useState(options1);
  const [filteredOptions2, setFilteredOptions2] = useState(options2);

  const data = (url, fn) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const groupedData = groupByPropertyId(data);
        fn(groupedData);
        setLoading(false);
        // console.log(data)
        // console.log(groupedData)
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    data("http://localhost:3000/api/commercial/to-sale", setImages);
  }, []);

  const groupByPropertyId = (data) => {
    return Object.values(
      data.reduce((acc, obj) => {
        const propertyId = obj.property_id;
        if (!acc[propertyId]) {
          acc[propertyId] = [];
        }
        acc[propertyId].push(obj);
        return acc;
      }, {})
    );
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const toggleDropdown = () => {
    setDropdownVisible((prevVisible) => !prevVisible);
  };

  const toggleDropdown1 = () => {
    setDropdownVisible1((prevVisible1) => !prevVisible1);
  };

  const toggleDropdown2 = () => {
    setDropdownVisible2((prevVisible2) => !prevVisible2);
  };

  const filterOptions = () => {
    const filtered = options.filter((option) =>
      option.toString().includes(filterText)
    );
    setFilteredOptions(filtered);
  };

  const filterOptions1 = () => {
    const filtered = options1.filter((option) =>
      option.toString().includes(filterText)
    );
    setFilteredOptions1(filtered);
  };

  const filterOptions2 = () => {
    const filtered = options2.filter((option) =>
      option.toString().includes(filterText)
    );
    setFilteredOptions2(filtered);
  };
  return (
    <>
      <div className="mt-20 w-full flex items-center justify-center">
        <form
          action=""
          className="flex items-center justify-evenly border-[1px] border-solid border-[#222] w-[75%] rounded-md py-2"
        >
          {/* Search area */}
          <div className="flex flex-col items-start justify-center w-[20%]">
            <label
              htmlFor="search-area"
              className="poppins-semibold border-r-[2px] border-solid border-r-[#222] w-full"
            >
              Search area
            </label>
            <div className="text-gray-800 text-[16px]">
              <input
                type="search"
                placeholder="Location"
                id="search-area"
                className="text-gray-800 py-[5px] text-[18px] poppins outline-none focus:outline-none"
              />
              #
            </div>
          </div>

          {/* Search radius */}
          <div className="w-auto">
            <label
              htmlFor=""
              className="poppins-semibold pl-4 border-r-[2px] border-solid border-r-[#222] w-full"
            >
              Search radius
            </label>
            <button
              type="button"
              onClick={toggleDropdown}
              className="text-[18px] outline-gray-black box-border rounded-[4px] text-gray-800 py-[5px] px-3 flex items-center justify-between"
            >
              <div className="mr-8">
                <p className="text-[#777]">This area only</p>
              </div>
              <div className="">
                <img src="/assets/scroll.svg" alt="" className="w-4 h-4" />
              </div>
            </button>
            <div
              className={`dropdown-content absolute bg-[#f6f6f6] max-w-[230px] border-[1px solid #ddd] z-[1] ${
                dropdownVisible ? "" : "hidden"
              }`}
            >
              <div className="max-h-[12rem] overflow-scroll w-full">
                {filteredOptions.map((option) => (
                  <a
                    href="#"
                    key={option}
                    data-value={option}
                    className="text-black py-[12px] px-[16px] no-underline hover:bg-[#f1f1f1] block w-full"
                  >
                    {option}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bedrooms */}
          <div className="">
            <label
              htmlFor=""
              className="poppins-semibold pl-4 border-r-[2px] border-solid border-r-[#222] w-full"
            >
              Bedrooms
            </label>
            <button
              type="button"
              onClick={toggleDropdown}
              className="text-[18px] text-gray-800 py-[5px] px-3 flex items-center justify-between"
            >
              <div className="mr-8">
                <p className="text-[#777]">Any Beds</p>
              </div>
              <div className="">
                <img src="/assets/scroll.svg" alt="" className="w-4 h-4" />
              </div>
            </button>
            <div
              className={`dropdown-content absolute bg-[#f6f6f6] max-w-[230px] border-[1px solid #ddd] z-[1] ${
                dropdownVisible ? "" : "hidden"
              }`}
            >
              <div className="max-h-[12rem] overflow-scroll w-full">
                {filteredOptions.map((option) => (
                  <a
                    href="#"
                    key={option}
                    data-value={option}
                    className="text-black py-[12px] px-[16px] no-underline hover:bg-[#f1f1f1] block w-full"
                  >
                    {option}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/*Price range */}
          <div className="w-auto">
            <label
              htmlFor=""
              className="poppins-semibold pl-4 border-r-[2px] border-solid border-r-[#222] w-full"
            >
              Max. Price
            </label>
            <button
              type="button"
              onClick={toggleDropdown1}
              className="text-[18px] text-gray-800 py-[5px] px-3 flex items-center justify-between"
            >
              <div className="mr-8">
                <p className="text-[#777]">Any Price</p>
              </div>
              <div className="">
                <img src="/assets/scroll.svg" alt="" className="w-4 h-4" />
              </div>
            </button>
            <div
              className={`dropdown-content absolute bg-[#f6f6f6] max-w-[230px] border-[1px solid #ddd] z-[1] ${
                dropdownVisible1 ? "" : "hidden"
              }`}
            >
              <input
                type="text"
                placeholder="Search.."
                value={filterText}
                onChange={(e) => setFilterText(e.target.value)}
                className="focus:outline-none box-border bg-[url('/assets/search.svg')] bg-cust-p bg-no-repeat text-[16px] pt-[13px] pb-[14px] pl-[30px] border-none border-b-[1px solid #ddd] focus:outline-[3px solid #ddd]"
                style={{
                  backgroundSize: "15px auto",
                  backgroundPosition: "10px center",
                }}
              />

              <div className="max-h-[12rem] overflow-scroll w-full">
                {filteredOptions1.map((option) => (
                  <a
                    href="#"
                    key={option}
                    data-value={option}
                    className="text-black py-[12px] px-[16px] no-underline hover:bg-[#f1f1f1] block w-full"
                  >
                    ${option}
                  </a>
                ))}
              </div>
            </div>
          </div>
          {/* Property type */}

          <div className="">
            <label htmlFor="" className="poppins-semibold pl-4 w-full">
              Property Type
            </label>
            <button
              type="button"
              onClick={toggleDropdown2}
              className="text-[18px] text-gray-800 py-[5px] px-3 flex items-center justify-between"
            >
              <div className="mr-8">
                <p className="text-[#777]">Commercial-Pro</p>
              </div>
              <div className="">
                <img src="/assets/scroll.svg" alt="" className="w-4 h-4" />
              </div>
            </button>
            <div
              className={`dropdown-content absolute bg-[#f6f6f6] max-w-[230px] border-[1px solid #ddd] z-[1] ${
                dropdownVisible2 ? "" : "hidden"
              }`}
            >
              <div className="max-h-[12rem] overflow-scroll w-full">
                {filteredOptions2.map((option) => (
                  <a
                    href="#"
                    key={option}
                    data-value={option}
                    className="text-black py-[12px] px-[16px] no-underline hover:bg-[#f1f1f1] block w-full"
                  >
                    {option}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="">
            <button
              type="submit"
              className="bg-[#009177] text-[18px] poppins tracking-[2.2px] text-white py-[13px] px-[18px] cursor-pointer rounded-[4px]"
            >
              Search
            </button>
          </div>
        </form>

        <div className="">
          <button
            type="submit"
            className="bg-transparent text-[18px] poppins tracking-[2.2px] text-black py-[11px] px-[18px] cursor-pointer rounded-[4px] flex items-center justify-between border-[2px] border-solid border-[#222] ml-3"
          >
            <p className="mr-3">#</p>
            Advance
          </button>
        </div>
      </div>

      <section className="bg-[#aaa1] flex flex-col items-start justify-center mt-2 py-[30px] px-[110px]">
        <div>
          <p className="text-[16px] poppins text-gray-500 mb-3">
            Home &gt; For Rent
          </p>
          <p className="text-[30px] poppins-semibold text-[#003] mb-">
            Search Results
          </p>
        </div>
        <div className="flex">
          <div className="">
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="poppins-semibold">{images.length} Results Found</p>{" "}
                {/*Make the results dynamic by returning count fro the database*/}
              </div>
              <div className="flex items-center justify-center">
                <div className="flex items-center justify-center">
                  <p className="poppins">Sort by:</p>
                  <div className="">
                    <button
                      type="button"
                      onClick={toggleDropdown2}
                      className="text-[18px] text-gray-800 py-[5px] px-3 flex items-center justify-between"
                    >
                      <div className="mr-8">
                        <p className="text-[#777]">Default-order</p>
                      </div>
                      <div className="">
                        <img
                          src="/assets/scroll.svg"
                          alt=""
                          className="w-4 h-4"
                        />
                      </div>
                    </button>
                    <div
                      className={`dropdown-content absolute bg-[#f6f6f6] max-w-[230px] border-[1px solid #ddd] z-[1] ${
                        dropdownVisible2 ? "" : "hidden"
                      }`}
                    >
                      <div className="max-h-[12rem] overflow-scroll w-full">
                        {filteredOptions2.map((option) => (
                          <a
                            href="#"
                            key={option}
                            data-value={option}
                            className="text-black py-[12px] px-[16px] no-underline hover:bg-[#f1f1f1] block w-full"
                          >
                            {option}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Button */}
                <div>
                  <button
                    type="submit"
                    className="bg-[#007782] text-[16px] poppins tracking-[2.2px] text-white py-[13px] px-[18px] cursor-pointer rounded-[4px] flex"
                  >
                    <p className="mr-2">#</p>
                    Save Search
                  </button>
                </div>
              </div>
            </div>
            {/* Cards */}

            {console.log(images)}

            <div className="flex items-center justify-between pb-5">
              <Card
                id={images[0][0].img_path}
                images={images[0]}
                title={images[0][0].title}
                price={images[0][0].price}
                desc={images[0][0].desc1}
                type={images[0][0].prop_type}
                bedrooms={images[0][0].n_of_bedrooms}
                bathrooms={images[0][0].n_of_bathrooms}
                purpose={images[0][0].purpose}
                address1={images[0][0].address1}
                region={images[0][0].region}
                area={images[0][0].area}
                country={images[0][0].country}
                car_space={images[0][0].car_space}
                height={"32rem"}
                width={"17rem"}
              />
              <Card
                id={images[1][0].img_path}
                images={images[1]}
                title={images[0][0].title}
                price={images[0][0].price}
                desc={images[0][0].desc1}
                type={images[0][0].prop_type}
                bedrooms={images[0][0].n_of_bedrooms}
                bathrooms={images[0][0].n_of_bathrooms}
                purpose={images[0][0].purpose}
                address1={images[0][0].address1}
                region={images[0][0].region}
                area={images[0][0].area}
                country={images[0][0].country}
                car_space={images[0][0].car_space}
                height={"32rem"}
                width={"17rem"}
              />
              <Card
                id={images[2][0].img_path}
                images={images[2]}
                title={images[0][0].title}
                price={images[0][0].price}
                desc={images[0][0].desc1}
                type={images[0][0].prop_type}
                bedrooms={images[0][0].n_of_bedrooms}
                bathrooms={images[0][0].n_of_bathrooms}
                purpose={images[0][0].purpose}
                address1={images[0][0].address1}
                region={images[0][0].region}
                area={images[0][0].area}
                country={images[0][0].country}
                car_space={images[0][0].car_space}
                height={"32rem"}
                width={"17rem"}
              />
            </div>

            <div>
              {images.map((image) => (
                <Card1
                  images={image}
                  price={image[0].price}
                  desc={image[0].desc1}
                  type={image[0].prop_type}
                  bedrooms={image[0].n_of_bedrooms}
                  bathrooms={image[0].n_of_bathrooms}
                  purpose={image[0].purpose}
                  id={image[0].id}
                  address1={image[0].address1}
                  region={image[0].region}
                  area={image[0].area}
                  country={image[0].country}
                  car_space={image[0].car_space}
                />
              ))}
            </div>
          </div>
          <aside className=" w-[27%] ml-5">
            <div className="mb-[32px] h-[36rem] p-[30px] bg-white">
              <img src="/assets/Advertise-with-us.jpg" alt="" />
            </div>

            <div className="p-[30px] mt-[30px] bg-white">
              <div className="mb-3">
                <p className="poppins-semibold">Recently Viewed Properties</p>
              </div>
              <div>
                {images.map((image, idx) => {
                  if (idx >= 5) {
                    return;
                  } else {
                    return (
                      <>
                        <div className="flex rounded-md">
                          <div className="h-full w-1/2 mr-4 mb-12">
                            <img src={image[0].img_path} alt="" />
                          </div>
                          <div className="h-full w-1/2 poppins">
                            <div>
                              <p className="poppins-semibold">{image[0].title}</p>
                            </div>
                            <div>
                              <p>{`Fixed price: $${image[0].price} USD`}</p>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  }
                })}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
};

export default ToSale;
