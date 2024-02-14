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
const hero = document.querySelector(".hero-me");
const link = document.querySelectorAll(".link");

// cursor
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => { 
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
})

// link hover
link.forEach((link) => {
  link.addEventListener("mouseover", (e) => { 
    cursor.classList.add("cursor-grow");
    link.style.color = "white"
  })

  link.addEventListener("mouseleave", (e) => {
    cursor.classList.remove("cursor-grow");
    link.style.color = "black";
  });
}) 


hero.addEventListener("mouseover", () => {
  cursor.style.filter = "grayscale(0%)";
   cursor.style.transform = "scale(1.5)";
})


menu.addEventListener("click", () => {
  console.log("clicked");
  top.classList.toggle("top-active");
  middel.classList.toggle("middel-active");
  bottom.classList.toggle("bottom-active");
});
