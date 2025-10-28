"use client";
import React from "react";

import Link from "next/link";
import { UpArrow } from "../svg";

export default function AwardTwo() {
  return (
    <div className="tp-award-2-area addclass tpaward tp-award-2-space p-relative fix pr-60 pl-60">
      <div className="tp-award-2-shape">
        <span className="tp-award-2-circle"></span>
        <span className="tp-award-2-img">
          {/* <Image
            src={award_img}
            alt="kaltech 3D Image"
            height={600}
            width={500}
            priority
          /> */}
        </span>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
          <span></span>
            {/* first */}
            <div className="tp-award-2-title-box p-relative">
              <span className="tp-award-2-title"></span>
              <h2 className="tp-award-2-title tp-award-title-1">Driven</h2>
              <h2 className="tp-award-2-title tp-award-title-2">
                <span>
                  By <br /> Results
                </span>
              </h2>
              <p>
                We don’t just solve problems, we build smarter systems that
                drive efficiency, boost performance, and support long term
                growth. <br /> <br />
                Whether you’re a startup or an established enterprise, we’re
                here to power your digital transformation.
              </p>
            </div>

            {/* second */}
            <div className="tp-award-2-btn-box">
              <div className="tp-projct-5-2-btn-box d-flex justify-content-end">
                <div className="tp-hover-btn-wrapper">
                  <Link
                    className="tp-btn-circle tp-hover-btn-item tp-hover-btn"
                    href="/portfolio-details-1"
                  >
                    <span className="tp-btn-circle-text">
                      See Our <br /> Projects
                    </span>
                    <span className="tp-btn-circle-icon">
                      <UpArrow />
                    </span>
                    <i className="tp-btn-circle-dot"></i>
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
