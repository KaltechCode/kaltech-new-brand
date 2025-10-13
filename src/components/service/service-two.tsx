import React from "react";
import { Leaf } from "../svg";
import Image from "next/image";
// service icon
import ser_1 from "@/assets/img/home-02/service/WebDevIcon.png";
import ser_2 from "@/assets/img/home-02/service/MarketingIcon2.png";
import ser_3 from "@/assets/img/home-02/service/BusinessIcon.png";
import ser_4 from "@/assets/img/home-02/service/sv-icon-4.png";
// shape
import shape from "@/assets/img/home-02/service/sv-shape-1.png";

const service_accordion = [
  {
    id: 1,
    icon: ser_1,
    title: "Development",
    desc: "Creating a strong brand identity is essential for fashion brands to establish themselves in the market. Our services are dedicated to helping fashion brands define their unique identity through strategic branding initiatives.",
  },
  {
    id: 2,
    icon: ser_2,
    title: "Marketing",
    desc: "Creating a strong brand identity is essential for fashion brands to establish themselves in the market. Our services are dedicated to helping fashion brands define their unique identity through strategic branding initiatives.",
  },
  {
    id: 3,
    icon: ser_3,
    title: "Branding",
    desc: "Creating a strong brand identity is essential for fashion brands to establish themselves in the market. Our services are dedicated to helping fashion brands define their unique identity through strategic branding initiatives.",
  },
  {
    id: 4,
    icon: ser_4,
    title: "Motion Graphics",
    desc: "Creating a strong brand identity is essential for fashion brands to establish themselves in the market. Our services are dedicated to helping fashion brands define their unique identity through strategic branding initiatives.",
  },
];
export default function ServiceTwo() {
  return (
    <div className="tp-service-2-area tp-service-2-pt  pb-150 z-index-5">
      <div className="container container-1480">
        <div className="row">
          <div className="col-xl-8">
            <div className="tp-service-2-title-box mb-70">
              <span className="tp-section-subtitle-3">
                <span>
                  <Leaf />
                </span>
                <h3 className="tp-about-2-section-title">What we offer?</h3>
              </span>
              <p className="">
                We believe in pushing the boundaries of what is possible. We are
                a team of experts committed in delivering outstanding results by
                providing the following services:
              </p>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-xxl-6 col-xl-4 col-lg-4">
            <div className="tp-service-2-shape-img text-center text-lg-start">
              <Image src={shape} alt="" />
            </div>
          </div>
          <div className="col-xxl-6 col-xl-8 col-lg-8">
            <div className="tp-service-2-accordion-box">
              <div className="accordion" id="accordionExample">
                {service_accordion.map((s) => (
                  <div key={s.id} className="accordion-items">
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-buttons ${
                          s.id !== 0 ? "collapsed" : ""
                        }`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse-${s.id}`}
                        aria-expanded="false"
                        aria-controls={`collapse-${s.id}`}
                      >
                        <span>
                          <Image src={s.icon} alt="icon" />
                        </span>
                        {s.title}
                        <span className="accordion-icon"></span>
                      </button>
                    </h2>
                    <div
                      id={`collapse-${s.id}`}
                      className={`accordion-collapse collapse ${
                        s.id === 0 ? "show" : ""
                      }`}
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>{s.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
