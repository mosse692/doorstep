"use client";

import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { SearchContext } from "@/context/SearchContext";

const Search = () => {
  const [text, setText] = useState("");
  const [click, setCLick] = useState("For Sale");
  const { setSearchResults } = useContext(SearchContext);
  const router = useRouter();

  useEffect(() => {
    const firstLi = document.querySelector(".link-one");
    const secondLi = document.querySelector(".link-two");
    const thirdLi = document.querySelector(".link-three");

    firstLi.addEventListener("click", () => {
      const bottomLine = document.querySelector(".bottom__line");
      bottomLine.classList.add("bottom__active");
      firstLi.classList.add("selected");
      secondLi.classList.remove("selected");
      thirdLi.classList.remove("selected");
      bottomLine.classList.remove("bottom__active1");
      bottomLine.classList.remove("bottom__active2");
    });

    secondLi.addEventListener("click", () => {
      const bottomLine = document.querySelector(".bottom__line");
      bottomLine.classList.add("bottom__active1");
      secondLi.classList.add("selected");
      firstLi.classList.remove("selected");
      thirdLi.classList.remove("selected");
      bottomLine.classList.remove("bottom__active");
      bottomLine.classList.remove("bottom__active2");
    });

    thirdLi.addEventListener("click", () => {
      const bottomLine = document.querySelector(".bottom__line");
      bottomLine.classList.add("bottom__active2");
      thirdLi.classList.add("selected");
      firstLi.classList.remove("selected");
      secondLi.classList.remove("selected");
      bottomLine.classList.remove("bottom__active");
      bottomLine.classList.remove("bottom__active1");
    });
  }, []);

  const handleText = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setCLick(e.target.innerText);
  };

  const getResult = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const searchLocation = formData.get("search_location");
    // console.log(searchLocation)
    // console.log(formData.get("search_location"));
    // console.log(clicked);
    setText("");
    
    try {
      let result;
      let url;
      
      if (click === "For Sale") {
        url = "http://localhost:3000/api/commercial/to-sale-by-city";
      } else if (click === "To Rent") {
        url = "http://localhost:3000/api/commercial/to-rent-by-city";
      } else if (click === "New Project") {
        result = 0;
        console.log(result);
        return result;
      }
      
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ searchLocation }),
      });
      
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      
      result = await response.json();
      console.log(result);
      setSearchResults(result);
      
      router.push(
        `/commercial/${
          click === "For Sale" ? "to-sale-by-city" : "to-rent-by-city"
        }`
      );

      return result; // Return the result from the function
    } catch (error) {
      console.log(error);
      return null; // Handle errors or return default value
    }
  };

  return (
    <div
      className="flex flex-col justify-center items-center bg-[url('/assets/background.jpg')] text-white font-['Effra'] h-[645px]"
      style={{ backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
    >
      <div className="absolute w-full h-[645px] bg-black opacity-35"></div>
      <section className="w-full flex flex-col justify-center items-center z-10 mt-20">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-[62px] font-bold">Find Your Home Online</h2>
          <p className="text-[25px] font-bold">
            Search Properties For Sale And To Rent In Uganda
          </p>
        </div>

        <div className="w-[53%] bg-white mt-9 rounded-[12px] h-[52%]">
          <form
            className="text-black text-[20px]"
            onSubmit={(e) => getResult(e)}
          >
            <ul
              id="houzez-search-tabs-wrap"
              className="flex flex-row justify-center items-center text-center font-bold relative"
            >
              <li className="list-none inline-block mr-[2px] py-[5px] px-[30px] link-one">
                <a
                  className="no-underline cursor-pointer"
                  href="#"
                  onClick={(e) => handleClick(e)}
                >
                  For Sale
                </a>
              </li>
              <li className="list-none inline-block mr-[2px] py-[5px] px-[30px] link-two">
                <a
                  className="no-underline cursor-pointer"
                  href="#"
                  onClick={(e) => handleClick(e)}
                >
                  To Rent
                </a>
              </li>
              <li className="list-none inline-block mr-[2px] py-[5px] px-[30px] link-three">
                <a
                  className="no-underline cursor-pointer"
                  href="#"
                  onClick={(e) => handleClick(e)}
                >
                  New Project
                </a>
              </li>
              <li className="bottom__line"></li>
            </ul>

            <div className="flex flex-row items-end justify-center w-full">
              <div
                className="my-4 w-[74.5%] flex flex-col items-start"
                data-address-field="form-field-1988d95"
              >
                <label
                  htmlFor="form-field-1988d95"
                  className="text-gray-600 text-[16px] poppins-semibold pb-[8px]"
                >
                  Enter a city, town or location
                </label>
                <input
                  type="text"
                  name="search_location"
                  id="form-field-1988d95"
                  className="border-[1px] w-full border-gray-600 py-[6px] px-[16px] rounded-[3px]"
                  placeholder="e.g. Kololo"
                  value={text}
                  onChange={(e) => handleText(e)}
                  required="required"
                />
              </div>
              <div className="w-[22%] mb-[25px] px-[15px] h-full">
                <button
                  type="submit"
                  className="bg-[#01B494] text-white font-extrabold text-[21px] font-['Effra'] w-full h-[50px] rounded-[5px]"
                >
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Search;
