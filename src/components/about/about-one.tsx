"use client";
import React, { CSSProperties } from "react";
import Image from "next/image";
// images
import ab_1 from "@/assets/img/home-02/about/ab-1.jpg";
import ab_2 from "@/assets/img/home-02/about/ab-2.jpg";
import ab_3 from "@/assets/img/home-02/about/ab-s.jpg";

// img style
const imgStyle: CSSProperties = { height: "auto" };
const AboutOne = () => {
  return (
    <div className="tp-about-2-area pt-125 pb-200">
      <div className="container container-1480">
        <div className="row justify-content-center">
          <div className="col-xxl-8 col-xl-10">
            <div className="tp-about-2-title-box tp-btn-trigger tp-btn-bounce mb-70 text-start text-xl-center">
              <h2 className="tp-about-2-section-title">Who we are</h2>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-xl-5 col-lg-6 col-md-6 order-1 order-xl-0">
            <div className="tp-about-2-thumb-box p-relative">
              <div className="tp-about-2-thumb-main">
                <Image src={ab_1} alt="ab-img" style={imgStyle} />
              </div>
              <div className="tp-about-2-thumb-inner">
                <Image src={ab_2} alt="ab-img" style={imgStyle} />
                <span className="tp-about-2-thumb-text">
                  I’M A SUNGLASSES INFLUENCER
                </span>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-12 order-0 order-xl-1">
            <div className="tp-about-2-content">
              <span>FOLLOW FOR THE BEST EYEWEAR INSPIRATION</span>
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
          </div>
          <div className="col-xl-2 col-lg-6 col-md-6 order-1">
            <div className="tp-about-2-right-thumb text-end">
              <Image
                data-speed="auto"
                src={ab_3}
                alt="ab-img"
                data-lag="0"
                style={imgStyle}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOne;
