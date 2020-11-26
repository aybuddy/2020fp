new fullpage("#fullpage", {
  autoScrolling: true,
  scrollHorizontally: true,
  navigation: true,
  anchors: ["about", "projects", "contact", "more"],
});

gsap.from(".container", {
  opacity: 0,
  duration: 1,
  y: -50,
  ease: "Power2.easeInOut",
});

// gsap.from()
