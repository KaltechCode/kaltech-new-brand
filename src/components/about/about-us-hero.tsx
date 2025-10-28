import React from "react";
import { scroller } from "react-scroll";
import { ScrollDown } from "../svg";

export default function AboutUsHero() {
  const scrollTo = () => {
    scroller.scrollTo("about-info", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <div className="ab-inner-hero-area p-relative">
      <div className="breadcurmb-site d-none">
        <h6>About Us</h6>
      </div>

      <div className="container container-1480 mb-100">
        <div className="row">
          <div className="pt-90">
            <div data-lag="0.2" data-stagger="0.08">
              {/* Responsive font size with proper spacing */}
              <h5
                className="ab-inner-hero-title tp-char-animation pt-20 about-hero-title"
                style={{
                  fontSize: "clamp(28px, 5vw, 50px)",
                  letterSpacing: "2px",
                  lineHeight: "1.2",
                  textAlign: "center"
                }}
              >
                We are a team of <br /> passionate digital creatives
              </h5>
              <br />
              <br />
              {/* Use SCSS class instead of inline styles */}
              <video
                className="object-cover w-full h-full"
                style={{ width: "100%" }}
                muted
                loop
                autoPlay
                playsInline
              >
                <source src="https://kaltechassets.s3.us-east-2.amazonaws.com/Kaltech/newassets/AboutPage.mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
