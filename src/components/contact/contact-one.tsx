import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { ProjectShape, RightArrow } from "../svg";
import cta from '@/assets/img/home-03/cta/cta-1.png';
import Link from "next/link";

export default function ContactOne() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const title = titleRef.current;
    if (!title) return;

    let position = 0;
    let bouncePosition = 0;
    let bounceDirection = 1;

    const animateGradient = () => {
      // Gradient animation
      position = (position + 1) % 200;
      title.style.backgroundPosition = `${position}% center`;

      // Bounce animation
      bouncePosition += 0.5 * bounceDirection;
      if (bouncePosition >= 10 || bouncePosition <= 0) {
        bounceDirection *= -1;
      }
      title.style.transform = `translateY(-${bouncePosition}px)`;

      requestAnimationFrame(animateGradient);
    };

    const animationId = requestAnimationFrame(animateGradient);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="tp-cta-area black-bg pt-120 pb-120 z-index fix">
      <div className="container">
        <div className="col-xl-12">
          <div className="tp-cta-title-box p-relative">
            <h4 ref={titleRef} className="tp-cta-title cta-text">
              Let&apos;s talk
              <br />
              <span className="about-it">about it</span>
            </h4>
            <p className="tp_fade_bottom">
              We will collaborate to find the right answer and bring progress
              <br />
              to your business and to the world.
            </p>
            <div className="tp-cta-icon">
              <Image src={cta} alt="cta-img" />
            </div>
            <div className="tp-cta-btn-box">
              <Link className="tp-btn-zikzak p-relative" href="/contact">
                <span className="zikzak-content">
                  Get <br /> In Touch
                  <RightArrow clr="#19191A" />
                </span>
                <ProjectShape />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}