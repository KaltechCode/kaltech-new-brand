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
      <div className="container container-1480">
        <div className="row justify-content-center">
          <div className="">
            <div data-lag="0.2" data-stagger="0.08">
              {/* Responsive font size with proper spacing */}
              <h4
                className="tp-hero-3-title tp_reveal_anim"
                style={{ textAlign: "center" }}
              >
                <span className="tp-reveal-line">
                  A Team of <br />
                </span>
                <span className="tp-reveal-line">Digital Creatives</span>
              </h4>
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
