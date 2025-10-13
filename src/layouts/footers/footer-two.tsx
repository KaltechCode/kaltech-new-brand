import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/img/custom/kaltech_light_logo.svg";
import logo_2 from "@/assets/img/custom/kaltech_logo.svg";
import { RightArrow } from "@/components/svg";

// prop type
type IProps = {
  whiteFooter?: boolean;
  topCls?: string;
};

export default function FooterTwo({
  whiteFooter = false,
  topCls = "footer-top",
}: IProps) {
  return (
    <footer className={``} style={{ marginTop: 40 }}>
      <div
        className={`tp-footer-2-area pt-100 pb-20 ${
          whiteFooter ? "tp-footer-white" : "black-bg"
        }`}
      >
        <div className="container container-1480">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6 mb-50">
              <div className="tp-footer-2-widget footer-col-2-1">
                {!whiteFooter && (
                  <div className="tp-footer-2-widget-logo">
                    <Link href="/">
                      <Image src={logo} alt="logo" />
                    </Link>
                  </div>
                )}
                {whiteFooter && (
                  <div className="tp-footer-2-widget-logo tp-footer-dark">
                    <Link className="logo-1" href="/">
                      <Image src={logo_2} alt="logo" />
                    </Link>
                    <Link className="logo-2" href="/">
                      <Image src={logo} alt="logo" />
                    </Link>
                  </div>
                )}
                <div className="tp-footer-2-widget-text">
                  <p>
                    Our dedication to client success is reflected in our track
                    record of helping businesses achieve increased brand
                    visibility, higher conversion rates, and sustained growth.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-6 mb-50">
              <div className="tp-footer-2-widget footer-col-2-2">
                <div className="tp-footer-2-widget-menu">
                  <h4 className="tp-footer-2-widget-title">Quick Links</h4>
                  <ul>
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/about-us">About Us</a>
                    </li>
                    <li>
                      <a href="/services">Services</a>
                    </li>
                    <li>
                      {" "}
                      <a href="/blog-modern">Blog</a>
                    </li>
                    <li>
                      <a href="/contact">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-5 col-md-6 mb-50">
              <div className="tp-footer-2-widget footer-col-2-3">
                <h4 className="tp-footer-2-widget-title">Office</h4>
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
                    <a href="tel:+725214456">+1(931)-266-6101 </a>
                  </span>
                </div>
                <div className="tp-footer-2-contact-item">
                  <span>
                    <a href="mailto:hello@kaltechconsultancy.tech">
                      hello@kaltechconsultancy.tech
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5 col-md-6 mb-50">
              <div className="tp-footer-2-widget footer-col-2-4">
                <div className="tp-footer-2-widget-newslatter">
                  <h4 className="tp-footer-2-widget-title">
                    Subscribe to our newsletter
                  </h4>
                  <form action="#">
                    <div className="tp-footer-2-input p-relative">
                      <input type="text" placeholder="Enter your email..." />
                      <button>
                        <RightArrow
                          clr={whiteFooter ? "currentcolor" : "#F3F3F4"}
                        />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`tp-copyright-2-area tp-copyright-2-bdr-top ${
          whiteFooter ? "tp-copyright-white" : "black-bg"
        }`}
      >
        <div className="container container-1480">
          <div className="row align-items-center">
            <div className="col-xl-4 col-lg-5">
              <div className="tp-copyright-2-left text-center text-lg-start">
                <p>
                  © {new Date().getFullYear()} | All rights reserved.
                  <br /> Designed by Kaltech
                </p>
              </div>
            </div>
            <div className="col-xl-8 col-lg-7">
              <div className="tp-copyright-2-social text-center text-lg-end">
                <a
                  className="mb-10"
                  href="https://www.facebook.com/profile.php?id=100089610044002"
                  target="_blank"
                >
                  Facebook
                </a>
                <a
                  className="mb-10"
                  href="https://x.com/KaltechServices"
                  target="_blank"
                >
                  X
                </a>
                <a
                  className="mb-10"
                  href="https://www.linkedin.com/company/kaltech-designs/"
                  target="_blank"
                >
                  Linkedin
                </a>
                <a
                  className="mb-10"
                  href="https://www.instagram.com/kaltechconsultancy/"
                  target="_blank"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- footer area end --> */}
    </footer>
  );
}
