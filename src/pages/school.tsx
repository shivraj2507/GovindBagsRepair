import React from "react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import schoolBag10 from "../../assets/img/schoolbag.jpeg";
import schoolBag1 from "../../assets/img/schoolbag1.jpg";
import schoolBag2 from "../../assets/img/schoolbag2.jpeg";
import schoolBag3 from "../../assets/img/schoolbag3.jpeg";
import schoolBag4 from "../../assets/img/schoolbag4.jpeg";
import schoolBag5 from "../../assets/img/schoolbag5.jpeg";
import schoolBag7 from "../../assets/img/schoolbag7.jpeg";
import schoolBag8 from "../../assets/img/schoolbag8.jpg";
import schoolBag9 from "../../assets/img/schoolbag9.jpg";

const school = () => {
  const schoolBag = [
    {
      title: "गोविंद बैग रिपेयर्स बुढ़नपुर-आजमगढ ",
      contact: "7054141246",
      contact2: "9450805349",
      img: schoolBag7,
    },
    {
      title: "गोविंद बैग रिपेयर्स बुढ़नपुर-आजमगढ ",
      contact: "7054141246",
      contact2: "9450805349",
      img: schoolBag8,
    },
    {
      title: "गोविंद बैग रिपेयर्स बुढ़नपुर-आजमगढ ",
      contact: "7054141246",
      contact2: "9450805349",
      img: schoolBag9,
    },
    {
      title: "गोविंद बैग रिपेयर्स बुढ़नपुर-आजमगढ ",
      contact: "7054141246",
      contact2: "9450805349",
      img: schoolBag10,
    },
    {
      title: "गोविंद बैग रिपेयर्स बुढ़नपुर-आजमगढ ",
      contact: "7054141246",
      contact2: "9450805349",
      img: schoolBag1,
    },
    {
      title: "गोविंद बैग रिपेयर्स बुढ़नपुर-आजमगढ ",
      contact: "7054141246",
      contact2: "9450805349",
      img: schoolBag2,
    },

    {
      title: "गोविंद बैग रिपेयर्स बुढ़नपुर-आजमगढ ",
      contact: "7054141246",
      contact2: "9450805349",
      img: schoolBag3,
    },
    {
      title: "गोविंद बैग रिपेयर्स बुढ़नपुर-आजमगढ ",
      contact: "7054141246",
      contact2: "9450805349",
      img: schoolBag4,
    },
    {
      title: "गोविंद बैग रिपेयर्स बुढ़नपुर-आजमगढ ",
      contact: "7054141246",
      contact2: "9450805349",
      img: schoolBag5,
    },
  ];
  return (
    <>
      {" "}
      <section className="mb-10 mt-32 text-darkGrey">
        <div className="mx-auto max-md:w-11/12 lg:max-w-7xl px-3">
          <div>
            <h3 className="text-4xl font-medium font-serif pt-5 ">स्कूल बैग</h3>
            <span className={styles.headerDiv}></span>
          </div>
        </div>
        <div className=" lg:max-w-7xl px-3 md:px-0  m-auto  grid md:grid-cols-2 lg:grid-cols-3 lg:gap-x-16 gap-x-6 gap-y-20">
          {schoolBag.map((item, i) => (
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

export default school;
