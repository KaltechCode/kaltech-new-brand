import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { MdArrowOutward } from "react-icons/md";

// images
import b_1 from "@/assets/img/inner-about/brand/brand_1.png";
import b_2 from "@/assets/img/inner-about/brand/brand_2.png";
import b_3 from "@/assets/img/inner-about/brand/brand_3.png";
import b_4 from "@/assets/img/inner-about/brand/brand_4.png";
import b_5 from "@/assets/img/inner-about/brand/brand-5.png";
import b_6 from "@/assets/img/inner-about/brand/brand_6.png";
import b_7 from "@/assets/img/inner-about/brand/brand_7.png";
import b_8 from "@/assets/img/inner-about/brand/brand_8.png";



// brand images
const brand_images = [b_1, b_2, b_3, b_4, b_5, b_6, b_7, b_8];

export default function BrandFive() {
  return (
    <div
      className="ab-brand-area pt-40 pb-100  "
      style={{
        backgroundImage:
          "url(/assets/img/inner-about/brand/brand-bg-shape.png)", background:"#f2f2f2"
      }}
    >
      <div className="container" style={{}}>
        <div className="row">
          <div className="col-xl-12">
            <div className="ab-brand-title-box mb-30 text-center">
              <h4 className="ab-brand-title" style={{color: "black", letterSpacing: "2px"}}>Our clients</h4>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-12" >
            <div className="ab-brand-wrapper mb-40" style={{width: "100%", paddingTop: "10px"}}>
              <div className="swiper-container ab-brand-slide-active">
                <Marquee speed={80} gradient={false} pauseOnHover>
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
                        style={{
                          objectFit: "contain",
                          maxWidth: "200px",
                          maxHeight: "200px",
                        }}
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
              <p className="" style={{color: "black", width: "100%"}}>
                Our specialized team of researchers coordinate and streamline
                processes to break through any organizational roadblocks. We
                translate your ideas into solutions to promote your brand
                identity.
              </p>
              <h5 style={{letterSpacing: "1px"}}>We would love to hear more about your project</h5>
              <br />
                <br />

              <a href="/contact" className="pt-30 p-10"  >
                <span style={{color: "black", textDecoration: "underline", fontSize: "20px"}}>Contact Us <MdArrowOutward /></span> 
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
