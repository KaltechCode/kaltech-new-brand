import React, { useRef, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import { DownArrow } from "../../svg";

// images
import port_sm_1 from "@/assets/img/custom/portfolio/Joptiman/JOptiman_Port_1.webp";
import port_sm_2 from "@/assets/img/custom/portfolio/Joptiman/JOptiman_Port_2.webp";
import port_sm_3 from "@/assets/img/custom/portfolio/bliz/Bliz_Port_1.webp";
import port_sm_4 from "@/assets/img/custom/portfolio/bliz/Bliz_Port_2.webp";
import port_sm_5 from "@/assets/img/custom/portfolio/bliz/Bliz_Port_3.webp";
import port_sm_6 from "@/assets/img/custom/portfolio/bliz/Bliz_Port_1.webp";
import { SlickNextArrow, SlickPrevArrow } from "../../slick-arrow";

const year = new Date().getFullYear();
// slider data
const slider_data = [
  {
    id: 1,
    bg: "/assets/img/custom/portfolio/Joptiman/JOptiman_Port_1.webp",
    subtitle: "Digital Design",
    year: "2024",
    title: "JOptiman <br> Consultancy",
  },
  {
    id: 2,
    bg: "/assets/img/custom/portfolio/Joptiman/JOptiman_Port_2.webp",
    subtitle: "Digital Design",
    year: "2022",
    title: "JOptiman <br> Consultancy",
  },
  {
    id: 3,
    bg: "/assets/img/custom/portfolio/bliz/Bliz_Port_1.webp",
    subtitle: "Digital Design",
    year: "2021",
    title: "JOptiman <br> Consultancy",
  },
  {
    id: 4,
    bg: "/assets/img/custom/portfolio/bliz/Bliz_Port_2.webp",
    subtitle: "Digital Design",
    year: new Date().getFullYear(),
    title: "Bliz <br> Services",
  },
  {
    id: 5,
    bg: "/assets/img/custom/portfolio/bliz/Bliz_Port_3.webp",
    subtitle: "Development",
    year,
    title: "Bliz <br> Services",
  },
  {
    id: 6,
    bg: "/assets/img/custom/portfolio/bliz/Bliz_Port_1.webp",
    subtitle: "Development",
    year: year,
    title: " Bliz <br /> Services",
  },
];
// slider thumbs
const slider_thumbs = [
  {
    id: 1,
    img: port_sm_1,
    subtitle: "Joptimal",
    year: year,
    title: "JOptiman Consultancy",
  },
  {
    id: 2,
    img: port_sm_2,
    subtitle: "JOptiman",
    year: year,
    title: "JOptiman Consultancy",
  },
  {
    id: 3,
    img: port_sm_3,
    subtitle: "Bliz Services",
    year: year,
    title: "Bliz Services",
  },
  {
    id: 4,
    img: port_sm_4,
    subtitle: "Digital Design",
    year: year,
    title: "Bliz Services",
  },
  {
    id: 5,
    img: port_sm_5,
    subtitle: "Bliz Services",
    year: year,
    title: "Bliz Services",
  },
  {
    id: 6,
    img: port_sm_6,
    subtitle: "JOptiman Consultancy",
    year: year,
    title: "JOptiman Consultancy",
  },
];

// slider setting one
const slider_setting_one = {
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  speed: 1000,
  nextArrow: <SlickNextArrow />,
  prevArrow: <SlickPrevArrow />,
};
// slider setting two
const slider_setting_two = {
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  arrow: false,
  focusOnSelect: true,
  // centerPadding: "0",
  speed: 600,
  nextArrow: <SlickNextArrow />,
  prevArrow: <SlickPrevArrow />,
  spaceBetween: 50,
  responsive: [
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 3,
        spaceBetween: 50,
      },
    },
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 2,
        spaceBetween: 50,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        spaceBetween: 50,
      },
    },
    {
      breakpoint: 992,
      settings: {
        arrows: false,
        slidesToShow: 2,
        spaceBetween: 15,
      },
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        slidesToShow: 4,
      },
    },
  ],
};

