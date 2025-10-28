import React from "react";
import Image from "next/image";

// images
import ser_img_1 from "@/assets/img/inner-service/service/service-1.jpg";
import ser_img_2 from "@/assets/img/inner-service/service/service-2.jpg";
import ser_img_3 from "@/assets/img/inner-service/service/service-3.jpg";
import ser_img_4 from "@/assets/img/inner-service/service/service-4.jpg";

import { RightArrow, ShapeTwo } from "../svg";
import Link from "next/link";

const service_data = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
          <div key={item.id} className="sv-service-item project-panel-2">
            <div className="row g-0">
              <div className="col-xl-6 col-lg-6">
                <div className="sv-service-thumb">
                  <Image
                    src={item.img}
                    alt="service-img"
                    style={{ height: "auto" }}
                  />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="sv-service-content-wrap d-flex align-items-center">
                  <div className="sv-service-content">
                    <div className="sv-service-title-box">
                      <span className="sv-service-subtitle">
                        <i>{item.id < 9 ? "0" + item.id : item.id}</i>
                        {item.subtitle}
                      </span>
                      <h4 className="sv-service-title" style={{letterSpacing: "1.4px"}}>{item.title}</h4>
                    </div>
                    <div className="">
                      <div className="sv-service-text">
                        <p>{item.text}</p>
                      </div>
                      <div className="sv-service-list">
                        <ul>
                          {item.lists.map((list, i) => (
                            <li key={i}>{list}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="sv-service-btn">
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
                      </div>
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