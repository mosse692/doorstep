import React from "react";

const BeforeFooter = () => {
  return (
    <section className="w-full flex items-center flex-row justify-center pt-[5%] pb-[4%] ml-5">
      <div className="max-w-[1140px] flex flex-row items-center justify-center bg-[#002A2D] p-[50px] pr-[5%] pl-[5%] rounded-[20px]">
        <section
          className="mr-[3%] w-[50%] flex items-center justify-center"
        >
          <a href="#" className="w-full text-[20px] text-[#002A2D] font-bold py-2 px-6 rounded-[3px] text-center bg-white">List Your Property With Doorsteps</a>
        </section>
        <div className="w-[40%] text-[18px] font-thin flex justify-center items-center pb-4">
          <p className="text-white">
            Grow your Brand with a Doorsteps membership by getting your listings
            in front of the highest-intent active home seekers Today!
          </p>
        </div>
      </div>
    </section>
  );
};

export default BeforeFooter;
