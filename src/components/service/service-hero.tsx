import React from "react";
import Image from "next/image";

// image
import ser_hero from "@/assets/img/inner-service/hero/hero-1.jpg";
import ser_hero_shape from "@/assets/img/inner-service/hero/hero-shape-1.jpg";
import Motion from "./data/data-analytics";
import ContactOne from "../contact/contact-one";

export default function ServiceHero() {
  return (
    <div className="sv-hero-area" style={{ paddingTop: "3.8em" }}>
      <div className="container">
        <div className="rowmb-60">
          <div className="sv-page-hero-content ">
            <h4
              className="tp-char-animation pb-10 tp-hero-3-title"
              style={{
                // fontSize: "clamp(50px, calc(2.5em + 1rem), 140px)",
                letterSpacing: "1px",
                lineHeight: "1.2",
                textAlign: "center",
                // marginBottom: "50px",
              }}
            >
              OUR Services
            </h4>
            <p
              className="tp_fade_bottom ptb-p"
              style={
                {
                  // fontSize: "clamp(12px, calc(.5em + .75rem), 20px)",
                  // lineHeight: "30px",
                  // marginBottom: "50px",
                  // width: "90%",
                  // margin: "50px auto",
                }
              }
            >
              At Kaltech Consultancy, we know that in today’s digital age, a
              strong online presence is crucial for any business.We are your one
              stop hub for all your digital needs, with our services ranging
              from development, marketing, and branding. We develop custom user
              centric applications to meet every business need. We use the
              latest tech stack to ensure that each individual project doesn’t
              only look good, function as intended but also meet modern design
              and coding standards
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-12">
            <div className="sv-hero-thumb p-relative">
              <div className="sv-hero-thumb-box" style={{ height: 500 }}>
                <Image
                  data-speed=".7"
                  src={ser_hero}
                  alt="ser_hero-img"
                  style={{ height: "700px" }}
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
