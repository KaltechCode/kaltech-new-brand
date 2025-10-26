import React from "react";
import { Metadata } from "next";
import Marketing from "@/pages/service/marketing";

export const metadata: Metadata = {
  title: "Kaltech - Motion Graphics Service",
};

const ServiceDetailsPage = () => {
  return (
    <Marketing/>
  );
};

export default ServiceDetailsPage;
