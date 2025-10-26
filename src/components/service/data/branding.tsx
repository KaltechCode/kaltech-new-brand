import React from "react";
import Image from "next/image";
import Link from "next/link";

// images
import sv_1 from "@/assets/img/inner-service/sercive-details/sv-details-1.jpg";
import sv_2 from "@/assets/img/inner-service/sercive-details/sv-details-2.jpg";
import sv_3 from "@/assets/img/inner-service/sercive-details/sv-details-3.jpg";

type ServiceKey = "logo" | "identity" | "business" | "ambassador";

const brandingData = {
  subtitle: "KALTECH CONSULTANCY",
  title: "Branding",
  intro: {
    paragraph1: "Branding is essential to establish yourself in the market in a unique and permanent way. At Kaltech Consultancy, we attach great importance to understanding your business to better convey your values and your talent through your brand image.",
    paragraph2: "Explore our achievements and let yourself be convinced!"
  },
  mainImage: sv_1,
  mainContent: {
    text1: "Your logo is at the heart of your identity. An impactful design, tailor-made and in line with your activity will allow you to differentiate yourself and mark your audience with a memorable visual presence.",
    text2: "Great brand identity design lets your business stand out in a crowded marketplace and creates lasting emotional connections with your audience without overwhelming them."
  },
  features: [
    "Graphic research and production",
    "Presentation of your logo on different media",
    "Advice on the graphic orientation of your logo or its redesign",
    "Delivery of your logo in professional formats"
  ],
  smallImages: [sv_2, sv_3],
  bottomText: "Great branding design creates memorable experiences that resonate with your target audience and build long-term loyalty. Bonus points for when it also looks and feels aesthetically pleasing while maintaining consistency across all touchpoints!",
  services: [
    { name: "Logo Design", key: "logo" as const },
    { name: "Graphic Identity", key: "identity" as const },
    { name: "Business Branding", key: "business" as const },
    { name: "Brand Ambassador", key: "ambassador" as const }
  ],
  sidebarContent: {
    logo: {
      title: "Logo Design",
      description: "Your logo is at the heart of your identity. An impactful design, tailor-made and in line with your activity will allow you to differentiate yourself and mark your audience. We create timeless logos that capture your brand essence and leave lasting impressions.",
      ctaText: "Let's Talk",
      ctaLink: "/contact"
    },
    identity: {
      title: "Graphic Identity",
      description: "A cohesive graphic identity ensures consistency across all your brand touchpoints. We create comprehensive style guides that define your visual language, color palettes, typography, and design elements to strengthen brand recognition and credibility.",
      ctaText: "Let's Talk",
      ctaLink: "/contact"
    },
    business: {
      title: "Business Branding",
      description: "Complete business branding solutions that encompass everything from business cards to marketing materials. We ensure your brand message is consistent and professional across all platforms, creating a unified identity that builds trust and authority.",
      ctaText: "Let's Talk",
      ctaLink: "/contact"
    },
    ambassador: {
      title: "Brand Ambassador",
      description: "Build authentic connections with your audience through strategic brand ambassador programs. We help identify and engage influencers and advocates who embody your brand values, expand your reach, and create genuine relationships with your target market.",
      ctaText: "Let's Talk",
      ctaLink: "/contact"
    }
  }
};

export default function Branding() {
  const [activeService, setActiveService] = React.useState<ServiceKey>("logo");

  return (
    <div className="service-details__area service-details__space pt-200 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="service-details__title-box mb-70">
              <span className="service-details__subtitle tp-char-animation">
                {brandingData.subtitle}
              </span>
              <h4 className="sv-hero-title tp-char-animation" style={{letterSpacing: "1px"}}>
                {brandingData.title}
              </h4>
            </div>
          </div>
          <div className="">
            <div className="">
              <div className="service-details__banner-text mb-80">
                <p className="mb-30 tp_title_anim">
                  {brandingData.intro.paragraph1}
                </p>
                <p className="tp_title_anim">
                  {brandingData.intro.paragraph2}
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
                  src={brandingData.mainImage}
                  alt="branding"
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
                  {brandingData.mainContent.text1}
                </p>
                <p>
                  {brandingData.mainContent.text2}
                </p>
              </div>
              <div className="service-details__fea-list">
                <ul>
                  {brandingData.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="service-details__sm-thumb-wrap mb-60">
                <div className="row">
                  {brandingData.smallImages.map((image, index) => (
                    <div key={index} className="col-xl-6 col-lg-6 col-md-6 mb-20">
                      <div className="service-details__sm-thumb">
                        <Image
                          src={image}
                          alt={`branding-${index + 1}`}
                          style={{ height: "auto" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="service-details__left-text">
                <p>
                  {brandingData.bottomText}
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
                {brandingData.services.map((service, index) => (
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
                  {brandingData.sidebarContent[activeService].title.split(' ')[0]} <br /> 
                  {brandingData.sidebarContent[activeService].title.split(' ').slice(1).join(' ')}
                </h4>
                <p className="mb-20">
                  {brandingData.sidebarContent[activeService].description}
                </p>
                <Link
                  className="tp-btn-white background-black"
                  href={brandingData.sidebarContent[activeService].ctaLink}
                >
                  {brandingData.sidebarContent[activeService].ctaText}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}