"use client";
import { gsap } from "gsap";
import React, { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
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
import { panelOneAnimation } from "@/utils/panel-animation";
import { awardAnimOne } from "@/utils/award-anim";
import { instagramAnim } from "@/utils/instagram-anim";
import AwardTwo from "@/components/award/award-two";
import FooterTwo from "@/layouts/footers/footer-two";
import InstagramArea from "@/components/instagram/instagram-area";
import ScrollAnimatedSection from "@/components/ui/scroll-example";

const HomeMain = () => {
  useScrollSmooth();
  useEffect(() => {
    document.body.classList.add("tp-smooth-scroll");
    return () => {
      document.body.classList.remove("tp-smooth-scroll");
    };
  }, []);
  useGSAP(() => {
    const timer = setTimeout(() => {
      // Hero animations
      heroTitleAnim();
      heroBgAnimation();

      // Video animations
      videoAnimOne();
      videoAnimTwo();

      // Panel animation
      panelOneAnimation();

      // Award animation
      awardAnimOne();

      // Instagram animation
      // instagramAnim();

      // UI animations
      hoverBtn();
      // footerTwoAnimation();
      fadeAnimation();
      // charAnimation();
      // bounceAnimation();
    }, 100);
    return () => clearTimeout(timer);
  });
  return (
    <Wrapper showBackToTop={false}>
      <HeaderOne />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <HeroBannerFour />

            <AboutOne />

            <ServiceTwo />

            <InstagramArea />

            <AwardTwo />
          </main>

          <FooterTwo />
        </div>
      </div>
    </Wrapper>
  );
};

export default HomeMain;