export default function PortfolioSliderHomeTen() {
  const [slider1, setSlider1] = useState<Slider | null>(null);
  const [slider2, setSlider2] = useState<Slider | null>(null);
  const [sliderIndex, setSliderIndex] = useState<number>(1);
  const sliderRef = useRef<Slider | null>(null);

  return (
    <div className="tp-portfolio-11-area fix">
      <div className="container container-1480">
        <h3 className="section-title">Our Portfolio</h3>
        <div className="tp-portfolio-11-slider-wrap p-relative">
          <Slider
            {...slider_setting_one}
            asNavFor={slider2 as Slider}
            ref={(slider) => {
              setSlider1(slider);
              sliderRef.current = slider;
            }}
            className="tp-portfolio-11-slider-active"
          >
            {slider_data.map((item) => (
              <div key={item.id}>
                <div
                  className="tp-portfolio-11-slider-bg pt-170 pb-150 d-flex align-items-end"
                  style={{ backgroundImage: `url(${item.bg})` }}
                >
                  {/* <div
                  className="tp-portfolio-11-slider-content"
                  style={{
                    background: "rgba(0,0,0,.7)",
                    padding: "20px",
                    position: "absolute",
                    bottom: 20,
                    left: 60,
                    borderRadius: 10,
                  }}
                >
                  <div className="tp-portfolio-11-slider-link">
                    <Link href="/portfolio-details-video">
                      <DownArrow />
                    </Link>
                  </div>
                  <span className="tp-portfolio-11-slider-subtitle">
                    {item.year} <br /> {item.subtitle}
                  </span>
                  <h3
                    className="tp-portfolio-11-slider-title"
                    style={{
                      fontSize: "clamp(18px, 6vw + .8rem, 100px)",
                      textShadow: "1px 1px #111",
                    }}
                  >
                    <Link
                      href="/portfolio-details-video"
                      dangerouslySetInnerHTML={{ __html: item.title }}
                    ></Link>
                  </h3>
                </div> */}
                </div>
              </div>
            ))}
          </Slider>

          <div className="dddd"></div>

          <div className="tp-portfolio-11-slider-nav-wrap z-index-5">
            <div
              className="slides-numbers d-none d-lg-flex d-flex align-items-center"
              style={{ display: "inline-block" }}
            >
              <div className="slider-line"></div>
              <span className="active">
                {sliderIndex < 9 ? `0${sliderIndex}` : sliderIndex}
              </span>
            </div>
            <Slider
              {...slider_setting_two}
              asNavFor={slider1 as Slider}
              ref={(slider) => setSlider2(slider)}
              afterChange={(index) => setSliderIndex(index + 1)}
              className="tp-portfolio-11-slider-nav-active"
            >
              {slider_thumbs.map((item) => (
                <div
                  key={item.id}
                  className="tp-portfolio-11-slider-nav-item d-none d-md-block p-relative"
                >
                  <div className="tp-portfolio-11-slider-nav-thumb p-relative">
                    <Image
                      src={item.img}
                      alt="thumb-img"
                      style={{ height: "auto", width: "100%" }}
                    />
                    <div
                      className=""
                      style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        width: "100%",
                        height: "100%",
                        background: "rgba(0,0,0,0.55)",
                        borderRadius: 10,
                      }}
                    ></div>
                  </div>

                  <div className="tp-portfolio-11-slider-nav-content-wrap">
                    <div className="tp-portfolio-11-slider-nav-content d-flex flex-column justify-content-between">
                      <div className="tp-portfolio-11-slider-nav-year">
                        <span>{item.year}</span>
                      </div>
                      <div className="tp-portfolio-11-slider-nav-tittle-box">
                        <span className="tp-portfolio-11-slider-nav-subtittle">
                          <Link href="/">{item.subtitle}</Link>
                        </span>
                        {/* <h4 className="tp-portfolio-11-slider-nav-tittle">
                        <Link href="/portfolio-details-video">
                          {item.title}
                        </Link>
                      </h4> */}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
