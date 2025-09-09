// Global variable
let animationSpeed = 1000;

// Function with parameters and return value
function calculateDelay(base, multiplier) {
  return base * multiplier;
}

// Local scope example
function triggerFadeIn(elementId) {
  let el = document.getElementById(elementId); // local variable
  el.classList.add("fade-in");
}

// Reusable logic
function animateBox(boxId, animationClass) {
  const box = document.getElementById(boxId);
  box.classList.add(animationClass);
}
