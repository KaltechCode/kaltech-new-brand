import React from "react";
import Image from "next/image";

// images
import shape from "@/assets/img/inner-about/about/shape-1.png";

export default function AboutUsArea() {
  return (
    <div className="ab-about-area ab-about-mt z-index-5">
      <div className="container">
        <div id="about-info" className="row">
          <div className="ab-about-content">
          

            <div className="ab-brand-title-box text-center">
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
<div className="row what-we-do-section">
  <div className="col-12">
    <div className="row">
      <div className="col-xl-3 col-lg-4 col-md-5 col-12 mb-40">
        <div className="ab-about-category-title-box p-relative">
          <h4 className="ab-about-category-title">
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


      {/* category boxes */}
      <div className="col-xl-9 col-lg-8 col-md-7 col-12 pt-7">


        <div className="row three-columns" style={{display:"grid", gridTemplateColumns: "1fr 1fr 1fr", rowGap: 50}}>
          <div className="">
            {/* first boxes */}
            <div className="ab-about-category-list category-space-1 tp_fade_bottom">
              <ul>
                <li>Web design and Development</li>
                <li>Content Management System</li>
                <li>Mobile Application Development</li>
                <li>Desktop Application Development</li>
              </ul>
            </div>
          </div>

          {/* second box */}
          <div className="">
            <div className="ab-about-category-list category-space-2 tp_fade_bottom">
              <ul>
                <li>Social Media Marketing</li>
                <li>Search Engine Optimization</li>
                <li>Email Marketing</li>
                <li>Explainer videos</li>
              </ul>
            </div>
          </div>

          {/* third boxes */}
          <div className="">
            <div className="ab-about-category-list category-space-3 tp_fade_bottom">
              <ul>
                <li>Logo Design</li>
                <li>Business Branding</li>
                <li>Brand Ambasadors</li>
                <li>Logo and Title Animations</li>
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
