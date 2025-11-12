"use client";
import { gsap } from "gsap";
import React from "react";
import { useGSAP } from "@gsap/react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderEleven from "@/layouts/headers/header-eleven";
import HeaderOne from "@/layouts/headers/header-one";

import FooterTwo from "@/layouts/footers/footer-two";
import AboutUsHero from "@/components/about/about-us-hero";
import AboutUsArea from "@/components/about/about-us-area";
import TeamOne from "@/components/team/team-one";
import FunFactOne from "@/components/fun-fact/fun-fact-one";
import BrandFive from "@/components/brand/brand-five";

// animation
import {
  charAnimation,
  fadeAnimation,
  titleAnimation,
} from "@/utils/title-animation";
import { hoverBtn } from "@/utils/hover-btn";
import PortfolioSliderHomeEleven from "@/components/portfolio/slider/portfolio-slider-home-eleven";
import PortfolioSliderHomeTen from "@/components/portfolio/slider/portfolio-slider-home-ten";

const AboutUsMain = () => {
  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      titleAnimation();
      // teamMarqueAnim();
      fadeAnimation();
      hoverBtn();
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
            {/* about hero */}
            <AboutUsHero />
            {/* about hero */}

            {/* about area */}
            <AboutUsArea />
            {/* about area */}

            {/* team area */}
            <TeamOne spacing="" />
            {/* team area */}

            {/* fun fact area */}
            <FunFactOne />
            {/* fun fact area */}

            {/* brand area */}
            <BrandFive />
            {/* brand area */}

            {/* <AwardOne/> */}

            {/* portfolio slider start */}

            <PortfolioSliderHomeTen />

            {/* portfolio slider end */}
          </main>

          {/* footer area */}
          <FooterTwo />
          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
};

export default AboutUsMain;
