"use client";

import Image from "next/image";
import icon4 from "@/public/icons/icon4.svg";
import { useContext } from "react";
import { SearchContext } from "@/context/SearchContext";

const Nav = () => {
  const { user, logout } = useContext(SearchContext);

  console.log(user);

  const getInitials = (name) => {
    return name
      ? name
          .split(" ")
          .map((n) => n[0])
          .join("")
      : "";
  };

  return (
    <header className="flex justify-between items-center poppins-semibold text-[16px] px-[15px] w-full h-[60px] tracking-wide bg-white fixed top-0 z-20  border-b-[1px] border-b-slate-100">
      <div className="logo logo-desktop">
        <a href="/">
          <Image src="/assets/logo.png" height={40} width={200} alt="logo" />
        </a>
      </div>
      <nav className="flex flex-row justify-end items-center w-[77%]">
        <ul className="flex justify-between items-center">
          <li className="h-full nav-item">
            <a className="nav-link" href="/for-sale/">
              For Sale
            </a>
          </li>
          <li id="menu-item-18857" className=" h-full nav-item">
            <a className=" nav-link " href="/for-rent/">
              To Rent
            </a>
          </li>
          <li id="menu-item-18696" className=" h-full">
            <a className=" nav-link-commercial nav-item" href="#">
              Commercial
            </a>
            <ul className="dropdown-menu poppins">
              <li
                id="menu-item-19395"
                className="menu-item menu-item-type-custom menu-item-object-custom"
              >
                <a
                  className="dropdown-item poppins text-[16px]"
                  href="/commercial/to-rent"
                >
                  Commercial Property to Rent
                </a>
              </li>
              <li
                id="menu-item-19396"
                className="menu-item menu-item-type-custom menu-item-object-custom mb-1"
              >
                <a
                  className="dropdown-item poppins text-[16px]"
                  href="/commercial/to-sale"
                >
                  Commercial Property for Sale
                </a>
              </li>
            </ul>
          </li>
          <li id="menu-item-19347" className="h-full nav-item">
            <a
              className="mx-3"
              href="/new-development/?status%5B%5D=new-costruction"
            >
              New Projects
            </a>
          </li>
          <li id="menu-item-21280" className=" h-full nav-item">
            <a className=" nav-link " href="/valuate/">
              valuation
            </a>
          </li>
          <li id="menu-item-22603" className=" h-full nav-item">
            <a className=" nav-link " href="/all-agents/">
              Find Agent
            </a>
          </li>
          <li id="menu-item-19201" className=" h-full nav-item">
            <a className=" nav-link " href="/blog/">
              Inspire
            </a>
          </li>
          <li id="menu-item-18701" className=" h-full nav-item">
            <a className=" nav-link-overseas" href="#">
              Overseas
            </a>
            <ul className="dropdown-menu">
              <li
                id="menu-item-18702"
                className="menu-item menu-item-type-post_type menu-item-object-page"
              >
                <a className="dropdown-item " href="/all-countries/">
                  All countries
                </a>
              </li>
              <li
                id="menu-item-19458"
                className="menu-item menu-item-type-post_type menu-item-object-page "
              >
                <a className="dropdown-item " href="/nigeria/">
                  Nigeria
                </a>
              </li>
              <li
                id="menu-item-19457"
                className="menu-item menu-item-type-post_type menu-item-object-page "
              >
                <a className="dropdown-item " href="/united-arab-emirates/">
                  United Arab Emirates
                </a>
              </li>
              <li
                id="menu-item-18705"
                className="menu-item menu-item-type-post_type menu-item-object-page "
              >
                <a className="dropdown-item " href="/kenya/">
                  Kenya
                </a>
              </li>
              <li
                id="menu-item-19456"
                className="menu-item menu-item-type-post_type menu-item-object-page "
              >
                <a className="dropdown-item " href="/tanzania/">
                  Tanzania
                </a>
              </li>
              <li
                id="menu-item-19455"
                className="menu-item menu-item-type-post_type menu-item-object-page "
              >
                <a className="dropdown-item " href="/rwanda/">
                  Rwanda
                </a>
              </li>
              <li
                id="menu-item-19454"
                className="menu-item menu-item-type-post_type menu-item-object-page "
              >
                <a className="dropdown-item " href="/zanzibar/">
                  Zanzibar
                </a>
              </li>
              <li
                id="menu-item-19453"
                className="menu-item menu-item-type-post_type menu-item-object-page "
              >
                <a className="dropdown-item " href="/south-africa/">
                  South Africa
                </a>
              </li>
              <li
                id="menu-item-19452"
                className="menu-item menu-item-type-post_type menu-item-object-page "
              >
                <a className="dropdown-item " href="/united-kingdom/">
                  United kingdom
                </a>
              </li>
              <li
                id="menu-item-19451"
                className="menu-item menu-item-type-post_type menu-item-object-page "
              >
                <a className="dropdown-item " href="/sudan/">
                  Sudan
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <div className="flex justify-center items-center border-[1px] rounded-[3px] text-[14px] mx-4 border-black w-[100px] h-[38px]">
        {user ? (
          <button onClick={logout} className="flex items-center">
            <span className="mr-2">{getInitials(user.username)}</span>
            Logout
          </button>
        ) : (
          <ul className="login-register-nav dropdown d-flex align-items-center">
            <li className="login-link a">
              <a className="flex " href="/auth/signup">
                <Image
                  src={icon4}
                  className="icon-single-neutral-circle mr-2"
                  alt="Custom Neutral Circle Icon"
                  width={16}
                  height={16}
                />
                <p>Sign Up</p>
              </a>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
};

export default Nav;
