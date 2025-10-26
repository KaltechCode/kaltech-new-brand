import React from "react";
import { Metadata } from "next";
import MotionGraphics from "@/pages/service/motion-graphics";

export const metadata: Metadata = {
  title: "Kaltech - Motion Graphics Service",
};

const ServiceDetailsPage = () => {
  return (
    <MotionGraphics/>
  );
};

export default ServiceDetailsPage;
