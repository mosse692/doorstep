import React from "react";
import Image from "next/image";
import facebook from "@/public/icons/facebook.svg";
import youtube from "@/public/icons/youtube.svg";
import instagram from "@/public/icons/instagram.svg";
import pinterest from "@/public/icons/pinterest.svg";
import twitter from "@/public/icons/twitter.svg";
import Bottom from "./Bottom";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center">
      <div className="w-full flex flex-row justify-evenly items-center border-t-[1px] pt-[7%] pb-[2%]">
        <div className="ml-10">
          <div className="logo logo-desktop mb-4">
            <a href="https://doorsteps.co.ug/" className="w-[71%]">
              <Image
                src="/assets/logo.png"
                height={100}
                width={250}
                alt="logo"
              />
            </a>
          </div>
          <div className="flex items-center justify-start mb-4">
            <div className="rounded-full overflow-hidden p-2 bg-[#262637]">
              <a href="https://www.facebook.com">
                <Image src={facebook} width={20} height={20} alt="Facebook" />
              </a>
            </div>

            <div className="rounded-full overflow-hidden p-2 ml-2 bg-[#262637]">
              <a href="https://www.twitter.com">
                <Image src={twitter} width={20} height={20} alt="Twitter" />
              </a>
            </div>

            <div className="rounded-full overflow-hidden p-2 ml-2 bg-[#262637]">
              <a href="https://www.instagram.com">
                <Image src={instagram} width={20} height={20} alt="Instagram" />
              </a>
            </div>

            <div className="rounded-full overflow-hidden p-2 ml-2 bg-[#262637]">
              <a href="https://www.pinterest.com">
                <Image src={pinterest} width={20} height={20} alt="Pinterest" />
              </a>
            </div>

            <div className="rounded-full overflow-hidden p-2 ml-2 bg-[#262637]">
              <a href="https://www.youtube.com">
                <Image src={youtube} width={20} height={20} alt="YouTube" />
              </a>
            </div>
          </div>

          <div className="text-[16px] text-gray-500 flex flex-col justify-center items-start mb-4">
            <a href="">Find Your Home Online</a>
            <a href="">Genuine Properties, Fair Prices</a>
          </div>

          <div className="text-[16px] text-gray-700 flex flex-col justify-center items-start">
            <h1 className="font-bold mb-4">SUBSCRIBE TO OUR NEWSLETTER</h1>
            <form className="flex flex-row text-[18px]">
              <input
                type="search"
                placeholder="Enter your email"
                className="border-[#C9C9C9] border-[1px] border-solid mr-1 py-[5px] px-[10px] w-[55%]"
              />
              <button className="bg-[#262637] px-[40px] py-[5px] text-white">
                Submit
              </button>
            </form>
          </div>
        </div>

        <div className="w-[15%]">
          <div className="mb-6">
            <h1 className="mb-6 text-[14px] font-bold">ADVERTISERS</h1>
            <ul className="text-gray-500">
              <li>
                <a href="">Advertise</a>
              </li>
              <li>
                <a href="">Add a Property</a>
              </li>
              <li>
                <a href="">Cosumer portal</a>
              </li>
            </ul>
          </div>

          <div>
            <h1 className="mb-6 text-[14px] font-bold">BLOG</h1>
            <ul className="text-gray-500">
              <li>
                <a href="">Navigating The Rental Scene In Kampala</a>
              </li>
              <li>
                <a href="">Avoid Rental Scams</a>
              </li>
              <li>
                <a href="">Things To Know Before Moving To Uganda</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pb-[8%]">
          <div className="mb-6">
            <h1 className="mb-6 text-[14px] font-bold">
              RESIDENTIAL PROPERTIES
            </h1>
            <ul className="text-gray-500">
              <li>
                <a href="">Find And Buy Your Dream House Today</a>
              </li>
            </ul>
          </div>

          <div>
            <h1 className="mb-6 text-[14px] font-bold">
              COMMERCIAL PROPERTIES
            </h1>
            <ul className="text-gray-500">
              <li>
                <a href="">Buy Your Dream Commercial Building</a>
              </li>
              <li>
                <a href="">Rent Your Ideal Commercial Property</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pb-[8%]">
          <div>
            <h1 className="mb-6 text-[14px] font-bold">NEIGHBOR-HOODS</h1>
            <ul className="text-gray-500">
              <li>
                <a href="">Kololo</a>
              </li>
              <li>
                <a href="">Bugolobi</a>
              </li>
              <li>
                <a href="">Buziga</a>
              </li>
              <li>
                <a href="">Muyenga</a>
              </li>
              <li>
                <a href="">Kansanga</a>
              </li>
              <li>
                <a href="">Luzira</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pb-[8%]">
          <div>
            <h1 className="mb-6 text-[14px] font-bold">ABOUT US</h1>
            <ul className="text-gray-500">
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Careers</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
              <li>
                <a href="">Legal Notices</a>
              </li>
              <li>
                <a href="">Privacy Notice</a>
              </li>
              <li>
                <a href="">Luzira</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Bottom/>
    </footer>
  );
};

export default Footer;
