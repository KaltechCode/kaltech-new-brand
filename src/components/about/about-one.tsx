"use client";
import React, { CSSProperties } from "react";
import Image from "next/image";
// images
import ab_1 from "@/assets/img/home-02/about/kaltech-logo-transparent.png";
import ab_2 from "@/assets/img/home-02/about/ab-2.jpg";
import ab_3 from "@/assets/img/home-02/about/ab-s.jpg";

// img style
const imgStyle: CSSProperties = { height: "auto" };
const AboutOne = () => {
  return (
    <div className="tp-about-2-area pt-50 pb-50">
      <div className="container container-1480">
        <div className="row justify-content-center align-items-center">
          <div className="two-column-layout">
            <div className="tp-about-2-title-box tp-btn-trigger tp-btn-bounce mb-30 text-start">
              <h2 className="tp-about-2-section-title">Who we are</h2>
            </div>
          </div>
        </div>

        <div className="two-column-layout about-us-content-container">
          <div className="col-span-1">
            <div className="tp-about-2-thumb-box p-relative">
              <div className="tp-about-2-thumb-main">
                <Image
                  src={ab_1}
                  alt="kaltech Logo"
                  height={350}
                  width={400}
                  data-speed="0.8"
                  data-lag="0.1"
                />
              </div>
              <div className="tp-about-2-thumb-inner d-none">
                <Image
                  src={ab_2}
                  alt="ab-img"
                  style={imgStyle}
                  data-speed="0.6"
                  data-lag="0.2"
                />
                <span className="tp-about-2-thumb-text">
                  I&apos;M A SUNGLASSES INFLUENCER
                </span>
              </div>
            </div>
          </div>

          {/* second column */}
          <div className="col-span-2">
            <div className="tp-about-2-content about-content">
              <span>
                We are your one stop hub for all your digital needs. Find out
                how we can bring all your digital designs to life .
              </span>
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
