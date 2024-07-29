import React from "react";
import cityIcon from "@/public/icons/city.svg";
import popularIcon from "@/public/icons/popular.svg";
import waterfrontIcon from "@/public/icons/waterfront.svg";
import ruralIcon from "@/public/icons/rural.svg";
import Image from "next/image";
import ArrowRight from "@/public/icons/ArrowRight.svg"





const Discover = () => {
  return (
    <section className="pt-[40px] font-[500]">
      <div className="w-full flex flex-col items-center">
        <h1 className="text-[35px] mb-[20px] tracking-wide self-center">
          Discover Towns And Cities Neighborhoods
        </h1>
        <div className="flex justify-center w-full text-[16px] text-[#11828D] font-[500] space-x-4 mt-5 mb-5">
          <div className="">
            <a
              href="#"
              className="mr-[10px] border-1 pt-[14px] pb-[14px] pl-[40px] pr-[40px] fill-[#11828D] border-[#11828D]"
            >
              FOR RENT
            </a>
          </div>
          <div className="">
            <a
              href="#"
              className="mr-[10px] border-1 pt-[14px] pb-[14px] pl-[40px] pr-[40px] fill-[#11828D] border-[#11828D]"
            >
              FOR SALE
            </a>
          </div>
        </div>
        <div className="w-[70%] text-[18px] flex flex-col justify-center items-center">

          <section className="section1 flex flex-row justify-between items-center w-full gap-8 mt-[50px] mb-[50px]">
            <div className="">
              <section className="flex flex-row gap-[10px]">
                <Image src={cityIcon} alt="city icon" width={86} height={86} />
                <div>
                  <h1 className="text-[#262637] text-[25px] capitalize font-bold">
                    In The City
                  </h1>
                  <p className=" text-gray-700 mb-[16px]">
                    Live among the hustle and bustle
                  </p>
                </div>
              </section>
            </div>
            <div className="text-[#007782]">
              <section>
                <div>
                  <a href="">
                    <Image src={ArrowRight} width={20} height={20} className="inline"/>
                    {" "}
                    Kololo Properties For Rent
                  </a>
                </div>
                <div>
                  <a href="">
                    <Image src={ArrowRight} width={20} height={20} className="inline"/>
                    {" "}
                    Nakasero Properties For Rent
                  </a>
                </div>
                <div>
                  <a href="">
                    <Image src={ArrowRight} width={20} height={20} className="inline"/>
                    {" "}
                    Mbuya Properties For Rent
                  </a>
                </div>
              </section>
            </div>
            <div className="text-[#007782]">
              <section>
                <div>
                  <a href="">
                    <Image src={ArrowRight} width={20} height={20} className="inline"/>
                    {" "}
                    Butabiika Properies For Rent
                  </a>
                </div>
                <div>
                  <a href="">
                    <Image src={ArrowRight} width={20} height={20} className="inline"/>
                    {" "}
                    Mutungo Hill Properies For Rent
                  </a>
                </div>
                <div>
                  <a href="">
                    <Image src={ArrowRight} width={20} height={20} className="inline"/>
                    {" "}
                    Mengo Properies For Rent
                  </a>
                </div>
              </section>
            </div>
          </section>

          <section className="section2 text-[18px] flex flex-row justify-between items-center w-full gap-8 mt-[50px] mb-[50px]">
            <div className="">
              <section className="flex flex-row gap-[10px]">
                <Image
                  src={waterfrontIcon}
                  alt="city icon"
                  width={86}
                  height={86}
                />
                <div>
                  <h1 className="text-[#262637] text-[25px] capitalize font-bold">
                    Waterfront Property
                  </h1>
                  <p className=" text-gray-700 mb-[16px]">
                    Wake up to fresh air and lake views
                  </p>
                </div>
              </section>
            </div>
            <div className="text-[#007782]">
              <section>
                <div>
                  <a href="">
                    <Image src={ArrowRight} width={20} height={20} className="inline"/>
                    {" "}
                    Katosi Properties For Rent
                  </a>
                </div>
                <div>
                  <a href="">
                    <Image src={ArrowRight} width={20} height={20} className="inline"/>
                    {" "}
                    Munyonyo Properties For Rent
                  </a>
                </div>
                <div>
                  <a href="">
                    <Image src={ArrowRight} width={20} height={20} className="inline"/>
                    {" "}
                    Bunga Properties For Rent
                  </a>
                </div>
              </section>
            </div>
            <div className="text-[#007782]">
              <section>
                <div>
                  <a href="">
                    <Image src={ArrowRight} width={20} height={20} className="inline"/>
                    {" "}
                    Entebbe Properies For Rent
                  </a>
                </div>
                <div>
                  <a href="">
                    <Image src={ArrowRight} width={20} height={20} className="inline"/>
                    {" "}
                    Mukono Hill Properies For Rent
                  </a>
                </div>
                <div>
                  <a href="">
                    <Image src={ArrowRight} width={20} height={20} className="inline"/>
                    {" "}
                    Bujagali Properies For Rent
                  </a>
                </div>
              </section>
            </div>
          </section>

          <section className="section3 text-[18px] flex flex-row justify-between items-center w-full gap-8 mt-[50px] mb-[50px]">
            <div className="">
              <section className="flex flex-row gap-[10px]">
                <Image src={ruralIcon} alt="city icon" width={86} height={86} />
                <div>
                  <h1 className="text-[#262637] text-[25px] capitalize font-bold">
                    Rural And Upcountry
                  </h1>
                  <p className=" text-gray-700 mb-[16px]">
                    Enjoy living close to nature
                  </p>
                </div>
              </section>
            </div>
            <div className="text-[#007782]">
              <section>
                <div>
                  <a href="">
                    <Image src={ArrowRight} width={20} height={20} className="inline"/>
                    {" "}
                    Jinja Properties For Rent
                  </a>
                </div>
                <div>
                  <a href="">
                    <Image src={ArrowRight} width={20} height={20} className="inline"/>
                    {" "}
                    Guru Properties For Rent
                  </a>
                </div>
                <div>
                  <a href="">
                    <Image src={ArrowRight} width={20} height={20} className="inline"/>
                    {" "}
                    Mbarara Properties For Rent
                  </a>
                </div>
              </section>
            </div>
            <div className="text-[#007782]">
              <section>
                <div>
                  <a href="">
                    <Image src={ArrowRight} width={20} height={20} className="inline"/>
                    {" "}
                    Entebbe Properies For Rent
                  </a>
                </div>
                <div>
                  <a href="">
                    <Image src={ArrowRight} width={20} height={20} className="inline"/>
                    {" "}
                    Fortportal Hill Properies For Rent
                  </a>
                </div>
                <div>
                  <a href="">
                    <Image src={ArrowRight} width={20} height={20} className="inline"/>
                    {" "}
                    MUkono Properies For Rent
                  </a>
                </div>
              </section>
            </div>
          </section>

          <section className="section4 text-[18px] flex flex-row justify-between items-center w-full gap-8 mt-[50px] mb-[50px]">
            <div className="">
              <section className="flex flex-row gap-[10px]">
                <Image
                  src={popularIcon}
                  alt="popular icon"
                  width={86}
                  height={86}
                />
                <div>
                  <h1 className="text-[#262637] text-[25px] capitalize font-bold">
                    Popular Locations
                  </h1>
                  <p className=" text-gray-700 mb-[16px]">
                    Move close to everything
                  </p>
                </div>
              </section>
            </div>
            <div className="text-[#007782]">
              <section>
                <div>
                  <a href="">
                    <Image src={ArrowRight} width={20} height={20} className="inline"/>
                    {" "}
                    Kololo Properties For Rent
                  </a>
                </div>
                <div>
                  <a href="">
                    <Image src={ArrowRight} width={20} height={20} className="inline"/>
                    {" "}
                    Nakasero Properties For Rent
                  </a>
                </div>
                <div>
                  <a href="">
                    <Image src={ArrowRight} width={20} height={20} className="inline"/>
                    {" "}
                    Bugolobi Properties For Rent
                  </a>
                </div>
              </section>
            </div>
            <div className="text-[#007782]">
              <section>
                <div>
                  <a href="">
                    <Image src={ArrowRight} width={20} height={20} className="inline"/>
                    {" "}
                    Mbuya Properies For Rent
                  </a>
                </div>
                <div>
                  <a href="">
                    <Image src={ArrowRight} width={20} height={20} className="inline"/>
                    {" "}
                    Luzira Properies For Rent
                  </a>
                </div>
                <div>
                  <a href="">
                    <Image src={ArrowRight} width={20} height={20} className="inline"/>
                    {" "}
                    Lubowa Properies For Rent
                  </a>
                </div>
              </section>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Discover;
