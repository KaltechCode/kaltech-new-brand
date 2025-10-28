import React from "react";
import { Metadata } from "next";
import Development from "@/pages/service/development";

export const metadata: Metadata = {
  title: "Kaltech - Motion Graphics Service",
};

const ServiceDetailsPage = () => {
  return (
    <Development/>
  );
};

export default ServiceDetailsPage;
