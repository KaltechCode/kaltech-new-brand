import { gsap } from "gsap";
import $ from "jquery";

function instagramAnim() {
  if ($(".tp-instagram-area").length > 0) {
    let ins = gsap.matchMedia();
    ins.add("(min-width: 1200px)", () => {
      // Home 8
      let tp_instagram_3 = gsap.timeline({
        scrollTrigger: {
          trigger: ".tp-instagram-area",
          start: "top 20%",
          markers: true,
          scrub: 1,
          pinSpacing: false,
          endTrigger: ".tp-instagram-thumb",
        },
      });
      tp_instagram_3.to(".tp-instagram-thumb img", {
        width: "500px",
        height: "450px",
        borderRadius: "10px",
      });
    });
  }
}

export { instagramAnim };
