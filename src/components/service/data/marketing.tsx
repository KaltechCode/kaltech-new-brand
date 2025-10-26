import React from "react";
import Image from "next/image";
import Link from "next/link";

// images
import sv_1 from "@/assets/img/inner-service/sercive-details/sv-details-1.jpg";
import sv_2 from "@/assets/img/inner-service/sercive-details/sv-details-2.jpg";
import sv_3 from "@/assets/img/inner-service/sercive-details/sv-details-3.jpg";

type ServiceKey = "social" | "seo" | "email";

const marketingData = {
  subtitle: "KALTECH CONSULTANCY",
  title: "Marketing",
  intro: {
    paragraph1: "Our marketing services are designed to help businesses reach their target audience effectively. At Kaltech Consultancy, we create data-driven strategies that boost your online presence, generate measurable results, and drive sustainable growth for your business.",
    paragraph2: "Explore our marketing success stories and discover how we can grow your business!"
  },
  mainImage: sv_1,
  mainContent: {
    text1: "Digital marketing is essential for modern business success. Our comprehensive approach combines social media, SEO, and email marketing to create campaigns that resonate with your target audience and drive engagement.",
    text2: "Great marketing strategies deliver the right message to the right people at the right time, creating meaningful connections that convert prospects into loyal customers."
  },
  features: [
    "Comprehensive market research and analysis",
    "Strategic campaign planning and execution",
    "Performance tracking and analytics",
    "Continuous optimization for better ROI"
  ],
  smallImages: [sv_2, sv_3],
  bottomText: "Exceptional marketing campaigns create lasting impact and measurable results. Our data-driven approach ensures every marketing dollar is invested wisely to maximize your return on investment and accelerate business growth.",
  services: [
    { name: "Social Media Marketing", key: "social" as const },
    { name: "Search Engine Optimization", key: "seo" as const },
    { name: "Email Marketing", key: "email" as const }
  ],
  sidebarContent: {
    social: {
      title: "Social Media Marketing",
      description: "Build and engage your community across all major social platforms. We create compelling content and strategic campaigns that increase brand awareness, drive meaningful engagement, and convert followers into customers on Facebook, Instagram, LinkedIn, Twitter, and TikTok.",
      ctaText: "Let's Talk",
      ctaLink: "/contact"
    },
    seo: {
      title: "Search Engine Optimization",
      description: "Improve your website's visibility in search results and attract organic traffic. Our SEO strategies combine technical optimization, quality content creation, and link building to boost your rankings and drive qualified leads to your business.",
      ctaText: "Let's Talk",
      ctaLink: "/contact"
    },
    email: {
      title: "Email Marketing",
      description: "Nurture relationships and drive conversions with targeted email campaigns. We create personalized email strategies that deliver the right message to your subscribers at the perfect time, increasing open rates, click-throughs, and sales.",
      ctaText: "Let's Talk",
      ctaLink: "/contact"
    }
  }
};

export default function Marketing() {
  const [activeService, setActiveService] = React.useState<ServiceKey>("social");

  return (
    <div className="service-details__area service-details__space pt-200 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="service-details__title-box mb-70">
              <span className="service-details__subtitle tp-char-animation">
                {marketingData.subtitle}
              </span>
              <h4 className="sv-hero-title tp-char-animation" style={{letterSpacing: "1px"}}>
                {marketingData.title}
              </h4>
            </div>
          </div>
          <div className="">
            <div className="">
              <div className="service-details__banner-text mb-80">
                <p className="mb-30 tp_title_anim">
                  {marketingData.intro.paragraph1}
                </p>
                <p className="tp_title_anim">
                  {marketingData.intro.paragraph2}
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
                  src={marketingData.mainImage}
                  alt="marketing"
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
                  {marketingData.mainContent.text1}
                </p>
                <p>
                  {marketingData.mainContent.text2}
                </p>
              </div>
              <div className="service-details__fea-list">
                <ul>
                  {marketingData.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="service-details__sm-thumb-wrap mb-60">
                <div className="row">
                  {marketingData.smallImages.map((image, index) => (
                    <div key={index} className="col-xl-6 col-lg-6 col-md-6 mb-20">
                      <div className="service-details__sm-thumb">
                        <Image
                          src={image}
                          alt={`marketing-${index + 1}`}
                          style={{ height: "auto" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="service-details__left-text">
                <p>
                  {marketingData.bottomText}
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
                {marketingData.services.map((service, index) => (
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
                  {marketingData.sidebarContent[activeService].title.split(' ')[0]} <br /> 
                  {marketingData.sidebarContent[activeService].title.split(' ').slice(1).join(' ')}
                </h4>
                <p className="mb-20">
                  {marketingData.sidebarContent[activeService].description}
                </p>
                <Link
                  className="tp-btn-white background-black"
                  href={marketingData.sidebarContent[activeService].ctaLink}
                >
                  {marketingData.sidebarContent[activeService].ctaText}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}