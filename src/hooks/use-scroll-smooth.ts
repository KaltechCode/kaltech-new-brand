"use client";
import { gsap } from "gsap";
import { useState } from "react";
// Assuming this custom path works for your setup and exports the ScrollSmoother class
import { ScrollSmoother } from "@/plugins";
import { useGSAP } from "@gsap/react";

// --- 1. Define the ScrollSmoother Instance Type ---
// ScrollSmoother.create() returns an instance with specific methods (like kill)
// Note: If you're importing ScrollSmoother directly from 'gsap/ScrollSmoother',
// you can often use its imported type directly if provided.
interface ScrollSmootherInstance {
  kill: () => void;
  // You can add other methods like scrollTo, get, etc., if needed:
  // get: () => number;
}

// --- 2. Register the Plugin Globally ---
// Ensure registration happens once and is guarded against server-side execution (if necessary).
if (typeof window !== "undefined") {
  // We register the plugin here so it's ready before the hook runs.
  gsap.registerPlugin(ScrollSmoother);
}

// --- 3. The useScrollSmooth Hook ---
export default function useScrollSmooth() {
  // Keeping this state, though it's currently only initialized, not changed.
  const [isScrollSmooth] = useState<boolean>(true);

  useGSAP(() => {
    // Get the elements, explicitly casting them to HTMLElement or null
    const smoothWrapper = document.getElementById(
      "smooth-wrapper"
    ) as HTMLElement | null;
    const smoothContent = document.getElementById(
      "smooth-content"
    ) as HTMLElement | null;

    // Initialize the smoother instance variable with the defined type
    let smootherInstance: ScrollSmootherInstance | null = null;

    if (smoothWrapper && smoothContent && isScrollSmooth) {
      gsap.config({
        nullTargetWarn: false,
      });

      // The create method is called, and the result is cast to our defined interface
      smootherInstance = ScrollSmoother.create({
        smooth: 2,
        effects: true,
        smoothTouch: 0.1,
        normalizeScroll: false,
        ignoreMobileResize: true,
      }) as ScrollSmootherInstance;

      // Optionally, set the wrapper and content elements if they aren't the default parents
      // smootherInstance.wrapper = smoothWrapper;
      // smootherInstance.content = smoothContent;
    }

    // Cleanup function: kill the ScrollSmoother instance on component unmount
    return () => {
      if (smootherInstance) {
        console.log("Killing ScrollSmoother instance...");
        smootherInstance.kill();
      }
    };
  }, [isScrollSmooth]);

  // The hook returns nothing but handles the side effect of setting up smooth scrolling
}

// --- Example Click Handler Logic (to be placed in a component or useEffect) ---

const handleAnchorClicks = () => {
  // 1. Get the active ScrollSmoother instance
  const smoother = ScrollSmoother.get();

  // 2. Attach click listener to all internal links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    // Remove existing listener to prevent duplicates if function runs again
    anchor.removeEventListener("click", scrollAnchor);
    anchor.addEventListener("click", scrollAnchor);

    function scrollAnchor(this: any, e: { preventDefault: () => void }) {
      const targetId = this.getAttribute("href");
      // Check if the link is a valid internal anchor link
      if (targetId && targetId !== "#" && targetId.length > 1) {
        e.preventDefault(); // STOP the native browser jump!

        if (smoother) {
          const targetElement = document.querySelector(targetId);

          if (targetElement) {
            // Use ScrollSmoother's built-in scrollTo method
            // true = smooth scroll
            // "top top" = align the element's top with the viewport's top
            smoother.scrollTo(targetElement, true, "top top");
          }
        }
      }
    }
  });
};

// You should call handleAnchorClicks() after your ScrollSmoother hook runs,
// for example, inside a main component's useEffect.

export { handleAnchorClicks };
