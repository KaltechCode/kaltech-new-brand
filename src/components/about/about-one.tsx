"use client";
import React, { CSSProperties } from "react";
import Image from "next/image";
// images
import shape from "@/assets/img/home-02/service/sv-shape-1.png";
import ab_2 from "@/assets/img/home-02/about/ab-2.jpg";
import { UpArrow } from "../svg";
import Link from "next/link";

// img style
const imgStyle: CSSProperties = { height: "auto" };
const AboutOne = () => {
  return (
    <div className="tp-about-2-area">
      <div className="container container-1480">
        <div className="justify-content-center align-items-center">
          <div className="two-column-layout">
            <div className="tp-about-2-title-box tp-btn-trigger tp-btn-bounce mb-10 text-start">
              <h2 className="tp-about-2-section-title">About Us</h2>
            </div>
          </div>
        </div>

        <div className="two-column-layout about-us-content-container">
          <div className="col-span-1">
            <div className="tp-about-2-thumb-box p-relative">
              {/* <div className="tp-about-2-thumb-main"> */}
              {/* <Image
                  src={shape}
                  alt="kaltech Logo"
                  height={350}
                  width={400}
                  data-speed="0.8"
                  data-lag="0.1"
                /> */}
              <div className="col-xxl-6">
                <div className="tp-service-2-shape-img text-center text-lg-start">
                  <Image src={shape} alt="" />
                </div>
              </div>
              {/* </div> */}
              <div className="tp-about-2-thumb-inner d-none">
                <Image
                  src={ab_2}
                  alt="ab-img"
                  style={imgStyle}
                  data-speed="0.6"
                  data-lag="0.2"
                />
              </div>
            </div>
          </div>

          {/* second column */}
          <div className="col-span-2">
            <div className="tp-about-2-content about-content">
              <h3 className="tp-text-black">
                We are your one stop hub for all your digital needs
              </h3>
              <p className="mb-30">
                Kaltech Consultancy is a powerhouse of digital creativity,
                equipped with a talented team of designers, developers,
                consultants, engineers, and strategists.
              </p>
              <p className="mb-0">
                Our edgy approach to branding sets us apart, and our team of
                talented creatives are dedicated to bringing your vision to
                life.
              </p>

              {/* Custom Button */}
              {/* <div className="tp-award-2-btn-box"> */}
              <div className="tp-projct-5-2-btn-box d-flex justify-content-end mt-20">
                <div className="tp-hover-btn-wrapper">
                  <Link className="tp-btn-black-sm" href="/about-us">
                    <span className="">More Info</span>
                    <span className="tp-btn-circle-icon custom-arrow">
                      <UpArrow />
                    </span>
                    <i className="tp-btn-circle-dot custom-dot"></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* <div className="img-container">
              <div className="tp-about-2-right-thumb text-end">
                <Image
                  // data-speed="auto"
                  src={ab_3}
                  alt="ab-img"
                  // data-lag="0.15"
                  data-speed="0.6"
                  data-lag="0.2"
                  style={imgStyle}
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOne;
