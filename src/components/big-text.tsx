import Link from "next/link";
import React from "react";
import UpArrow from "../../public/assets/img/svg/arrow-head.svg";
// import { MdArrowOutward } from "react-icons/md";
const { MdArrowOutward } = require("react-icons/md");

// type
type IProps = {
  cls?: string;
};

export default function BigText({ cls = "" }: IProps) {
  const whyChooseUs = [
    {
      title: " ✔  SEO-Friendly Development",
      content:
        "We build websites and applications that rank higher on Google and attract quality traffic.",
    },

    {
      title: "✔ Fast, Reliable,and Secure Solutions",
      content:
        "Speed, security, and performance are at the core of our development process.",
    },

    {
      title: "✔ Custom-Built for Your Business",
      content:
        "Every project is tailored to your goals, audience, and industry.",
    },

    {
      title: "✔ Transparent Project Management",
      content: "Clear timelines. Consistent updates. Zero guesswork.",
    },

    {
      title: "✔ Constant Support & Maintenance",
      content:
        "We constantly keep your business systems updated, optimized, and secure.",
    },
  ];
  return (
    <div className={`sv-big-text-area ${cls}`}>
      <div className="container">
        <div className="sv-big-text-box">
          <h3></h3>
          <div className="">
            {whyChooseUs.map((item, index) => (
              <div className="" key={index}>
                <h6>{item.title}</h6>
                <p>{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
