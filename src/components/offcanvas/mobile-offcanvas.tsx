import React from "react";
import Image from "next/image";
import {
  Behance,
  CloseTwo,
  Dribble,
  Facebook,
  InstagramTwo,
  Linkdin,
  Twitter,
  Youtube,
} from "../svg";

// images
import logo from "@/assets/img/custom/kaltech_logo.svg";
import gallery_1 from "@/assets/img/menu/offcanvas/offcanvas-1.jpg";
import gallery_2 from "@/assets/img/menu/offcanvas/offcanvas-2.jpg";
import gallery_3 from "@/assets/img/menu/offcanvas/offcanvas-3.jpg";
import gallery_4 from "@/assets/img/menu/offcanvas/offcanvas-4.jpg";
import MobileMenus from "./mobile-menus";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";

const gallery_images = [gallery_1, gallery_2, gallery_3, gallery_4];

// prop type
type IProps = {
  openOffcanvas: boolean;
  setOpenOffcanvas: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MobileOffcanvas({
  openOffcanvas,
  setOpenOffcanvas,
}: IProps) {
  return (
    <>
      <div className={`tp-offcanvas-area ${openOffcanvas ? "opened" : ""}`}>
        <div className="tp-offcanvas-wrapper">
          <div className="tp-offcanvas-top d-flex align-items-center justify-content-between">
            <div className="tp-offcanvas-logo">
              <Link className="logo-1" href="/">
                <Image
                  src="/assets/img/custom/kaltech_logo.svg"
                  alt="kaltech logo"
                  width={170}
                  height={40}
                />
              </Link>
              <Link className="logo-2" href="/">
                <Image
                  src="/assets/img/custom/kaltech_light_logo.svg"
                  alt="logo"
                  width={170}
                  height={40}
                />
              </Link>
            </div>
            <div className="tp-offcanvas-close">
              <button
                className="tp-offcanvas-close-btn"
                onClick={() => setOpenOffcanvas(false)}
              >
                <CloseTwo />
              </button>
            </div>
          </div>
          <div className="tp-offcanvas-main">
            {/* <div className="tp-offcanvas-content">
              <h3 className="tp-offcanvas-title">Hello There!</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
            </div> */}
            {/* <div className="tp-main-menu-mobile d-xl-none"> */}
            <div className="tp-main-menu-mobile">
              <MobileMenus />
            </div>
            {/* <div className="tp-offcanvas-gallery">
              <div className="row gx-2">
                {gallery_images.map((item, i) => (
                  <div className="col-md-3 col-3" key={i}>
                    <div className="tp-offcanvas-gallery-img fix">
                      <a href="#">
                        <Image src={item} alt="gallery-img" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div> */}
            <div className="tp-offcanvas-contact">
              <h3 className="tp-offcanvas-title sm">Information</h3>

              <ul>
                <li>
                  <a href="tel:1245654">+1 (931)-266-6101</a>
                </li>
                <li>
                  <a href="mailto:hello@diego.com">
                    hello@kaltechconsultancy.tech
                  </a>
                </li>
                <li>
                  <a href="#">
                    Brookestone Dr, Elizabethtown, KY 42701, Kentucky, USA
                  </a>
                </li>
              </ul>
            </div>
            <div className="tp-offcanvas-social">
              <h3 className="tp-offcanvas-title sm">Follow Us</h3>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=100089610044002"
                    target="_blank"
                  >
                    <Facebook />
                  </a>
                </li>
                <li>
                  <a href="https://x.com/KaltechServices" target="_blank">
                    <FaXTwitter size={14} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/kaltech-designs/"
                    target="_blank"
                  >
                    {" "}
                    <Linkdin />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/kaltechconsultancy/"
                    target="_blank"
                  >
                    <InstagramTwo />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div
        onClick={() => setOpenOffcanvas(false)}
        className={`body-overlay ${openOffcanvas ? "opened" : ""}`}
      ></div>
    </>
  );
}
