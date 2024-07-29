"use client"

import Card from "./Card";
// import seven from "@/public/imgs/property1/7.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination } from 'swiper/modules';

const AskDoorstep = () => {
  return (
    <div className="flex flex-col pb-[40px]">
      <h1 className="self-center font-bold text-[24px] mb-[2%]">
        Looking For Facts, Trends Or Property Advice
      </h1>
      <p className="self-center text-[18px] text-[#7A7A7A] font-semibold">
        Just ask Doorsteps
      </p>

      <div className="mySwiper">
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
        >
          <SwiperSlide>
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

      <a href="" className="self-end mr-[15%] text-[17px] font-bold">Read more <span></span></a>
    </div>
  );
};

export default AskDoorstep;
