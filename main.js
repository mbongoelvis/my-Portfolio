const lenis = new Lenis();

lenis.on("scroll", (e) => {
  // console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const menu = document.querySelector(".menu-btn");
const top = document.querySelector(".top");
const middel = document.querySelector(".middel");
const bottom = document.querySelector(".bottom");

menu.addEventListener("click", () => {
  top.classList.toggle("top-active");
  middel.classList.toggle("middel-active");
  bottom.classList.toggle("bottom-active");
});
