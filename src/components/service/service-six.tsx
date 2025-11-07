import React from "react";
import Image from "next/image";

// images
import ser_img_1 from "@/assets/img/inner-service/service/service-1.jpg";
import ser_img_2 from "@/assets/img/inner-service/service/service-2.jpg";
import ser_img_3 from "@/assets/img/inner-service/service/service-3.jpg";
import ser_img_4 from "@/assets/img/inner-service/service/service-4.jpg";

import { UpArrow } from "../svg";
import Link from "next/link";
import PrimaryBtn, { SecondaryCircleBtn } from "../button/button";

const service_data = [
  {
    id: 1,
    img: ser_img_2,
    subtitle: "Kaltech Consultancy",
    title: "DEVELOPMENT",
    text: "We build scalable and efficient web and mobile applications tailored to your business needs.",
    lists: [
      "Web Design and Development",
      "Content Management System",
      "Mobile Application Development",
      "Desktop Application Development",
    ],
    url: "/development",
  },
  {
    id: 2,
    img: ser_img_4,
    subtitle: "Kaltech Consultancy",
    title: "MARKETING",
    text: "Our marketing services are designed to help businesses reach their target audience effectively.",
    lists: [
      "Social Media Marketing",
      "Search Engine Optimazation",
      "Email Marketing",
    ],
    url: "/marketing",
  },
  {
    id: 3,
    img: ser_img_1,
    subtitle: "Kaltech Consultancy",
    title: "BRANDING",
    text: "We create your graphic designs according to your budget and your needs. Reveal your brand image and capture your audience.",
    lists: [
      "Logo Design",
      "Graphic Identity",
      "Business Branding",
      "Brand Ambassdor",
    ],
    url: "/branding",
  },

  {
    id: 4,
    img: ser_img_3,
    subtitle: "Kaltech Consultancy",
    title: "DATA ANALYTICS",
    text: "Unlock the power of your data with our comprehensive data analytics services. We help businesses transform raw data into actionable insights, enabling informed decision-making and strategic growth.",
    lists: [
      "Business Intelligence",
      "Data Visualizations",
      "Predictive Analytics",
      "Big Data Solutions",
    ],
    url: "/data-analytics",
  },
];

export default function ServiceSix() {
  return (
    <div className="sv-service-area project-panel-area-2">
      <div className="container-fluid p-0">
        {service_data.map((item) => (
          <div
            key={item.id}
            id={item.url.replace("/", "")}
            className="sv-service-item project-panel-2"
            // style={{ scrollMarginTop: "719px" }}
          >
            <div className="row g-0">
              <div
                className="col-xl-6 col-lg-6 sv-service-image-container"
                // style={{ display: "block" }}
              >
                <div className="sv-service-thumb">
                  <Image
                    src={item.img}
                    alt="service-img"
                    style={{ height: "100%" }}
                  />
                </div>
              </div>

              <div className="col-xl-6 col-lg-6">
                <div className="sv-service-content-wrap d-flex align-items-center">
                  <div
                    className="sv-service-content"
                    style={
                      {
                        // display: "flex",
                        // gap: "30px",
                      }
                    }
                  >
                    <div
                      className="sv-service-title-box"
                      // style={{ width: "40%" }}
                    >
                      <span className="sv-service-subtitle">
                        <i>{item.id < 9 ? "0" + item.id : item.id}</i>
                      </span>
                      <h4
                        className="sv-service-title"
                        style={{ letterSpacing: "1.4px" }}
                      >
                        {item.title}
                      </h4>
                    </div>

                    <div
                      className="sv-service-description-box"
                      // style={{ width: "60%" }}
                    >
                      <div className="sv-service-text">
                        <p>{item.text}</p>
                      </div>
                      <div
                        className="sv-service-list"
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <ul>
                          {item.lists.map((list, i) => (
                            <li key={i}>{list}</li>
                          ))}
                        </ul>

                        <div className="tp-projct-5-2-btn-box d-none justify-content-end sv-six-btn-sm">
                          <div className="tp-hover-btn-wrapper">
                            <Link
                              className="custom-circle tp-hover-btn-item tp-hover-btn"
                              href={item.url}
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
                        <div className="sv-six-btn-lg">
                          <SecondaryCircleBtn
                            label="Get In"
                            label2="Touch"
                            url={item.url}
                            style={false}
                            justifyContent={"flex-end"}
                          />
                        </div>
                      </div>

                      {/* service btn  */}
                      {/* <div className="sv-service-btn">
                        <Link
                          className="tp-btn-zikzak zikzak-inner p-relative"
                          href={item.url}
                        >
                          <span className="zikzak-content">
                            See <br /> Details
                            <RightArrow clr="currentColor" />
                          </span>
                          <ShapeTwo />
                        </Link>
                      </div> */}

                      {/* small btn */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
