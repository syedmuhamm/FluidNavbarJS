const sections = document.querySelectorAll("section");
const bubble = document.querySelector(".bubble");
const gradients = [
  "linear-gradient(to right, #ff9068, #fd746c)",
  "linear-gradient(to right, #d6ae7b, #eacda3)",
  " linear-gradient(to right, #a044ff, #6a3093)",
];

const options = {
  threshold: 0.7,
};

let obeserver = new IntersectionObserver(navCheck, options);

function navCheck(enteries) {
  enteries.forEach((entry) => {
    const className = entry.target.className;
    const activeAnchor = document.querySelector(`[data-page=${className}]`);
    const gradientIndex = entry.target.getAttribute("data-index");
    const cords = activeAnchor.getBoundingClientRect();
    const directions = {
      height: cords.height,
      width: cords.width,
      top: cords.top,
      left: cords.left,
    };

    if (entry.isIntersecting) {
      bubble.style.setProperty("left", `${directions.left}px`);
      bubble.style.setProperty("top", `${directions.top}px`);
      bubble.style.setProperty("width", `${directions.width}px`);
      bubble.style.setProperty("height", `${directions.height}px`);

      bubble.style.background = gradients[gradientIndex];
    }
  });
}

sections.forEach((section) => {
  obeserver.observe(section);
});
