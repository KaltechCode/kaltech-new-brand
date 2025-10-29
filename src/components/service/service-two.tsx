import React from "react";
import { Leaf, UpArrow } from "../svg";
import Image from "next/image";
// service icon
import ser_1 from "@/assets/img/home-02/service/WebDevIcon.png";
import ser_2 from "@/assets/img/home-02/service/MarketingIcon.png";
import ser_3 from "@/assets/img/home-02/service/BusinessIcon.png";
import ser_4 from "@/assets/img/home-02/service/sv-icon-4.png";
// shape
import Link from "next/link";

const service_accordion = [
  {
    id: 1,
    icon: ser_1,
    title: "Development",
    desc: [
      "Web design and Development",
      "Content Management System",
      "Mobile Application Development",
      "Motion Graphics"
    ],
    link: "development",
  },
  {
    id: 2,
    icon: ser_2,
    title: "Marketing",
    desc: [
      "Social Media Marketing",
      "Search Engine Optimazation",
      "Email Marketing",
    ],
    link: "marketing",
  },
  {
    id: 3,
    icon: ser_3,
    title: "Branding",
    desc: ["Logo Design", "Bussiness Branding", "Brand Ambasadors"],
    link: "branding",
  },
  {
    id: 4,
    icon: ser_4,
    title: "Data analytics",
    desc: [
      "Trends Metric",
      "Sale Metric",
      "Data Visualization",
    ],
    link: "data-analytics",
  },
];
export default function ServiceTwo() {
  return (
    <div className="tp-service-2-area ">
      <div className="container container-1480">
        <div className="row justify-content-center align-items-center">
          <div className="two-column-layout">
            {/* <div className="tp-service-2-title-box mb-70">
              <span className="tp-section-subtitle-3">
                <span>
                  <Leaf />
                </span>
                <h3 className="tp-about-2-section-title">Our Services</h3>
              </span>
              <p className="">
                We believe in pushing the boundaries of what is possible. We are
                a team of experts committed in delivering outstanding results by
                providing the following services:
              </p>
            </div> */}
          </div>

          <div className="align-items-start two-column-layout">
           
            <div className="tp-service-2-title-box">
              <span className="tp-section-subtitle-3">
                <span>
                  <Leaf />
                </span>
                <h3 className="tp-about-2-section-title">Our Services</h3>
              </span>
              <p className="">
                We believe in pushing the boundaries of what is possible. We are
                a team of experts committed in delivering outstanding results by
                providing the following services:
              </p>
              <div className="tp-projct-5-2-btn-box flex-1 d-flex justify-content-start align-item-end mt-30">
                <div className="tp-hover-btn-wrapper">
                  <Link className="tp-btn-black-sm" href="/">
                    <span className="">More Info</span>
                    <span className="tp-btn-circle-icon custom-arrow">
                      <UpArrow />
                    </span>
                    <i className="tp-btn-circle-dot custom-dot"></i>
                  </Link>
                </div>
              </div>
            </div>


            <div className="col-xl-12">
              <div className="tp-service-2-accordion-box" style={{marginTop: 25}}>
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
                            <Image
                              src={s.icon}
                              alt="icon"
                              height={30}
                              width={30}
                            />
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
                          <ul>
                            {s.desc.map((d, i) => (
                              <li key={i}>
                                <p style={{ marginBottom: 10 }}>{d}</p>
                              </li>
                            ))}
                          </ul>

                          {/* button  */}
                          <div className="tp-projct-5-2-btn-box d-flex justify-content-end">
                            <div className="tp-hover-btn-wrapper">
                              <Link
                                className="custom-circle tp-hover-btn-item tp-hover-btn style-2"
                                href={s.link}
                              >
                                {/* <span className="tp-btn-circle-text">
                        About <br /> Us
                      </span> */}
                                <i className="custom-circle-icon">
                                  <UpArrow />
                                </i>
                                <i className="tp-btn-circle-dot"></i>
                              </Link>
                              {/* </div> */}
                            </div>
                          </div>
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
    </div>
  );
}
