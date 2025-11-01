import React from "react";
import Image from "next/image";

// image
import ser_hero from "@/assets/img/inner-service/hero/hero-1.jpg";
import ser_hero_shape from "@/assets/img/inner-service/hero/hero-shape-1.jpg";
import Motion from "./data/data-analytics";
import ContactOne from "../contact/contact-one";

export default function ServiceHero() {
  return (
    <div className="sv-hero-area">
      <div className="container">
        
          <div className="row mb-60">
            <div className="sv-page-hero-content ">
              <h4
                className="sv-hero-title tp-char-animation pb-30"
                style={{
                  fontSize: "50px",
                  letterSpacing: "2px",
                  lineHeight: "1.2",
                }}
              >
                OUR Services
              </h4>
              <p className="tp_fade_bottom" style={{fontSize: "23px", lineHeight: "30px"}}>
                At Kaltech Consultancy, we know that in today’s digital age, a strong online presence is crucial for any business.We are your one stop hub for all your digital needs, with our services ranging from development, marketing, and branding. We develop custom user centric applications to meet every business need. We use the latest tech stack to ensure that each individual project doesn’t only look good, function as intended but also meet modern design and coding standards
              </p>
            </div>
          </div>
       
        <div className="row">
          <div className="col-xl-12">
            <div className="sv-hero-thumb p-relative">
              <div className="sv-hero-thumb-box">
                <Image
                  data-speed=".7"
                  src={ser_hero}
                  alt="ser_hero-img"
                  style={{ height: "auto" }}
                />
              </div>
              {/* <Motion /> */}
              {/* <Image
                className="sv-hero-thumb-shape d-none d-lg-block"
                src={ser_hero_shape}
                alt="ser_hero-shape"
                style={{ height: "auto" }}
              /> */}
              {/* <ContactOne/> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
