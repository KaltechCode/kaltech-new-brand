import React from "react";
import Image from "next/image";
import Link from "next/link";
// images
import s_1 from "@/assets/img/home-02/service/WebDevIcon.png";
import s_2 from "@/assets/img/home-02/service/MarketingIcon.png";
import s_3 from "@/assets/img/home-02/service/BusinessIcon.png";
import s_4 from "@/assets/img/home-02/service/data-analytics-kaltech.png";
import { SecondaryBtn } from "../button/button";

const service_data = [
  {
    id: 1,
    title: "Development",
    desc: "We build scalable and efficient web and mobile applications tailored to your business needs.",
    icon: s_1,
    tag: "#development",
  },
  {
    id: 2,
    title: "Marketing",
    desc: "Our marketing services are designed to help businesses reach their target audience effectively.",
    icon: s_3,
    tag: "#marketing",
  },
  {
    id: 3,
    title: "Branding",
    desc: "Our branding services help businesses establish a strong and memorable brand identity.",
    icon: s_2,
    tag: "#branding",
  },

  {
    id: 3,
    title: "Data Analytics",
    desc: "Data analytics is the process of examining data sets to draw conclusions about the information they contain.",
    icon: s_4,
    tag: "#data-analytics",
  },
];

// service items
type ServiceItemsProps = {
  openForm?: boolean;
  setOpenForm: React.Dispatch<React.SetStateAction<boolean>>;
  formContent?: string;
  setFormContent: React.Dispatch<React.SetStateAction<string>>;
};

export function ServiceItems({
  openForm,
  setOpenForm,
  formContent,
  setFormContent,
}: ServiceItemsProps) {
  const handleOpen = () => {
    setOpenForm(!openForm);
  };
  return (
    <>
      <div
        className="tp-service-5-item-container"
        style={
          {
            // gridTemplateColumns: "1fr 1fr 1fr",
            // rowGap: "50px",
            // columnGap: "30px",
          }
        }
      >
        {/* <div className="col-xxl-3"></div> */}
        {service_data.map((item) => (
          <div key={item.id} className="tp-service-5-item-wrapper" style={{}}>
            <div
              className="tp-service-5-item tp_fade_bottom"
              style={{
                height: "450px",
                gap: 50,
                // padding: "30px 50px",
              }}
            >
              <div className="tp-service-5-icon">
                <Image
                  src={item.icon}
                  alt="icon"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>

              {/* description */}
              <div
                className="tp-service-5-content"
                style={{ textAlign: "center" }}
              >
                <h4 className="tp-service-5-title-sm tp-text-black">
                  <Link href={`/service${item.tag}`}>{item.title}</Link>
                </h4>
                <p style={{ fontSize: "clamp(16px, calc(2em + .8rem), 20px)" }}>
                  {item.desc}
                </p>
              </div>

              {/* buttons */}
              <div
                className="tp-service-5-buttons"
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: "20px",
                }}
              >
                <Link
                  href={item.tag || ""}
                  style={{
                    backgroundColor: "var(--tp-common-black)",
                    color: "var(--tp-common-white)",
                    padding: "5px 10px",
                    borderRadius: "5px",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  More Info
                </Link>
                {/* <button
                  onClick={() => handleOpen()}
                  style={{
                    backgroundColor: "var(--tp-common-black)",
                    color: "var(--tp-common-white)",
                    padding: "5px 10px",
                    borderRadius: "5px",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Book Now
                </button> */}

                <SecondaryBtn handler={() => handleOpen()} label={"Book Now"} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

// service five area
// export default function ServiceFive() {
//   return (
//     <div className="tp-service-5-area pt-120 pb-70">
//       <div className="container container-1775">
//         <div className="row">
//           <div className="col-xl-12">
//             <div className="tp-service-5-title-box mb-90">
//               <h4 className="tp-service-5-title p-relative tp_fade_right">
//                 <span className="tp-service-5-subtitle tp_fade_left">
//                   SERVICES
//                 </span>
//                 <span className="text-space"></span>
//                 Nullam posuere rhoncus elementum. Nullam lacinia <br />
//                 urna blandit iaculis sagittis
//               </h4>
//             </div>
//           </div>
//         </div>
//         <div className="tp-service-5-wrap">
//           <ServiceItems />
//         </div>
//       </div>
//     </div>
//   );
// }
