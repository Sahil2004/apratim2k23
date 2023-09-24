"use strict";
// const footer_el = document.querySelector(".footer");

// const obs = new IntersectionObserver(
//   function (entries) {
//     //    console.log(ent);
//     // if (entries.isIntersecting === false) {
//     //   // document.body.classList.add("sticky");
//     //   footer_el.style.border - top - left - radius;
//     // }
//     const ent = entries[0];
//     console.log(entries);

//     if (ent.intersectionRatio > 0) {
//       // footer_el.style.backgroundColor = "#fff";
//       // document.body.classList.remove("sticky");
//       footer_el.style.borderTopLeftRadius = `${
//         3000 * ent.intersectionRatio
//       }rem ${400 * ent.intersectionRatio}rem`;
//       footer_el.style.borderTopRightRadius = `${
//         3000 * ent.intersectionRatio
//       }rem ${400 * ent.intersectionRatio}rem`;
//     }
//     // if (ent.intersectionRatio < 0.3) {
//     //   footer_el.style.backgroundColor = "#fff";
//     // }
//   },
//   {
//     root: null,
//     threshold: [
//       0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65,
//       0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1,
//     ],
//     // rootMargin: "-100px",
//     // rootMargin: "0px",
//   }
// );
// obs.observe(footer_el);

(function () {
  let chck_if_gsap_loaded = setInterval(function () {
    const eleBuilder = document
      .querySelector("body")
      .classList.contains("elementor-editor-active");
    const screenSize = window.screen.width >= 1200;
    if (window.gsap && window.ScrollTrigger && !eleBuilder && screenSize) {
      gsap.registerPlugin(ScrollTrigger);
      radius_section();
      clearInterval(chck_if_gsap_loaded);
    }
  }, 500);

  function radius_section() {
    gsap.to(".footer-radius-section", {
      scrollTrigger: {
        trigger: ".footer-radius-section",
        start: "-25% 65%",
        scrub: 1,
      },
      borderTopLeftRadius: `150% 40%`,
      borderTopRightRadius: `150% 40%`,
      duration: 0.1,
    });
  }
})();
const parallax = document.querySelector(".parallax");
window.addEventListener("scroll", function () {
  let offset = window.scrollY;
  console.log(offset);
  parallax.style.backgroundPositionY = offset * 0.7 + "rem";
});
