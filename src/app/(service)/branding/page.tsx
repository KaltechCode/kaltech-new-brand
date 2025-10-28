import React from "react";
import { Metadata } from "next";
import Branding from "@/pages/service/branding";

export const metadata: Metadata = {
  title: "Kaltech - Motion Graphics Service",
};

const ServiceDetailsPage = () => {
  return (
    <Branding/>
  );
};

export default ServiceDetailsPage;
