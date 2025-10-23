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
          start: "top 30%",
          pin: true,
          markers: true,
          scrub: 1,
          pinSpacing: false,
          end: "bottom 40%",
        },
      });
      tp_instagram_3.to(".tp-instagram-thumb img", {
        width: "200px",
        height: "200px",
        borderRadius: "10px",
      });
    });
  }
}

export { instagramAnim };
