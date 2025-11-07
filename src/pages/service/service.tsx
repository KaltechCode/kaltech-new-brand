"use client";
import { gsap } from "gsap";
import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import useScrollSmooth, { handleAnchorClicks } from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderOne from "@/layouts/headers/header-one";
import { ServiceItems } from "@/components/service/service-five";
import ServiceHero from "@/components/service/service-hero";
import ServiceSix from "@/components/service/service-six";

import FooterTwo from "@/layouts/footers/footer-two";
// animation
import { charAnimation, fadeAnimation } from "@/utils/title-animation";
import { servicePanel } from "@/utils/panel-animation";
import ContactOne from "@/components/contact/contact-one";
import { ctaAnimation } from "@/utils/cta-anim";
import { hoverBtn } from "@/utils/hover-btn";
import { ModalForm } from "@/components/custom/modal/form";
import FooterOne from "@/layouts/footers/footer-one";
import FooterThree from "@/layouts/footers/footer-three";
import FooterFour from "@/layouts/footers/footer-four";

const ServiceMain = () => {
  useScrollSmooth();

  const [openForm, setOpenForm] = useState<boolean>(false);
  const [formContent, setFormContent] = useState<string>("development");

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      fadeAnimation();
      ctaAnimation();
      hoverBtn();
      servicePanel();
      handleAnchorClicks();
    }, 100);
    return () => clearTimeout(timer);
  });

  const handleOpen = () => {
    setOpenForm(false);
  };
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
            {/* <div className="tp-service-5-area sv-service-style">
              <div className="container">
                <div className="tp-service-5-wrap">
                  <ServiceItems
                    openForm={openForm}
                    setFormContent={setFormContent}
                    setOpenForm={setOpenForm}
                    formContent={formContent}
                  />
                </div>
              </div>
            </div> */}
            {/* service area */}

            {/* service area */}
            <ServiceSix />
            {/* service area */}
          </main>

          {/* footer area */}
          <ContactOne />
          <FooterFour />
          {/* footer area */}
        </div>
      </div>

      <ModalForm openForm={openForm} handleOpen={handleOpen} />
    </Wrapper>
  );
};

export default ServiceMain;
