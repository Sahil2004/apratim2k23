"use strict";
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
