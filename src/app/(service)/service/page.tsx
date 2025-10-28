import React from "react";
import { Metadata } from "next";
import ServiceMain from "@/pages/service/service";

export const metadata: Metadata = {
  title: "KalTech - Service",
};

const ServicePage = () => {
  return (
    <ServiceMain/>
  );
};

export default ServicePage;
