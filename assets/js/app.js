/**
 * Visit Denmark - Animations
 * GSAP animations
 */

// Valores por defecto
gsap.defaults({
  ease: "power3.out",
  duration: 1,
});

document.addEventListener("DOMContentLoaded", () => {
  // --- Mobile Menu Logic ---
  const menuIcon = document.querySelector(".menu-icon");
  const navItemsContainer = document.querySelector(".nav-items");

  if (menuIcon && navItemsContainer) {
    menuIcon.addEventListener("click", () => {
      navItemsContainer.classList.toggle("active");
      menuIcon.classList.toggle("active");
    });
  }
  // animation-header-gsap
  gsap.from("header", {
    y: -50,
    opacity: 0,
    duration: 1,
  });

  // animation-logo-gsap
  gsap.from(".logo img", {
    opacity: 0,
    duration: 1,
    delay: 0.3,
  });

  // animation-nav-items-gsap
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

  // animation-bg-overlay-gsap
  gsap.from(".bg-overlay", {
    scale: 1.1,
    duration: 2,
    ease: "power2.inOut",
  });

  // animation-p-title-gsap
  gsap.from(".hero-title", {
    y: 100,
    opacity: 0,
    duration: 1.2,
    skewY: 5,
    delay: 0.5,
  });

  // animation-social-sidebar-gsap
  const socialIcons = document.querySelectorAll(".sidebar-social a");
  if (socialIcons.length > 0) {
    gsap.from(socialIcons, {
      opacity: 0,
      y: -20, // Match navItems direction (downwards entry)
      duration: 0.5,
      stagger: 0.1,
      delay: 0.8,
      clearProps: "all",
    });
  }

  // animation-stat-item-gsap
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

  // --- ScrollTrigger Animations for New Sections ---
  if (typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);

    // Experience Cards (Faithful) - Updated for card-feature
    gsap.from(".card-feature", {
      scrollTrigger: {
        trigger: ".section-content", // Targets generic content sections
        start: "top 80%",
      },
      y: 100,
      opacity: 0,
      stagger: 0.2, // Efecto cascada entre tarjetas
      duration: 1,
      ease: "power3.out",
    });

    // Promo Section Text (Faithful)
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

    // Promo Section Images (Faithful)
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
