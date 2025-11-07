import React from "react";
import Image from "next/image";
import logo from "@/assets/img/custom/kaltech_light_logo.svg";
import { RightArrow, SvgBgSm } from "@/components/svg";
import Link from "next/link";

export default function FooterFour() {
  return (
    <footer>
      <div className="tp-footer-3-area dark-bg pt-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-6 mb-60">
              <div className="tp-footer-3-widget-wrapper footer-col-3-1">
                <div className="tp-footer-3-widget mb-40">
                  <h4 className="tp-footer-3-title">Quick Links</h4>
                  <div className="tp-footer-3-menu">
                    <ul>
                      <li>
                        <a href="/development">Development</a>
                      </li>
                      <li>
                        <a href="/Marketing">Marketing</a>
                      </li>
                      <li>
                        <a href="/branding">Branding</a>
                      </li>
                      <li>
                        <a href="/data-analytics">Porfolio</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="tp-footer-3-widget">
                  <h6 className="tp-footer-2-widget-title">
                    Schedule a Free
                    <br />
                    Consultation
                  </h6>
                  <div className="tp-footer-3-input-box d-flex align-items-center">
                    <input type="text" placeholder="Enter Address..." />
                    <button className="tp-footer-3-btn p-relative">
                      <span className="icon-1">
                        <RightArrow clr="#19191A" />
                      </span>
                      <span className="icon-2">
                        <SvgBgSm />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 mb-60">
              <div className="tp-footer-3-widget text-md-center footer-col-3-2">
                <div className="tp-footer-3-logo-box">
                  <p
                    className="mb-100"
                    style={{
                      color: "var(--tp-common-white)",
                      fontFamily: "Marcellus",
                      textAlign: "left",
                      fontWeight: 700,
                    }}
                  >
                    <span
                      style={{
                        color: "var(--tp-common-white)",
                        fontSize: "clamp(16px, 1.5vw + .5rem, 22px)",
                        textTransform: "inherit",
                      }}
                    >
                      {" "}
                      Do have a new project &#63;
                    </span>
                    <br />
                    <span
                      style={{
                        color: "#fff",
                        fontWeight: 300,
                        fontSize: "clamp(16px, 1.5vw + .5rem, 16px)",
                        textAlign: "left",
                      }}
                    >
                      Reach out to our team, we are here to help.
                    </span>
                  </p>
                  <Link className="tp-footer-3-logo p-relative" href="/">
                    <Image src={logo} alt="logo" />
                  </Link>
                  <p className="tp-footer-3-copyright">
                    © {new Date().getFullYear()} | All rights reserved <br />
                    Design by Kaltech
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 mb-60">
              <div className="tp-footer-3-widget-wrapper footer-col-3-3">
                <div className="tp-footer-3-widget mb-30">
                  <h4 className="tp-footer-3-title">Contact</h4>
                  <div className="tp-footer-2-contact-item">
                    <span>
                      <a
                        href="https://www.google.com/maps/@23.8223596,90.3656686,15z?entry=ttu"
                        target="_blank"
                      >
                        Brookestone Dr, Elizabethtown, KY 42701, Kentucky, USA
                      </a>
                    </span>
                  </div>
                  <div className="tp-footer-2-contact-item">
                    <span>
                      <a href="tel:+1(931)-266-6101">+1(931)-266-6101</a>
                    </span>
                    <span>
                      {" "}
                      <a href=" hello@kaltechconsultancy.tech">
                        {" "}
                        hello@kaltechconsultancy.tech
                      </a>
                    </span>
                  </div>
                </div>
                <div className="tp-footer-3-widget">
                  <h4 className="tp-footer-3-title">Follow</h4>
                  <div className="tp-footer-3-social">
                    <a
                      className="mb-10"
                      href="https://x.com/KaltechServices"
                      target="_blank"
                    >
                      X
                    </a>
                    <a
                      href="https://www.facebook.com/profile.php?id=100089610044002"
                      target="_blank"
                    >
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/kaltechconsultancy/"
                      target="_blank"
                    >
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/company/kaltech-designs/"
                      target="_blank"
                    >
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
