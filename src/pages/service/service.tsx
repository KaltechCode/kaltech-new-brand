"use client";
import { gsap } from "gsap";
import React from "react";
import { useGSAP } from "@gsap/react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderOne from "@/layouts/headers/header-one";
import { ServiceItems } from "@/components/service/service-five";
import ServiceHero from "@/components/service/service-hero";
import ServiceSix from "@/components/service/service-six";
import { BrandItems } from "@/components/brand/brand-two";
import LineImgSlider from "@/components/line-text/line-img-slider";
import BigText from "@/components/big-text";
import { Leaf } from "@/components/svg";
import FooterTwo from "@/layouts/footers/footer-two";
// animation
import { charAnimation, fadeAnimation } from "@/utils/title-animation";
import { servicePanel } from "@/utils/panel-animation";
import FooterFour from "@/layouts/footers/footer-four";
import FooterOne from "@/layouts/footers/footer-one";
import FooterThree from "@/layouts/footers/footer-three";
import FooterFive from "@/layouts/footers/footer-five";
import FooterSix from "@/layouts/footers/footer-six";
import ContactOne from "@/components/contact/contact-one";
import { ctaAnimation } from "@/utils/cta-anim";
import { hoverBtn } from "@/utils/hover-btn";

const ServiceMain = () => {
  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      fadeAnimation();
      ctaAnimation();
      hoverBtn();
      servicePanel();
    }, 100);
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>
      {/* header area start */}
      <HeaderOne />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* service hero */}
            <ServiceHero />
            {/* service hero */}

            {/* service area */}
            <div className="tp-service-5-area sv-service-style">
              <div className="container">
                <div className="row">
                          
                </div>
                <div className="tp-service-5-wrap">
                  <ServiceItems />
                </div>
              </div>
            </div>
            {/* service area */}

            {/* service area */}
            <ServiceSix />
            {/* service area */}


           
          </main>

          {/* footer area */}
          <ContactOne />
          <FooterTwo />
          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
};

export default ServiceMain;
