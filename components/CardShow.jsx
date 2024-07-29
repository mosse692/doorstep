"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "@/styles/styles.css";
import { FreeMode, Pagination } from "swiper/modules";
import Card from "./Card";

const CardShow = ({ purpose, date, pics }) => {

  return (
    <div className="mySwiper">
      {purpose && (
        <h1 className="text-[40px] mb-10">{`Properties for ${purpose}`}</h1>
      )}
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        freeMode={true}
        pagination={{ clickable: true }}
        modules={[FreeMode, Pagination]}
      >
        {pics.map((group, index) => (
          <SwiperSlide key={group[0].property_id}>
            <Card
              date={date}
              id={purpose + index}
              images={group}
              title={group[0].title}
              price={group[0].price}
              desc={group[0].desc1}
              type={group[0].prop_type}
              bedrooms={group[0].n_of_bedrooms}
              bathrooms={group[0].n_of_bathrooms}
              purpose={group[0].purpose}
              address1={group[0].address1}
              region={group[0].region}
              area={group[0].area}
              country={group[0].country}
              car_space={group[0].car_space}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardShow;
