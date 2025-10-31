import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { MdArrowOutward } from "react-icons/md";
import { ArrowBg, RightArrowTwo, UpArrow } from "../svg";

// images
import b_1 from "@/assets/img/inner-about/brand/brand_1.png";
import b_2 from "@/assets/img/inner-about/brand/brand_2.png";
import b_3 from "@/assets/img/inner-about/brand/brand_3.png";
import b_4 from "@/assets/img/inner-about/brand/brand_4.png";
import b_5 from "@/assets/img/inner-about/brand/brand-5.png";
import b_6 from "@/assets/img/inner-about/brand/brand_6.png";
import b_7 from "@/assets/img/inner-about/brand/brand_7.png";
import b_8 from "@/assets/img/inner-about/brand/brand_8.png";
import Link from "next/link";

// brand images
const brand_images = [b_1, b_2, b_3, b_4, b_5, b_6, b_7, b_8];

export default function BrandFive() {
  return (
    <div
      className="ab-brand-area pt-30 pb-100 pl-60 pr-60 brand-five"
      style={{
        backgroundImage:
          "url(/assets/img/inner-about/brand/brand-bg-shape.png)",
      }}
    >
      <div className="container" style={{}}>
        <div className="row">
          <div className="col-xl-12">
            <div className="ab-brand-title-box mb-30 text-center">
              <h4
                className="ab-brand-title pt-30 pb-20"
                style={{
                  letterSpacing: "2px",
                  fontSize: "clamp(28px, 5vw, 50px)",
          
                  lineHeight: "1.2",
                }}
              >
                Our clients
              </h4>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-12">
            <div
              className="ab-brand-wrapper mb-40"
              style={{ width: "100%", paddingTop: "10px" }}
            >
              <div className="swiper-container ab-brand-slide-active">
                <Marquee speed={80} gradient={false} pauseOnHover direction="right">
                  {brand_images.map((b, i) => (
                    <div
                      key={i}
                      className="ab-brand-item flex items-center justify-center mx-10"
                    >
                      <Image
                        src={b}
                        alt="brand"
                        width={220}
                        height={220}
                        className="brand-logo"
                      />
                    </div>
                  ))}
                </Marquee>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-9">
            <div className=" tp_title_anim text-center ">
              <p className="brand-five-text" style={{ width: "100%" }}>
                Our specialized team of researchers coordinate and streamline
                processes to break through any organizational roadblocks. We
                translate your ideas into solutions to promote your brand
                identity.
              </p>
              <br />

              <span
                className="brand-five-text"
                style={{ fontSize: "20px", fontWeight: "bold" }}
              >
                {" "}
                We would love to hear more about your project
              </span>
              <br />
              <br />

         <div className="tp-projct-5-2-btn-box d-flex justify-content-center mt-20">
                 <div className="tp-hover-btn-wrapper">
                   <Link className="tp-btn-black-sm" href="/contact">
                     <span className="">Get In Touch</span>
                     <span className="tp-btn-circle-icon custom-arrow">
                       <UpArrow />
                     </span>
                     <i className="tp-btn-circle-dot custom-dot"></i>
                   </Link>
                 </div>
               </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
