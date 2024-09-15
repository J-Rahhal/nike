import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { NavLinks } from "../constants/index";
import { Link, useNavigate } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  const ToggleMenu = () => {
    setToggle(!toggle);
  };

  const handleClick = (event, path) => {
    event.preventDefault();
    navigate(path);
    ToggleMenu();
  };

  return (
    <div className="mx-4">
      <div className="hidden md:flex items-center justify-between">
        <svg
          aria-hidden="true"
          focusable="false"
          viewBox="0 0 24 24"
          role="img"
          fill="none"
          className="w-16 h-16"
        >
          <path
            fill="black"
            d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z"
          ></path>
        </svg>
        <ul className="w-1/2 flex justify-evenly">
          {NavLinks.map((link) => {
            return (
              <li
                className="cursor-pointer hover:underline hover:underline-offset-4 md:text-lg lg:text-xl"
                key={link.id}
              >
                <Link to={"/" + link.title.toLowerCase()}>{link.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="md:hidden flex items-center justify-between relative">
        <svg
          aria-hidden="true"
          focusable="false"
          viewBox="0 0 24 24"
          role="img"
          width="42px"
          height="42px"
          fill="none"
        >
          <path
            fill="black"
            d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z"
          ></path>
        </svg>
        <CiMenuBurger className="cursor-pointer" onClick={ToggleMenu} />
      </div>
      {toggle && (
        <div className="fixed top-0 z-50 left-0 h-screen overflow-hidden w-full bg-white ">
          <div>
            <IoCloseOutline
              size={24}
              className="absolute right-0"
              onClick={ToggleMenu}
            />
          </div>

          <ul className="flex flex-col items-center justify-evenly h-full">
            {NavLinks.map((link) => {
              return (
                <li key={link.id}>
                  <Link
                    to={`/${link.title.toLowerCase()}`}
                    className="cursor-pointer hover:underline hover:underline-offset-4"
                    onClick={(e) => handleClick(e, link.title.toLowerCase())}
                  >
                    {link.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Nav;
