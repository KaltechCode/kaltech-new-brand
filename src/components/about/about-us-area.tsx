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
    <div className="ab-about-area ab-about-mt pb-70 z-index-5 pt-40">
      <div className="container container-1480">
        <div id="about-info" className="row">
          <div className="ab-about-content">
            {/* <span>
                <Hand />
                Hi!
              </span> */}

            <div className="ab-brand-title-box  text-center">
              <h4
                className="ab-brand-title"
                style={{
                  fontSize: "clamp(28px, 5vw, 50px)",
                  letterSpacing: "2px",
                  lineHeight: "1.2",
                }}
              >
                Our Story
              </h4>
            </div>

            <p
              className="tp-dropcap tp_fade_bottom"
              style={{
                fontSize: "20px",
                letterSpacing: "0.4px",
                lineHeight: "30px",
                width: "100%",
                maxWidth: "1340px",
                margin: "0 auto",
              }}
            >
              <br />
              Kaltech Consultancy is a powerhouse of digital creativity,
              equipped with a talented team of designers, developers,
              consultants, data analysts, engineers, and strategists. Equipped
              with over two decades of experience and a passion for innovation,
              we specialize in crafting visually stunning and user-centric
              business systems that captivate audiences from different business
              ventures. We combine our technical proficiency with a deep
              understanding of the latest industry trends and best practices,
              ensuring your business remains ahead of the curve.
            </p>
          </div>
          {/* <div className="col-xxl-9">
           
          </div> */}
        </div>
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-5 mb-40">
                <div className="ab-about-category-title-box p-relative">
                  <h4 className="ab-about-category-title">
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
              <div className="col-xl-9 col-lg-8 col-md-7 pt-7">
                <div className="row gx-4">
                  <div className="col-md-4 mb-30">
                    <div className="ab-about-category-list category-space-1 tp_fade_bottom">
                      <ul>
                        {/* <span>DEVLOPMENT</span> */}

                        <li>Web design and Development</li>
                        <li>Content Management System</li>
                        <li>Mobile Application Development</li>
                        <li>Desktop Application Development</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4 mb-30">
                    <div className="ab-about-category-list category-space-2 tp_fade_bottom">
                      <ul>
                        {/* <span>MARKETING</span> */}
                        <li>Social Media Marketing</li>
                        <li>Search Engine Optimization</li>
                        <li>Email Marketing</li>
                        <li>Explainer videos</li>

                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4 mb-30">
                    <div className="ab-about-category-list category-space-3 tp_fade_bottom">
                      <ul>
                        {/* <span>BRANDING</span> */}
                        <li>Logo Design</li>
                        <li>Business Branding</li>
                        <li>Brand Ambasadors</li>
                        <li>Logo and Title Animations</li>



                      </ul>
                    </div>
                  </div>
                         <div className="col-md-4 mb-30">
                    <div className="ab-about-category-list category-space-3 tp_fade_bottom">
                      <ul>
                        {/* <span>MOTION GRAPHICS</span> */}

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
