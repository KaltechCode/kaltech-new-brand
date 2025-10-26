import React from "react";
import Image from "next/image";
import Link from "next/link";

// images
import sv_1 from "@/assets/img/inner-service/sercive-details/sv-details-1.jpg";
import sv_2 from "@/assets/img/inner-service/sercive-details/sv-details-2.jpg";
import sv_3 from "@/assets/img/inner-service/sercive-details/sv-details-3.jpg";

const motionGraphicsData = {
  subtitle: "KALTECH CONSULTANCY",
  title: "Motion Graphics",
  intro: {
    paragraph1: "Motion graphics is a powerful tool for communicating complex ideas in a simple and engaging way. At Kaltech Consultancy, we create stunning animated content that brings your brand to life and captivates your audience across all digital platforms.",
    paragraph2: "Explore our motion graphics portfolio and see how we can elevate your brand!"
  },
  mainImage: sv_1,
  mainContent: {
    text1: "Motion graphics combine design, animation, and storytelling to create compelling visual narratives. Our expertly crafted animations help convey your message effectively while keeping your audience engaged.",
    text2: "Great motion design seamlessly blends creativity with purpose, delivering content that informs, entertains, and inspires action without overwhelming the viewer."
  },
  features: [
    "Concept development and storyboarding",
    "Professional animation and motion design",
    "Sound design and music integration",
    "Delivery in multiple formats for various platforms"
  ],
  smallImages: [sv_2, sv_3],
  bottomText: "Exceptional motion graphics capture attention and communicate your message in seconds. Our animations are designed to resonate with your target audience while maintaining your brand's unique identity and visual appeal.",
  services: [
    { name: "Social Media Videos", key: "socialVideos" },
    { name: "Explainer Videos", key: "explainer" },
    { name: "Logo Animations", key: "logoAnim" },
    { name: "Animated Infographics", key: "infographics" },
    { name: "Title Sequences", key: "titles" }
  ],
  sidebarContent: {
    socialVideos: {
      title: "Social Media Videos",
      description: "Eye-catching short-form videos optimized for social media platforms. We create thumb-stopping content that boosts engagement and increases your social media reach across Instagram, TikTok, Facebook, and LinkedIn.",
      ctaText: "Let's Talk",
      ctaLink: "/contact"
    },
    explainer: {
      title: "Explainer Videos",
      description: "Explainer videos simplify complex concepts and engage viewers through dynamic storytelling. Our custom animations help your audience understand your product or service quickly and memorably.",
      ctaText: "Let's Talk",
      ctaLink: "/contact"
    },
    logoAnim: {
      title: "Logo Animations",
      description: "Bring your brand to life with animated logo sequences. We create memorable logo animations that add motion and energy to your brand identity across digital platforms, perfect for intros and outros.",
      ctaText: "Let's Talk",
      ctaLink: "/contact"
    },
    infographics: {
      title: "Animated Infographics",
      description: "Transform data and statistics into engaging animated infographics. We make complex information easy to understand and share through visually appealing motion graphics that tell your data's story.",
      ctaText: "Let's Talk",
      ctaLink: "/contact"
    },
    titles: {
      title: "Title Sequences",
      description: "Professional title sequences and opening credits for videos and presentations. We create cinematic intros that set the tone and captivate your audience from the first frame with stunning visual storytelling.",
      ctaText: "Let's Talk",
      ctaLink: "/contact"
    }
  }
};

export default function Motion() {
  const [activeService, setActiveService] = React.useState("explainer");

  return (
    <div className="service-details__area service-details__space pt-200 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="service-details__title-box mb-70">
              <span className="service-details__subtitle tp-char-animation">
                {motionGraphicsData.subtitle}
              </span>
              <h4 className="sv-hero-title tp-char-animation" style={{letterSpacing: "1px"}}>
                {motionGraphicsData.title}
              </h4>
            </div>
          </div>
          <div className="">
            <div className="">
              <div className="service-details__banner-text mb-80">
                <p className="mb-30 tp_title_anim">
                  {motionGraphicsData.intro.paragraph1}
                </p>
                <p className="tp_title_anim">
                  {motionGraphicsData.intro.paragraph2}
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
                  src={motionGraphicsData.mainImage}
                  alt="motion-graphics"
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
                  {motionGraphicsData.mainContent.text1}
                </p>
                <p>
                  {motionGraphicsData.mainContent.text2}
                </p>
              </div>
              <div className="service-details__fea-list">
                <ul>
                  {motionGraphicsData.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="service-details__sm-thumb-wrap mb-60">
                <div className="row">
                  {motionGraphicsData.smallImages.map((image, index) => (
                    <div key={index} className="col-xl-6 col-lg-6 col-md-6 mb-20">
                      <div className="service-details__sm-thumb">
                        <Image
                          src={image}
                          alt={`motion-graphics-${index + 1}`}
                          style={{ height: "auto" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="service-details__left-text">
                <p>
                  {motionGraphicsData.bottomText}
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
                {motionGraphicsData.services.map((service, index) => (
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
                  {motionGraphicsData.sidebarContent[activeService].title.split(' ')[0]} <br /> 
                  {motionGraphicsData.sidebarContent[activeService].title.split(' ').slice(1).join(' ')}
                </h4>
                <p className="mb-20">
                  {motionGraphicsData.sidebarContent[activeService].description}
                </p>
                <Link
                  className="tp-btn-white background-black"
                  href={motionGraphicsData.sidebarContent[activeService].ctaLink}
                >
                  {motionGraphicsData.sidebarContent[activeService].ctaText}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}