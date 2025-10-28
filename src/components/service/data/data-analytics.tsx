import React from "react";
import Image from "next/image";
import Link from "next/link";

// images
import sv_1 from "@/assets/img/inner-service/sercive-details/sv-details-1.jpg";
import sv_2 from "@/assets/img/inner-service/sercive-details/sv-details-2.jpg";
import sv_3 from "@/assets/img/inner-service/sercive-details/sv-details-3.jpg";

type ServiceKey = "businessIntelligence" | "dataVisualization" | "predictiveAnalytics" | "bigData" | "reporting";

const dataAnalyticsData = {
  subtitle: "KALTECH CONSULTANCY",
  title: "Data Analytics",
  intro: {
    paragraph1: "Data analytics is essential for making informed business decisions and staying competitive in today's data-driven world. At Kaltech Consultancy, we transform raw data into actionable insights that drive growth, optimize operations, and reveal opportunities across your organization.",
    paragraph2: "Explore our data analytics solutions and see how we can unlock the power of your data!"
  },
  mainImage: sv_1,
  mainContent: {
    text1: "Data analytics combines statistical analysis, advanced algorithms, and business intelligence to uncover patterns and trends. Our expert analysts help you understand your data, make data-driven decisions, and gain a competitive advantage in your market.",
    text2: "Great data analytics seamlessly transforms complex datasets into clear, actionable insights that empower teams to make confident decisions and achieve measurable business outcomes."
  },
  features: [
    "Data collection and integration from multiple sources",
    "Advanced statistical analysis and modeling",
    "Custom dashboards and real-time monitoring",
    "Actionable insights and strategic recommendations"
  ],
  smallImages: [sv_2, sv_3],
  bottomText: "Exceptional data analytics solutions turn information into strategic advantages. Our analytics services are designed to provide clarity, drive performance, and help you understand the story your data is telling.",
  services: [
    { name: "Business Intelligence", key: "businessIntelligence" as const },
    { name: "Data Visualization", key: "dataVisualization" as const },
    { name: "Predictive Analytics", key: "predictiveAnalytics" as const },
    { name: "Big Data Solutions", key: "bigData" as const },
    { name: "Reporting & Dashboards", key: "reporting" as const }
  ],
  sidebarContent: {
    businessIntelligence: {
      title: "Business Intelligence",
      description: "Comprehensive business intelligence solutions that consolidate data from across your organization. We help you understand performance metrics, identify trends, and make strategic decisions based on solid data foundations.",
      ctaText: "Let's Talk",
      ctaLink: "/contact"
    },
    dataVisualization: {
      title: "Data Visualization",
      description: "Transform complex data into intuitive visual representations. Our data visualization services make it easy to understand patterns, trends, and outliers through interactive charts, graphs, and custom dashboards that tell your data's story.",
      ctaText: "Let's Talk",
      ctaLink: "/contact"
    },
    predictiveAnalytics: {
      title: "Predictive Analytics",
      description: "Leverage machine learning and statistical models to forecast future trends and behaviors. Our predictive analytics solutions help you anticipate market changes, customer needs, and operational challenges before they happen.",
      ctaText: "Let's Talk",
      ctaLink: "/contact"
    },
    bigData: {
      title: "Big Data Solutions",
      description: "Handle massive datasets with our scalable big data infrastructure and processing solutions. We implement modern data architectures that can store, process, and analyze large volumes of structured and unstructured data efficiently.",
      ctaText: "Let's Talk",
      ctaLink: "/contact"
    },
    reporting: {
      title: "Reporting & Dashboards",
      description: "Automated reporting systems and interactive dashboards that provide real-time insights. We create custom reporting solutions that deliver the right information to the right people at the right time, enabling faster, data-driven decisions.",
      ctaText: "Let's Talk",
      ctaLink: "/contact"
    }
  }
};

export default function DataAnalytics() {
  const [activeService, setActiveService] = React.useState<ServiceKey>("businessIntelligence");

  return (
    <div className="service-details__area service-details__space pt-200 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="service-details__title-box mb-70">
              <span className="service-details__subtitle tp-char-animation">
                {dataAnalyticsData.subtitle}
              </span>
              <h4 className="sv-hero-title tp-char-animation" style={{letterSpacing: "1px"}}>
                {dataAnalyticsData.title}
              </h4>
            </div>
          </div>
          <div className="">
            <div className="">
              <div className="service-details__banner-text mb-80">
                <p className="mb-30 tp_title_anim">
                  {dataAnalyticsData.intro.paragraph1}
                </p>
                <p className="tp_title_anim">
                  {dataAnalyticsData.intro.paragraph2}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="service-details__tab-wrapper text-center mb-120">
              <div className="service-details__tab-thumb">
                <Image
                  data-speed="0.4"
                  src={dataAnalyticsData.mainImage}
                  alt="data-analytics"
                  style={{ height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-7">
            <div className="service-details__left-wrap">
              <div className="service-details__left-text pb-20">
                <p className="text-1 tp_title_anim">
                  {dataAnalyticsData.mainContent.text1}
                </p>
                <p>
                  {dataAnalyticsData.mainContent.text2}
                </p>
              </div>
              <div className="service-details__fea-list">
                <ul>
                  {dataAnalyticsData.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="service-details__sm-thumb-wrap mb-60">
                <div className="row">
                  {dataAnalyticsData.smallImages.map((image, index) => (
                    <div key={index} className="col-xl-6 col-lg-6 col-md-6 mb-20">
                      <div className="service-details__sm-thumb">
                        <Image
                          src={image}
                          alt={`data-analytics-${index + 1}`}
                          style={{ height: "auto" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="service-details__left-text">
                <p>
                  {dataAnalyticsData.bottomText}
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5">
            <div className="service-details__right-wrap fix p-relative">
              <div className="service-details__rotate-text">
                <span>Full list of services</span>
              </div>
              <div className="service-details__right-category">
                {dataAnalyticsData.services.map((service, index) => (
                  <a 
                    key={index}
                    className={activeService === service.key ? "active" : ""} 
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveService(service.key);
                    }}
                  >
                    {service.name}
                  </a>
                ))}
              </div>
              <div className="service-details__right-text-box">
                <h4 className="pb-20" style={{letterSpacing:"1.2px"}}>
                  {dataAnalyticsData.sidebarContent[activeService].title.split(' ')[0]} <br /> 
                  {dataAnalyticsData.sidebarContent[activeService].title.split(' ').slice(1).join(' ')}
                </h4>
                <p className="mb-20">
                  {dataAnalyticsData.sidebarContent[activeService].description}
                </p>
                <Link
                  className="tp-btn-white background-black"
                  href={dataAnalyticsData.sidebarContent[activeService].ctaLink}
                >
                  {dataAnalyticsData.sidebarContent[activeService].ctaText}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}