"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { useMotionValueEvent, useScroll, useSpring, useTransform } from "motion/react";
import { motion } from "motion/react";

// instagram images
import inst_1 from "@/assets/img/home-02/instagram/insta-inner-1.jpg";
import inst_2 from "@/assets/img/home-02/instagram/insta-inner-2.jpg";
import inst_3 from "@/assets/img/home-02/instagram/insta-inner-3.jpg";
import inst_4 from "@/assets/img/home-02/instagram/insta-inner-4.jpg";
import inst_5 from "@/assets/img/home-02/instagram/insta-inner-5.jpg";
import inst_6 from "@/assets/img/home-02/instagram/insta-inner-6.jpg";
import inst_7 from "@/assets/img/home-02/instagram/insta-inner-7.jpg";
import { useMediaQuery } from "@/utils/getMedis";

export default function InstagramArea() {
  // instagram images
  const instagram_images = [
    { id: 1, img: inst_1 },
    { id: 2, img: inst_2 },
    { id: 3, img: inst_3 },
    { id: 4, img: inst_4 },
    { id: 5, img: inst_5 },
    { id: 6, img: inst_6 },
    { id: 7, img: inst_7 },
  ];
  const refContainer = useRef(null);

  const { scrollYProgress, scrollY } = useScroll();

  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 991px)")
  const isMobileLandscape = useMediaQuery("(min-width: 576px) and (max-width: 900px) and (orientation: landscape)")

  console.log("table",isTablet, "isMobile", isMobileLandscape)
  // container: refContainer,
  // target: refContainer,
  // offset: ["start end", "end end"],

  const rawScale = useTransform(scrollYProgress, [.1, 0.55], [0.3, 1]);
  const sRawScale = useTransform(scrollYProgress, [.1, 0.15], [0.5, 1]);
  const rawScale3 = useTransform(scrollYProgress, [.2, 0.65], [0.3, 1]);
  const sRawScale3 = useTransform(scrollYProgress, [.2, 0.35], [0.5, 1]);
  const rawScale4 = useTransform(scrollYProgress, [.23, 0.67], [0.3, 1]);
  const sRawScale4 = useTransform(scrollYProgress, [.23, 0.37], [0.5, 1]);
  const rawPosT1= useTransform(scrollYProgress, [.1, 0.55],[10, -150])
  const sRawPosT1= useTransform(scrollYProgress, [.1, 0.25],[6, -120])
  const rawPosL3= useTransform(scrollYProgress, [.1, 0.35],[-12, -320])
  const sRawPosL3= useTransform(scrollYProgress, [.1, 0.15],[-12, -180])

  const rawPosL4= useTransform(scrollYProgress, [.1, 0.35],[-12, -180])

  const sRawPosL4= useTransform(scrollYProgress, [.1, 0.15],[-8, -140])

  const rawPosR5= useTransform(scrollYProgress, [.1, 0.35],[-15, -120])

  const sRawPosR5= useTransform(scrollYProgress, [.1, 0.15],[-12, -90])

    const scale = useSpring(isTablet || isMobileLandscape ? sRawScale :rawScale, { 
      stiffness: 100, // Lower is springier/slower
      damping: 30,    // Higher is more resistive/slower
    restDelta: 0.001 
  });

  
    const scale3 = useSpring(isTablet || isMobileLandscape ? sRawScale3 : rawScale3, { 
      stiffness: 100, // Lower is springier/slower
      damping: 30,    // Higher is more resistive/slower
    restDelta: 0.001 
  });

    const scale4 = useSpring(isTablet || isMobileLandscape ? sRawScale4 : rawScale4, { 
      stiffness: 100, // Lower is springier/slower
      damping: 30,    // Higher is more resistive/slower
    restDelta: 0.001 
  });

    const posT1 = useSpring(isTablet || isMobileLandscape ? sRawPosT1 : rawPosT1, { 
      stiffness: 100, // Lower is springier/slower
      damping: 30,    // Higher is more resistive/slower
    restDelta: 0.001 
  });

    const posL3 = useSpring(isTablet || isMobileLandscape ? sRawPosL3 : rawPosL3, { 
      stiffness: 100, // Lower is springier/slower
      damping: 30,    // Higher is more resistive/slower
    restDelta: 0.001 
  });

    const posL4 = useSpring(isTablet || isMobileLandscape ? sRawPosL4 : rawPosL4, { 
      stiffness: 100, // Lower is springier/slower
      damping: 30,    // Higher is more resistive/slower
    restDelta: 0.001 
  });

    const posR5 = useSpring(isTablet || isMobileLandscape ? sRawPosR5 : rawPosR5, { 
      stiffness: 100, // Lower is springier/slower
      damping: 30,    // Higher is more resistive/slower
    restDelta: 0.001 
  });

   



  // useMotionValueEvent(scrollY, "change", (value) => {
  //   console.log(value);

  // });
  console.log(scale)
  return (
    <div
      className="tp-instagram-area tp-instagram-ptb text-center p-relative mb-100"
      style={{}}
      ref={refContainer}
    >
      <div className="tp-instagram-thumb-wrap p-relative " style={{height: "max-content"}}>
        {/* {instagram_images.map((item) => (
          <div
            key={item.id}
            className={`tp-instagram-thumb-inner-${item.id} d-none d-xl-block`}
          >
            <Image src={item.img} alt="inst-img" />
          </div>
        ))} */}
        <motion.div
          className={`tp-instagram-thumb-inner-1`}
          style={{
            top: posT1,    
            scale: scale,
           
          }}
        >
          <Image
            src={instagram_images[0].img}
            alt="inst-img"
          />
        </motion.div>

        <motion.div
          className={`tp-instagram-thumb-inner-2`}
          style={{
            top: posT1,
            scale
           
          }}
        >
          <Image
            src={instagram_images[1].img}
            alt="inst-img"
            
          />
        </motion.div>

        <motion.div
          className={`tp-instagram-thumb-inner-3`}
          style={{
            // right: posL3,
            scale: scale3
          }}
        >
          <Image src={instagram_images[2].img} alt="inst-img" />
        </motion.div>

        <motion.div
          className={`tp-instagram-thumb-inner-4`}
          style={{
            right: posL4,
            scale: scale4
            
          }}
        >
          <Image src={instagram_images[3].img} alt="inst-img" />
        </motion.div>

        <motion.div
          className={`tp-instagram-thumb-inner-5`}
          style={{
            bottom: posR5,
            scale: scale4
          }}
        >
          <Image src={instagram_images[4].img} alt="inst-img" />
        </motion.div>

        <motion.div
          className={`tp-instagram-thumb-inner-6 `}
          style={{
            scale: scale3
          }}
        >
          <Image src={instagram_images[5].img} alt="inst-img" />
        </motion.div>

        <motion.div
          className={`tp-instagram-thumb-inner-7`}
          style={{
            scale: scale,
          }}
        >
          <Image src={instagram_images[6].img} alt="inst-img" style={{height: "100%", width: "100%"}} />
        </motion.div>

        {/* <div className={`tp-instagram-thumb-inner-y d-none d-xl-block`}>
          <Image src={instagram_images[7].img} alt="inst-img" />
        </div> */}

        <motion.div className="tp-instagram-thumb-center-image" 
        style={{scale}}
        
        >
          {/* <Image src={inst_8} alt="inst-img" */}

          <img
            src="/assets/img/home-02/instagram/insta-1.jpg"
            alt="inst-img"
            style={{height: "100%", width: "100%"}}
          />
        </motion.div>
        {/* <div className="tp-instagram-content-wrap text-start">
          <div className="tp-instagram-title-box">
            <span className="tp-instagram-subtitle">INSTAGRAM</span>
            <h4 className="tp-instagram-title">@likoagency</h4>
          </div>
          <div className="tp-instagram-content">
            <p>
              Become a part of our stories! <br /> Join the adventure.
            </p>
            <a className="tp-btn-white background-black" href="#">
              Follow Us
              <span>
                <Leaf />
              </span>
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
}
