import React from "react";
import Image from "next/image";
import Link from "next/link";

// images
import sv_1 from "@/assets/img/inner-service/sercive-details/sv-details-1.jpg";
import sv_2 from "@/assets/img/inner-service/sercive-details/sv-details-2.jpg";
import sv_3 from "@/assets/img/inner-service/sercive-details/sv-details-3.jpg";

type ServiceKey = "web" | "cms" | "mobile" | "desktop" | "api";

const developmentData = {
  subtitle: "KALTECH CONSULTANCY",
  title: "Development",
  intro: {
    paragraph1:
      "Our development services are engineered for businesses that demand reliability, performance, and innovation. Whether you are building a brand-new platform or upgrading an existing one, we combine cutting-edge technologies with strategic thinking to deliver solutions that drive measurable business growth.",
    paragraph2:
      "We do not just write code — we architect technological ecosystems that help your business scale, thrive, and stay competitive in today’s ever-evolving technological landscape.",
  },
  mainImage: sv_1,
  mainContent: {
    text1:
      "Our innovative team of experts build high-performance business systems designed to attract, engage, and convert your ideal audience.",
    text2:
      "Whether you need a small business website or a complex web application, we design and develop business systems and automate work flows that deliver results.",
    text3:
      "Optimize your business systems and work flow with our professional development services, including:",
  },
  features: [
    "Web Design and Development",
    "Mobile App Development",
    "Content Management System (CMS) Solutions",
    "E-Commerce Development",
    "Api Development and Integration",
  ],
  smallImages: [sv_2, sv_3],
  bottomText:
    "Exceptional development delivers seamless functionality and outstanding performance. Our applications are built with scalability in mind, ensuring they grow alongside your business needs and adapt to changing market demands.",
  services: [
    { name: "Web Design and Development", key: "web" as const },
    { name: "Mobile Application Development", key: "mobile" as const },
    {
      name: "Content Management System (CMS)",
      key: "cms" as const,
    },
    { name: "E-Commerce Development", key: "desktop" as const },
    { name: "Api Development and Integration", key: "api" as const },
  ],
  sidebarContent: {
    web: {
      title: "Web Design and Development",
      description_1:
        "We build visually stunning, mobile-responsive, and high-converting websites that create memorable user experiences.",
      list_1: [
        "Web Design and Development",
        "Mobile App Development",
        "Content Management System (CMS) Solutions",
        "E-Commerce Development",
        "Api Development and Integration",
      ],
      description_2:
        "Whether you need a corporate website, a portfolio, a service-based platform, or an advanced web application, our development team ensures a flawless, scalable, and future-proof solution.",
      ctaText: "Let's Talk",
      ctaLink: "/contact",
    },
    mobile: {
      title: "Mobile Application Development",
      description_1:
        "Reach your customers anytime, anywhere with feature-rich mobile applications designed for growth. Our team specializes in crafting intuitive, engaging, and reliable apps for both iOS and Android platforms.",
      subTitle_1: "Our Mobile App Capabilities Include:",
      list_1: [
        "Native and cross-platform mobile application development.",
        "UI/UX mobile interface design.",
        "API integration and backend development.",
        "Real-time data synchronization.",
        "Push notification system design.",
        "Mobile application testing, secure deployment, and ongoing monitoring and support.",
      ],
      description_2:
        "From concept, wire framing, design, development, testing, and launch, we ensure your application solves real user problems, enhances your brand engagement, and delivers a smooth user experience.",
      ctaText: "Let's Talk",
      ctaLink: "/contact",
    },
    cms: {
      title: "Content Management Systems (CMS) Development",
      description_1:
        "Manage your website effortlessly with a custom-built or pre-integrated CMS that puts you in full control of your digital content.",
      subTitle_1: "CMS Platforms We Work With:",

      list_1: [
        "WordPress.",
        "Shopify.",
        "Webflow.",
        "Customized CMS (when you need total flexibility",
      ],
      subTitle_2: "What You Get With Our CMS Development:",
      list_2: [
        "Modern designed and user-friendly admin dashboards.",
        "Custom templates and themes.",
        "Modular content blocks.",
        "Secure user role-based access.",
        "Easy scalability and maintenance.",
      ],
      description_2:
        "Our CMS solutions make updating your website simple, efficient, and secure — even with no technical background.",
      ctaText: "Let's Talk",
      ctaLink: "/contact",
    },
    desktop: {
      title: "E-Commerce Development",
      description_1:
        "Turn visitors into loyal customers with a robust, secure, and high-performing e-commerce platform. We design e-commerce experiences centered on conversion, seamless checkout, and customer satisfaction.",
      subTitle_1: "E-Commerce Features We Offer:",
      list_1: [
        "Custom online store development.",
        "Product catalog setup and management",
        "Integrated payment gateways",
        "Inventory and order management systems",
        "Sales tracking and analytics dashboards",
        "Multi-vendor marketplace development",
        "Subscriptions, memberships, and digital products",
      ],
      description_2:
        "Whether you are selling a single product or managing thousands, we design solutions that scale with your business.",
      ctaText: "Let's Talk",
      ctaLink: "/contact",
    },
    api: {
      title: "E-Commerce Development",
      description_1:
        "Modern businesses rely on seamless data flow. Our custom API services connect your platforms, automate workflows, and ensure your systems communicate efficiently.",
      subTitle_1: "E-Commerce Features We Offer:",
      list_1: [
        " Developing REST services and building GraphQL APIs.",
        "Third-party API integration (payment, marketing, CRM, etc.)",
        "Tailored middleware and microservices.",
        "Secure authentication protocols and data exchange.",
        "Enhancing API efficiency, ensuring ongoing upkeep, and managing version updates.",
        "Integrating with the existing legacy system.",
      ],
      description_2:
        "Our API services help your digital ecosystem communicate smarter, smoothly, and efficiently",
      ctaText: "Let's Talk",
      ctaLink: "/contact",
    },
  },
};
export default function Development() {
  const [activeService, setActiveService] = React.useState<ServiceKey>("web");

  return (
    <div className="service-details__area service-details__space pt-200 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="service-details__title-box mb-70">
              <h4
                className="sv-hero-title tp-char-animation"
                style={{ letterSpacing: "1px" }}
              >
                {developmentData.title}
              </h4>
            </div>
          </div>
          <div className="">
            <div className="">
              <div className="service-details__banner-text mb-80">
                <p className="mb-30 tp_title_anim">
                  {developmentData.intro.paragraph1}
                </p>
                <p className="tp_title_anim">
                  {developmentData.intro.paragraph2}
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
                  src={developmentData.mainImage}
                  alt="development"
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
                  {developmentData.mainContent.text1}
                </p>
                <p>{developmentData.mainContent.text2}</p>
                <p>{developmentData.mainContent.text3}</p>
              </div>
              <div className="service-details__fea-list">
                <ul>
                  {developmentData.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="service-details__sm-thumb-wrap mb-60">
                <div className="row">
                  {developmentData.smallImages.map((image, index) => (
                    <div
                      key={index}
                      className="col-xl-6 col-lg-6 col-md-6 mb-20"
                    >
                      <div className="service-details__sm-thumb">
                        <Image
                          src={image}
                          alt={`development-${index + 1}`}
                          style={{ height: "auto" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="service-details__left-text">
                <h3>Start Your Development Project Today</h3>
                <br />
                <p>{developmentData.bottomText}</p>
              </div>
            </div>
          </div>

          <div className="col-xl-5 col-lg-5">
            <div className="service-details__right-wrap fix p-relative">
              <div className="service-details__rotate-text">
                <span>Full list of services</span>
              </div>
              <div className="service-details__right-category">
                {developmentData.services.map((service, index) => (
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
                <h3 className="pb-20" style={{ letterSpacing: "1.2px" }}>
                  1. {developmentData.sidebarContent[activeService].title}
                </h3>
                <div className="service-details__fea-list">
                  <p>
                    {
                      developmentData.sidebarContent[activeService]
                        .description_1
                    }
                  </p>
                  <h5 style={{ fontWeight: 700 }}>
                    {developmentData.sidebarContent[activeService].subTitle_1}
                  </h5>
                  <ul style={{ marginTop: 20 }}>
                    {developmentData.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                  {developmentData.sidebarContent[activeService].subTitle_2 && (
                    <h5 style={{ fontWeight: 700, marginTop: 20 }}>
                      {developmentData.sidebarContent[activeService].subTitle_2}
                    </h5>
                  )}
                  {developmentData.sidebarContent[activeService].list_2 && (
                    <ul style={{ marginTop: 20 }}>
                      {developmentData.sidebarContent[activeService].list_2.map(
                        (feature, index) => (
                          <li key={index}>{feature}</li>
                        )
                      )}
                    </ul>
                  )}
                  <p style={{ marginTop: 20 }}>
                    {
                      developmentData.sidebarContent[activeService]
                        .description_2
                    }
                  </p>
                </div>
                <Link
                  className="tp-btn-white background-black"
                  href={developmentData.sidebarContent[activeService].ctaLink}
                >
                  {developmentData.sidebarContent[activeService].ctaText}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
