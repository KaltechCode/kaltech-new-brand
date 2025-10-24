// components/ScrollAnimatedSection.jsx
"use client"; // REQUIRED for browser APIs like Intersection Observer

import useScrollAnimation from "@/utils/custom-scroll";
import "./styles.css"; // Assume you have a CSS file

export default function ScrollAnimatedSection() {
  // Trigger when at least 30% of the element is visible
  const [sectionRef, isVisible] = useScrollAnimation(0.3);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        gap: "50vh",
      }}
    >
      <h1>Scroll Down to See the Animation</h1>
      <div
        ref={sectionRef as any} // 👈 Attach the ref here
        className={`card ${isVisible ? "animate-in" : "animate-out"}`} // 👈 Apply class based on state
      >
        <p>This element is now: **{isVisible ? "Visible" : "Hidden"}**</p>
      </div>
      <div style={{ height: "100vh" }}></div> {/* Spacer */}
    </div>
  );
}
