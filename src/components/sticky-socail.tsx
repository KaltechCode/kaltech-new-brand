"use client";
import React from "react";
import dynamic from "next/dynamic";
import Social from "./social/social";

const StickySocial = () => {
  return (
    <div className={`tp-theme-settings-area social`}>
      <div className="ab-2-hero-social-wrap d-none d-xl-block">
        <div className="ab-2-hero-social">
          <Social />
        </div>
        <div className="ab-2-hero-social-text">
          <span>Follow us</span>
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(StickySocial), {
  ssr: false,
});
