"use client";

import Card from "@/components/Card";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination } from 'swiper/modules';


import { useState } from "react";

const ForSale = () => {
  const options = [
    10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000,
    110000, 120000, 130000, 140000, 150000, 160000, 170000, 180000, 190000,
    200000, 210000, 220000, 230000, 240000, 250000, 275000, 300000, 325000,
    350000, 375000, 400000, 425000, 450000, 475000, 500000, 550000, 600000,
    650000, 700000, 750000, 800000, 850000, 900000, 950000, 1000000, 1100000,
    1200000, 1300000, 1400000, 1500000, 1600000, 1700000, 1800000, 1900000,
    2000000, 2500000, 5000000, 10000000,
  ];

  const options1 = [1, 2, 3, 4, 5, 6, 7, , 8, 9, 10, "Any"];

  const options2 = ["-Condo", "-Penthouse", "-Studio", "-house", "-land"];

  const [filterText, setFilterText] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [dropdownVisible1, setDropdownVisible1] = useState(false);
  const [dropdownVisible2, setDropdownVisible2] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [filteredOptions1, setFilteredOptions1] = useState(options1);
  const [filteredOptions2, setFilteredOptions2] = useState(options2);

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
    <div className="flex flex-col justify-center items-start ml-52 w-full h-full poppins">
      <div className="mt-24 mb-10 poppins-semibold">
        <p className="text-[16px] poppins text-gray-500">Home &gt; For Rent</p>
      </div>
      <div className="property_for_sale w-[73%] bg-[url('/assets/back24.jpg')] bg-center bg-no-repeat bg-cover py-3 mb-7">
        <div className="bg-white ml-5 w-[37%] rounded-lg py-[42px] pr-[22px] pl-[30px] h-auto">
          <p className="text-[20px] poppins-semibold mb-1 text-gray-800">
          Properties to rent
          </p>
          <p className="mb-4 poppins text-[#262637]">
            Search flats and houses for rent in Uganda.
          </p>
          <form action="">
            <div className="flex flex-col items-start justify-center mb-[19px]">
              <label htmlFor="search-area" className="mb-1 font-bold">
                Search area
              </label>
              <div className="w-full">
                <input
                  type="search"
                  placeholder="e.g. Kololo"
                  id="search-area"
                  className="border-[2px] border-solid border-[#bbb] box-border rounded-l-[4px] text-gray-800 py-[10px] px-3 text-[18px] poppins outline-gray-black focus:outline-none w-[83%]"
                />
                <a
                  href="#"
                  className="border-[2px] border-l-0 border-solid border-[#bbb] box-border rounded-r-[4px] text-gray-800 py-[15px] px-4 text-[16px]"
                >
                  #
                </a>
              </div>
            </div>

            <div className="flex justify-between items-center mb-[19px]">
              <div className="dropdown relative">
                {/* Bedrooms */}
                <label htmlFor="" className="poppins-semibold">
                  Bedrooms
                </label>
                <button
                  type="button"
                  onClick={toggleDropdown}
                  className="border border-solid border-[#ccc] box-border rounded-[4px] text-gray-800 py-[8px] px-4 text-[16px] flex items-center justify-between"
                >
                  <div className="mr-8">
                    <p className="text-[#777]">Bedrooms</p>
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

              {/*Max Price */}
              <div className="dropdown relative">
                <label htmlFor="" className="poppins-semibold">
                  Max. Price
                </label>
                <button
                  type="button"
                  onClick={toggleDropdown1}
                  className="border border-solid border-[#ccc] box-border rounded-[4px] text-gray-800 py-[8px] px-4 text-[16px] flex items-center justify-between"
                >
                  <div className="mr-8">
                    <p className="text-[#777]">Max. Price</p>
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
            </div>

            {/* Property type */}

            <div className="dropdown relative mb-[19px]">
              <label htmlFor="" className="poppins-semibold">
                Property Type
              </label>
              <button
                type="button"
                onClick={toggleDropdown2}
                className="text-[#777] border border-solid border-[#ccc] box-border rounded-[4px] py-[8px] px-4 text-[16px] flex items-center justify-between w-full"
              >
                <div className="mr-8">
                  <p className="text-[#777]">All Types</p>
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

            <button
              type="submit"
              className="w-full mb-[19px] bg-[#03CAA6] text-[16px] tracking-[2.2px] text-white pt-[18px] pr-[14px] pb-[16px] pl-[14px] cursor-pointer rounded-[4px]"
            >
              Search
            </button>
          </form>
        </div>
      </div>

      <div className="mt-7 p-[30px] w-1/2">
        <p className="text-[26px] font-bold text-gray-800 mb-[20px]">
        Find Your Perfect Rental Property With Doorsteps
        </p>
        <p className="text-[19px] text-[#606060] mb-[30px]">
          Find the perfect property with:
        </p>
        <ul className="flex flex-col items-start justify-between text-[20px] text-gray-800 w-[80%] list-disc ml-4">
          <li className="mb-4 ml-6">
            <b className="text-gray-800">Advanced search filters: &nbsp;</b>
            <span className="text-[#606060]">
              To quickly narrow down your <br />
              options
            </span>
          </li>
          <li className="mb-4 ml-6">
            <b className="text-gray-800">Trusted local agents: &nbsp;</b>
            <span className="text-[#606060]">
              To secure those first viewings
            </span>
          </li>
          <li className="mb-4 ml-6">
            <b className="text-gray-800">Instant alerts: &nbsp;</b>
            <span className="text-[#606060]">
              So you’ll never miss a new property <br />
              listing
            </span>
          </li>
          <li className="ml-6">
            <b className="text-gray-800">Recently Let Agreed prices: &nbsp;</b>
            <span className="text-[#606060]">
              So you can make the winning offer
            </span>
          </li>
        </ul>
      </div>

      {/* Sign In To Save Your Favorites */}

      <section className="w-full flex items-center justify-start pt-[24px] mt-6">
        <div className="max-w-[1140px] flex items-center justify-center bg-[#002A2D] pl-[3%] pt-[1.3%] rounded-[20px]">
          <section
            className="p-10"
          >
            <div className="mb-[5%]">
              <h2 className="text-[30px] text-white font-bold">
                Sign In To Save Your Favorites
              </h2>
            </div>
            <div className="text-white poppins-semibold text-[21px] mb-[5%]">
              <p>
                Say Goodbye To Multiple Tabs. Save Your Favourite Properties For
                Sale All In One Place.
              </p>
            </div>
            {/* <div className="flex items-center justify-center  text-[18px] fill-[#002A2D] text-[#002A2D] w-[70%] h-[15%] "> */}
            <a
              className="py-[10px] px-6 text-[15px] bg-white rounded-md font-semibold ml-3"
              href="https://doorsteps.co.ug/valuate/"
            >
              Sign In or Create account
            </a>
          </section>
          <div className="" data-id="db35f86" data-element_type="column">
            <div
              data-id="b2cff5a"
              data-element_type="widget"
              data-widget_type="image.default"
            >
              <img
                fetchpriority="high"
                decoding="async"
                src="https://doorsteps.co.ug/wp-content/uploads/2023/06/Saved-properties_8__2_-svg.png"
                alt=""
                srcset="https://doorsteps.co.ug/wp-content/uploads/2023/06/Saved-properties_8__2_-svg.png 900w, https://doorsteps.co.ug/wp-content/uploads/2023/06/Saved-properties_8__2_-svg-300x162.png 300w, https://doorsteps.co.ug/wp-content/uploads/2023/06/Saved-properties_8__2_-svg-768x416.png 768w, https://doorsteps.co.ug/wp-content/uploads/2023/06/Saved-properties_8__2_-svg-496x268.png 496w"
                sizes="(max-width: 900px) 100vw, 800px"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="pt-[70px] pb-[30px] w-full">
        <p className="font-bold text-[27px] font-sans pb-[10px]">The latest on Renting a property in Uganda</p>
        <div className="mySwiper" style={{ padding: "5% 25% 0 0"}}>
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
        >
          <SwiperSlide className="mb-16 mr-5">
            <Card src="/justAskDoorstep/1.jpg" date="" title={"First Example"} desc={"I have nothing to say, this is just a test"}/>
          </SwiperSlide>
          <SwiperSlide>
            <Card src="/justAskDoorstep/2.jpg" date="" title={"Second Example"} desc={"Something else just to complete the card"}/>
          </SwiperSlide>
          <SwiperSlide>
            <Card src="/justAskDoorstep/3.jpg" date="" title={"Third Example"} desc={"Its another example to make the page look good"}/>
          </SwiperSlide>
          <SwiperSlide>
            <Card src="/justAskDoorstep/4.jpg" date="" title={"Forth Example"} desc={"The mistake in your previous code was related to the incorrect placement of parentheses"}/>
          </SwiperSlide>
          <SwiperSlide>
            <Card src="/justAskDoorstep/5.jpg" date="" title={"Fifth Example"} desc={"Specifically around the conditional rendering and the closing of the JSX block"}/>
          </SwiperSlide>
          <SwiperSlide>
            <Card src="/justAskDoorstep/6.jpg" date="" title={"Sixth Example"} desc={"Here's a closer look at the mistake and the corrected code"}/>
          </SwiperSlide>
        </Swiper>
      </div>
      </section>
    </div>
  );
};

export default ForSale;
