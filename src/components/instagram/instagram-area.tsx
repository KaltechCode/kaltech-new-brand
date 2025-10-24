"use client";
import React from "react";
import Image from "next/image";
import { Leaf } from "../svg";
// instagram images
import inst_1 from "@/assets/img/home-02/instagram/insta-inner-1.jpg";
import inst_2 from "@/assets/img/home-02/instagram/insta-inner-2.jpg";
import inst_3 from "@/assets/img/home-02/instagram/insta-inner-3.jpg";
import inst_4 from "@/assets/img/home-02/instagram/insta-inner-4.jpg";
import inst_5 from "@/assets/img/home-02/instagram/insta-inner-5.jpg";
import inst_6 from "@/assets/img/home-02/instagram/insta-inner-6.jpg";
import inst_7 from "@/assets/img/home-02/instagram/insta-inner-7.jpg";

export default function InstagramArea() {
  // instagram images
  const instagram_images = [
    { id: 1, img: inst_1 },
    { id: 2, img: inst_2 },
    { id: 3, img: inst_3 },
    { id: 4, img: inst_4 },
    { id: 5, img: inst_5 },
    { id: 6, img: inst_6 },
    { id: 7, img: inst_7 },
  ];
  return (
    <div
      className="tp-instagram-area tp-instagram-ptb text-center p-relative mb-100"
      style={{
        height: "110vh",
        background: "#fff",
        display: "flex",
        paddingBottom: "11%",
        alignItems: "flex-end",
        maxHeight: "1000px",
      }}
    >
      <div className="tp-instagram-thumb-wrap p-relative " style={{}}>
        {/* {instagram_images.map((item) => (
          <div
            key={item.id}
            className={`tp-instagram-thumb-inner-${item.id} d-none d-xl-block`}
          >
            <Image src={item.img} alt="inst-img" />
          </div>
        ))} */}
        <div
          className={`tp-instagram-thumb-inner-y d-none d-xl-block`}
          style={{
            top: "-150px",
            position: "absolute",
            left: "8%",
            height: "120px",
            width: "180px",
            borderRadius: "5px",
            overflow: "hidden",
          }}
        >
          <Image
            src={instagram_images[0].img}
            alt="inst-img"
            style={{ width: "100%", height: "100%" }}
          />
        </div>

        <div
          className={`tp-instagram-thumb-inner-y d-none d-xl-block`}
          style={{
            top: "-150px",
            position: "absolute",
            right: "0",
            height: "120px",
            width: "250px",
            borderRadius: "5px",
            overflow: "hidden",
          }}
        >
          <Image
            src={instagram_images[1].img}
            alt="inst-img"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        <div
          className={`tp-instagram-thumb-inner-y d-none d-xl-block`}
          style={{
            position: "absolute",
            right: "-320px",
            bottom: "0",
            height: "270px",
            width: "270px",
            borderRadius: "5px",
            overflow: "hidden",
          }}
        >
          <Image src={instagram_images[2].img} alt="inst-img" />
        </div>
        <div
          className={`tp-instagram-thumb-inner-y d-none d-xl-block`}
          style={{
            position: "absolute",
            right: "-170px",
            height: "120px",
            width: "120px",
            borderRadius: "5px",
            bottom: "-170px",
            overflow: "hidden",
          }}
        >
          <Image src={instagram_images[3].img} alt="inst-img" />
        </div>
        <div
          className={`tp-instagram-thumb-inner-y d-none d-xl-block`}
          style={{
            position: "absolute",
            right: "0",
            height: "70px",
            width: "70px",
            bottom: "-120px",
            borderRadius: "5px",
            overflow: "hidden",
          }}
        >
          <Image src={instagram_images[4].img} alt="inst-img" />
        </div>
        <div
          className={`tp-instagram-thumb-inner-y d-none d-xl-block`}
          style={{
            position: "absolute",
            left: "-100px",
            bottom: 0,
            height: "70px",
            width: "70px",
            borderRadius: "5px",
            overflow: "hidden",
          }}
        >
          <Image src={instagram_images[5].img} alt="inst-img" />
        </div>
        <div
          className={`tp-instagram-thumb-inner-y d-none d-xl-block`}
          style={{
            position: "absolute",
            top: "80px",
            left: "-330px",
            height: "250px",
            width: "260px",
            borderRadius: "5px",
            overflow: "hidden",
          }}
        >
          <Image src={instagram_images[6].img} alt="inst-img" />
        </div>
        {/* <div className={`tp-instagram-thumb-inner-y d-none d-xl-block`}>
          <Image src={instagram_images[7].img} alt="inst-img" />
        </div> */}

        <div className="tp-instagram-thumb">
          {/* <Image src={inst_8} alt="inst-img" */}
          <img
            src="/assets/img/home-02/instagram/insta-1.jpg"
            alt="inst-img"
            style={{ height: 200, width: 250, borderRadius: "10px" }}
          />
        </div>
        {/* <div className="tp-instagram-content-wrap text-start">
          <div className="tp-instagram-title-box">
            <span className="tp-instagram-subtitle">INSTAGRAM</span>
            <h4 className="tp-instagram-title">@likoagency</h4>
          </div>
          <div className="tp-instagram-content">
            <p>
              Become a part of our stories! <br /> Join the adventure.
            </p>
            <a className="tp-btn-white background-black" href="#">
              Follow Us
              <span>
                <Leaf />
              </span>
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
}
