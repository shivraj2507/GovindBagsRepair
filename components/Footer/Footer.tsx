import React from "react";
import Image from "next/image";

import Link from "next/link";

import PhoneIcon from "../icons/PhoneIcon";
import MessageIcon from "../icons/MessageIcon";

import youtubeImg from "@/assets/img/youtube.png";
import LocationIcon from "../icons/LocationIcon";

const footerLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About Us",
    link: "/",
  },
  {
    title: "Courses",
    link: "/",
  },
  {
    title: "Disclaimer",
    link: "/",
  },
  {
    title: "Refund Policy",
    link: "/",
  },
  {
    title: "Terms and Conditions",
    link: "/",
  },
  {
    title: "Privacy Policy",
    link: "/",
  },
];

const socialLinks = [
  {
    link: "/",
  },
  {
    link: "/",
  },
  {
    link: "/",
  },
  {
    link: "/",
  },
];

const Footer = () => {
  return (
    <footer className="pt-16 pb-12 mt-auto footerLinearGradient">
      <div className="max-w-8xl m-auto max-2xl:px-1 max-xl:px-4 max-xs:px-2">
        <div className="grid lg:grid-cols-2 gap-y-10 justify-between w-full lg:justify-items-center mb-10">
          <h1 className="text-4xl md:text-6xl font-medium mb-0 md:mb-2  max-sm: font-serif text-SkyBlue">
            गोविंद बैग रिपेयर्स
          </h1>

          <div>
            <h5 className="lg:mb-10 mb-2">संपर्क करें</h5>

            <div className="lg:max-w-[250px]">
              <span className="flex items-center gap-x-2.5 mb-4">
                <LocationIcon />
                <p>गोविंद बैग रिपेयर्स बुढ़नपुर-आजमगढ</p>
              </span>

              <span className="flex items-center gap-x-2.5 mb-4">
                <PhoneIcon />
                <p>+91 9450805349, 7054141246</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
