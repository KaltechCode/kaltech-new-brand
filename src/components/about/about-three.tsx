import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal imports
import shape from "@/assets/img/home-03/about/ab-shape-img.png";
import { ArrowBg, RightArrowTwo, FirstBracket, FirstBracketTwo } from "../svg";

export default function AboutThree() {
  return (
    <div className="tp-about-3-area">
      <div className="container container-1480">
        <div className="row">
          <div className="col-xl-11">
            <div className="tp-about-3-title-box">
              <span className="tp-section-subtitle-2 tp_fade_bottom">
                <span>
                  <FirstBracket />
                </span>
                <span className="tp-subtitle-text tp_text_invert">
                  What we do
                </span>
                <span>
                  <FirstBracketTwo />
                </span>
              </span>
              <h4
                className="section-title tp_text_invert tp_fade_bottom"
                style={{ lineHeight: 1 }}
              >
                We tell visual stories through Mordern Designs{" "}
                <span>& fluid macro interactions</span>
              </h4>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6 col-md-4">
            <div className="tp-about-3-shape text-lg-end">
              <Image src={shape} alt="shape" style={{ height: "auto" }} />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-8">
            <div className="tp-about-3-content">
              <p className="mb-30 tp_fade_bottom">
                We sepecilaize in crafting visually stunning and
                user-centricsolutions that captivate audiences acrross various
                business sectors.
              </p>
              <p className="mb-45 tp_fade_bottom">
                We combine our technical proficiencies with a deep understanding
                of the latest industry trends and best practices, ensuring every
                project&apos;s objectives are achieved.
              </p>
              <Link className="tp-btn-black-2 tp_fade_bottom" href="/about-us">
                Get in Touch
                <span className="p-relative">
                  <RightArrowTwo />
                  <ArrowBg />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
