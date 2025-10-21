import React from "react";
import Image from "next/image";
import { Hand } from "../svg";

// images
import shape from "@/assets/img/inner-about/about/shape-1.png";
import ab_1 from "@/assets/img/inner-about/about/about-1.jpg";
import ab_2 from "@/assets/img/inner-about/about/about-3.jpg";
import ab_3 from "@/assets/img/inner-about/about/about-2.jpg";

export default function AboutUsArea() {
  return (
    <div className="ab-about-area ab-about-mt pb-90 z-index-5 pt-30">
      <div className="container container-1480">
        <div id="about-info" className="row">
           <div className="ab-about-content"  >
              {/* <span>
                <Hand />
                Hi!
              </span> */}
            
              <p
                className="tp-dropcap tp_fade_bottom"
                style={{
                  fontSize: "20px",
                  textAlign: "justify",
                  lineHeight: "30px",
                  width: "100%",
                  maxWidth: "1350px",
                  margin: "0 auto",
                }}
              >

                  <p className="pt-30" style={{textAlign: "center"}}>OUR STORY </p>
              <br />
                Kaltech Consultancy is a powerhouse of digital creativity, equipped with a talented team of designers, developers, consultants, data analysts, engineers, and strategists. Equipped with over two decades of experience and a passion for innovation, we specialize in crafting visually stunning and user-centric business systems that captivate audiences from different business ventures. We combine our technical proficiency with a deep understanding of the latest industry trends and best practices, ensuring your business remains ahead of the curve.
              </p>
            </div>
          {/* <div className="col-xxl-9">
           
          </div> */}
        </div>
        <div className="row">
          <div className="col-xl-20">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-5 mb-40">
                <div className="ab-about-category-title-box p-relative">
                  <h4 className="ab-about-category-title" style={{letterSpacing: "1px"}}>
                    {/* Something <br /> */}
                    What we do
                    <span></span>
                  </h4>
                  <Image
                    className="ab-about-shape-1 d-none d-md-block"
                    src={shape}
                    alt="shape"
                  />
                </div>
              </div>
              <div className="col-xl-8 col-lg-7 col-md-7 pt-15">
                <div className="row">
                  <div className="col-xl-4 col-lg-4 col-md-4 mb-40">
                    <div className="ab-about-category-list category-space-1 tp_fade_bottom">
                      <ul>
                        <li>Web design and Development</li>
                        <li>Content Management System</li>
                        <li>Mobile Application Development</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-4 mb-40">
                    <div className="ab-about-category-list category-space-2 tp_fade_bottom">
                      <ul>
                        <li>Social Media Marketing</li>
                        <li>Search Engine Optimization</li>
                        <li>Email Marketing</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-4 mb-40">
                    <div className="ab-about-category-list category-space-3 tp_fade_bottom">
                      <ul>
                        <li>Logo Design</li>
                        <li>Business Branding</li>
                        <li>Explainer videos</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
