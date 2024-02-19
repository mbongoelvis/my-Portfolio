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
const userDate = document.querySelector(".time")
const dropdown = document.querySelector(".drop-down");
const mobileLink = document.querySelectorAll(".mobile-link");

// cursor
const cursor = document.querySelector(".cursor");

// getting user data
let date = new Date();
userDate.innerHTML =
  date.getHours() > 12
    ? date.getHours() + ":" + date.getMinutes() + " " + "PM"
    : date.getHours() + ":" + date.getMinutes() + " " + "AM";

console.log(date.getHours() + ":" + date.getMinutes())

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
  dropdown.classList.toggle("mobile-drop");
  middel.classList.toggle("middel-active");
  bottom.classList.toggle("bottom-active");
});

// mobile link clicks
mobileLink.forEach((mobile) => {
  mobile.addEventListener("click", () => {
    top.classList.toggle("top-active");
    dropdown.classList.toggle("mobile-drop");
    middel.classList.toggle("middel-active");
    bottom.classList.toggle("bottom-active");
  })
})