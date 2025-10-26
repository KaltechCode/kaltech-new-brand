import React from "react";
import Image from "next/image";
import Link from "next/link";

// images
import sv_1 from "@/assets/img/inner-service/sercive-details/sv-details-1.jpg";
import sv_2 from "@/assets/img/inner-service/sercive-details/sv-details-2.jpg";
import sv_3 from "@/assets/img/inner-service/sercive-details/sv-details-3.jpg";

const developmentData = {
  subtitle: "KALTECH CONSULTANCY",
  title: "Development",
  intro: {
    paragraph1: "We build scalable and efficient web and mobile applications tailored to your business needs. At Kaltech Consultancy, we leverage cutting-edge technologies to create robust digital solutions that drive growth, innovation, and deliver exceptional user experiences.",
    paragraph2: "Explore our development portfolio and see how we transform ideas into reality!"
  },
  mainImage: sv_1,
  mainContent: {
    text1: "Modern web and mobile development requires expertise in the latest frameworks and best practices. Our development team creates high-performance applications that are secure, scalable, and user-friendly, ensuring your digital presence stands out.",
    text2: "Great development combines clean code with exceptional user experience, creating applications that are both powerful and intuitive to use, delivering value to your business and delight to your users."
  },
  features: [
    "Custom application architecture and planning",
    "Responsive design for all devices and screen sizes",
    "Integration with third-party APIs and services",
    "Ongoing maintenance, support, and optimization"
  ],
  smallImages: [sv_2, sv_3],
  bottomText: "Exceptional development delivers seamless functionality and outstanding performance. Our applications are built with scalability in mind, ensuring they grow alongside your business needs and adapt to changing market demands.",
  services: [
    { name: "Web Design & Development", key: "web" },
    { name: "Content Management System", key: "cms" },
    { name: "Mobile App Development", key: "mobile" },
    { name: "Desktop App Development", key: "desktop" }
  ],
  sidebarContent: {
    web: {
      title: "Web Design & Development",
      description: "We create stunning, responsive websites that engage visitors and drive conversions. Our web solutions combine beautiful design with powerful functionality to deliver exceptional user experiences that work flawlessly across all devices and browsers.",
      ctaText: "Let's Talk",
      ctaLink: "/contact"
    },
    cms: {
      title: "Content Management System",
      description: "Empower your team with easy-to-use content management systems. We implement CMS solutions like WordPress, Strapi, and custom platforms that allow you to update and manage your website content without technical expertise or developer assistance.",
      ctaText: "Let's Talk",
      ctaLink: "/contact"
    },
    mobile: {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional performance. We build iOS and Android apps using React Native, Flutter, and native technologies that provide seamless experiences for your users on the go.",
      ctaText: "Let's Talk",
      ctaLink: "/contact"
    },
    desktop: {
      title: "Desktop App Development",
      description: "Powerful desktop applications for Windows, macOS, and Linux. We create feature-rich software solutions using Electron and native frameworks that maximize productivity, streamline operations, and deliver enterprise-grade performance.",
      ctaText: "Let's Talk",
      ctaLink: "/contact"
    }
  }
};

export default function Development() {
  const [activeService, setActiveService] = React.useState("web");

  return (
    <div className="service-details__area service-details__space pt-200 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="service-details__title-box mb-70">
              <span className="service-details__subtitle tp-char-animation">
                {developmentData.subtitle}
              </span>
              <h4 className="sv-hero-title tp-char-animation" style={{letterSpacing: "1px"}}>
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
                <p>
                  {developmentData.mainContent.text2}
                </p>
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
                    <div key={index} className="col-xl-6 col-lg-6 col-md-6 mb-20">
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
                <p>
                  {developmentData.bottomText}
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
                <h4 className="pb-20" style={{letterSpacing:"1.2px"}}>
                  {developmentData.sidebarContent[activeService].title.split(' ')[0]} <br /> 
                  {developmentData.sidebarContent[activeService].title.split(' ').slice(1).join(' ')}
                </h4>
                <p className="mb-20">
                  {developmentData.sidebarContent[activeService].description}
                </p>
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