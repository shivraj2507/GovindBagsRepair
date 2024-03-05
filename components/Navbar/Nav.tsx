import React, { useEffect } from "react";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import Image from "next/image";
import mainLogo from "../../assets/img/mainLogo.jpg";

import { useRouter } from "next/router";

const Nav = () => {
  const [isOn, setIsOn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const { pathname } = useRouter();

  useEffect(() => {
    setIsOn(false);
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className="w-full  shadow sticky top-0 bg-white z-10 mb-28 ">
      <div className="h-24 justify-between px-4 mx-auto lg:max-w-7xl  md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-4 md:block">
            <Link href={"/"}>
              {" "}
              <h1 className="text-xl  font-bold ">गोविंद बैग रिपेयर</h1>
            </Link>

            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <ImCross className=" text-xl" />
                ) : (
                  <GiHamburgerMenu className="text-xl" />
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="text-center w-full bg-lightSkyBlue md:bg-white  justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-black  hover:text-SkyBlue">
                <Link href="/" className="text-xl  font-bold ">
                  होम
                </Link>
              </li>
              <li className="text-black hover:text-SkyBlue">
                <div className="relative inline-block text-left">
                  <div className=" flex mx-4 items-center">
                    <div
                      className=" font-bold
                        text-lg "
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      पुरुषों के बैग
                    </div>
                  </div>

                  {isOpen && (
                    <div
                      className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="menu-button"
                    >
                      <div className="py-1" role="none  ">
                        <Link
                          href={"/school"}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-lightSkyBlue hover:text-SkyBlue"
                        >
                          स्कूल बैग
                        </Link>
                        <Link
                          href={"/travel"}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-lightSkyBlue hover:text-SkyBlue"
                        >
                          ट्रैवल बैग
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </li>
              <li className="text-black hover:text-SkyBlue">
                <div className="relative inline-block text-left">
                  <div className=" flex  items-center">
                    <div
                      className="text-xl  font-bold"
                      onClick={() => setIsOn(!isOn)}
                    >
                      महिलाओं के बैग
                    </div>
                  </div>

                  {isOn && (
                    <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1" role="none">
                        <Link
                          href={"/purse"}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-lightSkyBlue hover:text-SkyBlue"
                        >
                          पर्स
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
