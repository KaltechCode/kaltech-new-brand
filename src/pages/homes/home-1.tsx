"use client";
import { gsap } from "gsap";
import React, { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import {
  ScrollSmoother,
  ScrollTrigger,
  SplitText,
  cursorAnimation,
} from "@/plugins";
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderOne from "@/layouts/headers/header-one";

// animation
import { videoAnimOne, videoAnimTwo } from "@/utils/video-anim";
import { teamMarqueAnim } from "@/utils/scroll-marque";
import { hoverBtn } from "@/utils/hover-btn";
import { footerTwoAnimation } from "@/utils/footer-anim";
import {
  bounceAnimation,
  charAnimation,
  fadeAnimation,
  heroBgAnimation,
  heroTitleAnim,
} from "@/utils/title-animation";
import HeroBannerFour from "@/components/hero-banner/hero-banner-four";
import AboutOne from "@/components/about/about-one";
import ServiceTwo from "@/components/service/service-two";
import ProjectTwo from "@/components/project/project-two";
import { panelOneAnimation } from "@/utils/panel-animation";
import { awardAnimOne } from "@/utils/award-anim";
import { instagramAnim } from "@/utils/instagram-anim";
import AwardTwo from "@/components/award/award-two";
import FooterTwo from "@/layouts/footers/footer-two";

const HomeMain = () => {
  useScrollSmooth();

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      document.querySelector(".tp-magic-cursor")
    ) {
      cursorAnimation();
    }
  }, []);

  useGSAP(() => {
    const timer = setTimeout(() => {
      videoAnimOne();
      // portfolio image wrap
      gsap.timeline({
        scrollTrigger: {
          trigger: ".tp-project-full-img-wrap",
          start: "top 65",
          end: "bottom 0%",
          pin: ".tp-project-full-img",
          pinSpacing: false,
        },
      });
      // team marquee
      teamMarqueAnim();
      hoverBtn();
      footerTwoAnimation();
      fadeAnimation();
      charAnimation();
      bounceAnimation();
    }, 100);
    return () => clearTimeout(timer);
  });
  useGSAP(() => {
    const timer = setTimeout(() => {
      // hero animation
      heroTitleAnim();
      heroBgAnimation();
      // bounce animation
      bounceAnimation();
      // video anim
      videoAnimTwo();
      // panel animation
      panelOneAnimation();
      // award animation
      awardAnimOne();
      // instagram animation
      instagramAnim();
      hoverBtn();
    }, 100);
    return () => clearTimeout(timer);
  });
  return (
    <Wrapper showBackToTop={false}>
      <HeaderOne />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* hero area start */}
            <HeroBannerFour />
            {/* hero area end */}

            {/* video area */}
            <AboutOne />
            {/* video area */}

            {/* brand area */}
            {/* <BrandOne /> */}
            <ServiceTwo />
            {/* brand area */}

            {/* service area */}
            {/* <ServiceOne /> */}
            {/* service area */}

            {/* project area */}
            {/* <ProjectOne /> */}
            <ProjectTwo />
            {/* project area */}

            {/* award area */}
            {/* <AwardOne /> */}
            <AwardTwo />

            {/* award area */}

            {/* team area */}
            {/* <TeamOne /> */}
            {/* team area */}

            {/* testimonial area */}
            {/* <TestimonialOne /> */}
            {/* testimonial area */}
          </main>

          {/* footer area */}
          {/* <FooterOne /> */}
          <FooterTwo />

          {/* footer area */}
        </div>
      </div>

      {/* footer shape */}
      {/* <div className="tp-footer-shape-wrap z-index-5 smooth">
        <Link href="/contact">
          <div className="tp-footer-shape p-relative">
            <Image className="img-1" src={shape_1} alt="shape" />
            <Image className="img-2" src={shape_2} alt="shape" />
            <span></span>
          </div>
        </Link>
      </div> */}
      {/* footer shape */}
    </Wrapper>
  );
};

export default HomeMain;
