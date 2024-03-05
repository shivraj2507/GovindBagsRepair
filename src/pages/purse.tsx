import React from "react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";

import purse1 from "../../assets/img/ladybag1.jpg";
import purse2 from "../../assets/img/ladybag2.jpg";
import purse3 from "../../assets/img/ladybag3.jpg";
import purse4 from "../../assets/img/ladybag4.jpg";

const purse = () => {
  const purse = [
    {
      title: "गोविंद बैग रिपेयर्स बुढ़नपुर-आजमगढ ",
      contact: "7054141246",
      contact2: "9450805349",
      img: purse1,
    },
    {
      title: "गोविंद बैग रिपेयर्स बुढ़नपुर-आजमगढ ",
      contact: "7054141246",
      contact2: "9450805349",
      img: purse2,
    },

    {
      title: "गोविंद बैग रिपेयर्स बुढ़नपुर-आजमगढ ",
      contact: "7054141246",
      contact2: "9450805349",
      img: purse3,
    },
    {
      title: "गोविंद बैग रिपेयर्स बुढ़नपुर-आजमगढ ",
      contact: "7054141246",
      contact2: "9450805349",
      img: purse4,
    },
  ];
  return (
    <>
      {" "}
      <section className="mb-10 mt-32 text-darkGrey">
        <div className="mx-auto max-md:w-11/12 lg:max-w-7xl px-3">
          <div>
            <h3 className="text-4xl font-medium font-serif pt-5 ">
              {" "}
              महिलाओं के बैग
            </h3>
            <span className={styles.headerDiv}></span>
          </div>
        </div>
        <div className="px-3 md:px-0 lg:max-w-7xl  m-auto grid md:grid-cols-2 lg:grid-cols-3 lg:gap-x-16 gap-x-6 gap-y-20">
          {purse.map((item, i) => (
            <div
              id="benefit"
              key={i}
              className={`flex lg:gap-x-7 p-3 rounded gap-x-3 ${styles["bg-card-hover"]}`}
            >
              <Image
                src={item.img}
                alt="img"
                className="rounded-lg h-80 w-44"
              />

              <div>
                <h6 className="text-xl font-semibold mb-4 capitalize">
                  {item.title}
                </h6>

                <p className="text-lg font-medium">{item.contact}</p>
                <p className="text-lg font-medium">{item.contact2}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default purse;
