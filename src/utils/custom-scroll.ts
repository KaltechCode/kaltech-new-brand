// hooks/useScrollAnimation.js
import { useState, useEffect, useRef } from "react";

/**
 * Custom hook to detect when a target element intersects the viewport.
 * This is the Next.js/React equivalent of a basic GSAP ScrollTrigger for element visibility.
 * * @param {number} threshold - A single number or array of numbers indicating at what percentage
 * of the target's visibility the observer's callback should be executed.
 * (e.g., 0.5 means trigger when 50% visible).
 * @param {string} rootMargin - Margin around the root (viewport). Can be used to load early/late.
 * (e.g., '0px 0px -100px 0px' to trigger 100px before the bottom).
 * @returns {Array} - [The ref to attach to the target element, boolean indicating if it's intersecting]
 */
export default function useScrollAnimation(
  threshold = 0.1,
  rootMargin = "0px"
) {
  const targetRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    // Only run on the client side where window and IntersectionObserver exist
    if (typeof window === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // 'entry.isIntersecting' is true when the element is visible
        setInView(entry.isIntersecting);
      },
      {
        root: null, // default is the viewport
        rootMargin: rootMargin,
        threshold: threshold,
      }
    );

    const currentRef = targetRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    // Clean up the observer when the component unmounts
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin]); // Dependencies for re-running the effect

  return [targetRef, inView];
}
