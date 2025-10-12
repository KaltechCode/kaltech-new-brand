import React from "react";
import { Facebook, Instagram, Linkdin } from "../svg";
import { FaXTwitter } from "react-icons/fa6";

const social_data = [
  {
    id: 4,
    icon: <Facebook />,
    link: "https://www.facebook.com/profile.php?id=100089610044002",
  },
  {
    id: 2,
    icon: <FaXTwitter size={14} />,
    link: "https://x.com/KaltechServices",
  },
  {
    id: 1,
    icon: <Linkdin />,
    link: "https://www.linkedin.com/company/kaltech-designs/",
  },

  {
    id: 3,
    icon: <Instagram />,
    link: "https://www.instagram.com/kaltechconsultancy/",
  },
];

export default function Social() {
  return (
    <>
      {social_data.map((item) => (
        <a href={item.link} key={item.id} target="_blank">
          <span>{item.icon}</span>
        </a>
      ))}
    </>
  );
}
