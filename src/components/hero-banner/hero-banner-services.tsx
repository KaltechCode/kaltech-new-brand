"use client";
import React from "react";
import { UpArrow } from "../svg";
import Link from "next/link";

export default function ServiceHero() {
  return (
    <div className="tp-hero-3-area tp-hero-3-ptb fix">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-hero-3-content-box text-center p-relative">
              {/* <div className="tp-hero-3-circle-shape">
                <span></span>
              </div> */}
              <h4 className="tp-hero-3-title tp_reveal_anim">
                <span className="tp-reveal-line">Your </span>
                <span className="tp-reveal-line">Creative Agency</span>
              </h4>

              {/* <div className="tp-projct-5-2-btn-box d-flex justify-content-center">
                <div className="tp-hover-btn-wrapper">
                  <Link
                    className="tp-btn-circle tp-hover-btn-item tp-hover-btn style-2"
                    href="/contact"
                  >
                    <span className="tp-btn-circle-text custom-text ">
                      Get In <br /> Touch
                    </span>
                    <span className="tp-btn-circle-icon custom-arrow">
                      <UpArrow />
                    </span>
                    <i className="tp-btn-circle-dot custom-dot"></i>
                  </Link>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
