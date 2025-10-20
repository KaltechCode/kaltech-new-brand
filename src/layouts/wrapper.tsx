"use client";
import React from "react";
import BackToTop from "@/components/back-to-top";
import ThemeSetting from "@/components/theme-setting";
import StickySocial from "@/components/sticky-socail";
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap.bundle.min");
}

interface WrapperProps {
  children: React.ReactNode;
  showBackToTop?: boolean;
}

const Wrapper = ({ children, showBackToTop = true }: WrapperProps) => {
  return (
    <React.Fragment>
      {children}
      {showBackToTop && <BackToTop />}
      <ThemeSetting />
      <StickySocial />
    </React.Fragment>
  );
};

export default Wrapper;
