import React from "react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import Card from "../../components/Card/Card";
import trolleyB from "../../assets/img/trolleybag.jpeg";
import trolley1 from "../../assets/img/trolleybag1.jpg";
import trolley2 from "../../assets/img/trolleybag2.jpg";
import trolley3 from "../../assets/img/trolleybag3.jpg";
import trolley4 from "../../assets/img/trolleybag4.jpg";
import trolley5 from "../../assets/img/trolleybag5.jpg";
import trolley6 from "../../assets/img/trolleybag6.jpeg";

const travel = () => {
  const trolley = [
    {
      img: trolleyB,
      title: "गोविंद बैग रिपेयर्स बुढ़नपुर-आजमगढ ",
      contact: "9450805349,7054141246",
    },
    {
      img: trolley1,
      title: "गोविंद बैग रिपेयर्स बुढ़नपुर-आजमगढ ",
      contact: "9450805349,7054141246",
    },
    {
      img: trolley2,
      title: "गोविंद बैग रिपेयर्स बुढ़नपुर-आजमगढ ",
      contact: "9450805349,7054141246",
    },
    {
      img: trolley3,
      title: "गोविंद बैग रिपेयर्स बुढ़नपुर-आजमगढ ",
      contact: "9450805349,7054141246",
    },
    {
      img: trolley4,
      title: "गोविंद बैग रिपेयर्स बुढ़नपुर-आजमगढ ",
      contact: "9450805349,7054141246",
    },
    {
      img: trolley5,
      title: "गोविंद बैग रिपेयर्स बुढ़नपुर-आजमगढ ",
      contact: "9450805349,7054141246",
    },
    {
      img: trolley6,
      title: "गोविंद बैग रिपेयर्स बुढ़नपुर-आजमगढ ",
      contact: "9450805349,7054141246",
    },
  ];
  return (
    <>
      <div className="px-4 max-w-7xl mx-auto">
        <h3 className="text-4xl font-medium font-serif  ">ट्रैवल बैग</h3>
        <span className={styles.headerDiv}></span>
      </div>

      <section className="px-4 max-w-7xl my-12 justify-center  grid md:grid-cols-2 lg:grid-cols-3  gap-y-20 gap-x-12  mx-auto ">
        {trolley.map((item, i) => (
          <Card key={i}>
            <div
              className={`md:max-w-[413]  max-w-[300]   text-base rounded-xl text-lightGrey p-4 ${styles["bg-card-hover"]}  `}
            >
              <Image
                src={item.img}
                alt="img"
                className="w-[413px] h-[560px] rounded-xl "
              />
              <h1 className="text-2xl py-6 font-semibold">{item.title}</h1>
              <p className=" text-lg font-semibold mb-1">{item.contact}</p>
            </div>
          </Card>
        ))}
      </section>
    </>
  );
};

export default travel;
