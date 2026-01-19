/* GSAP Animations */

gsap.defaults({
  ease: "power3.out",
  duration: 1,
});

document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.querySelector(".menu-icon");
  const navItemsContainer = document.querySelector(".nav-items");

  if (menuIcon && navItemsContainer) {
    menuIcon.addEventListener("click", () => {
      navItemsContainer.classList.toggle("active");
      menuIcon.classList.toggle("active");
    });
  }
  gsap.from("header", {
    y: -50,
    opacity: 0,
    duration: 1,
  });

  gsap.from(".logo img", {
    opacity: 0,
    duration: 1,
    delay: 0.3,
  });

  const navItems = document.querySelector(".nav-items");
  if (navItems) {
    gsap.from(navItems.children, {
      opacity: 0,
      y: -20,
      duration: 0.5,
      stagger: 0.1,
      delay: 0.5,
    });
  }

  gsap.from(".bg-overlay", {
    scale: 1.1,
    duration: 2,
    ease: "power2.inOut",
  });

  gsap.from(".hero-title", {
    y: 100,
    opacity: 0,
    duration: 1.2,
    skewY: 5,
    delay: 0.5,
  });

  const socialIcons = document.querySelectorAll(".sidebar-social a");
  if (socialIcons.length > 0) {
    gsap.from(socialIcons, {
      opacity: 0,
      y: -20,
      duration: 0.5,
      stagger: 0.1,
      delay: 0.8,
      clearProps: "all",
    });
  }

  const statItems = document.querySelectorAll(".item-stat");
  if (statItems.length > 0) {
    gsap.from(statItems, {
      y: 100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      delay: 1,
      scrollTrigger: {
        trigger: ".bar-stats",
        start: "top 90%",
      },
    });
  }

  if (typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".card-feature", {
      scrollTrigger: {
        trigger: ".section-content",
        start: "top 80%",
      },
      y: 100,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(".promo-content h2, .desc-promo, .btn-play", {
      scrollTrigger: {
        trigger: ".section-promo",
        start: "top 75%",
      },
      x: -100,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(".img-main, .img-small-1, .img-small-2", {
      scrollTrigger: {
        trigger: ".section-promo",
        start: "top 60%",
      },
      scale: 0.8,
      opacity: 0,
      stagger: 0.2,
      duration: 1.2,
      ease: "expo.out",
    });
  }
});
