const backgroundOne = document.querySelector(".bg1");
const backgroundTwo = document.querySelector(".bg2");
const backgroundThree = document.querySelector(".bg3");
const headerTitle = document.querySelector(".header--title");
const headerSubtitle = document.querySelector(".header--subtitle");


window.addEventListener("scroll", () => {
   const value = window.scrollY;
   backgroundOne.style.left = `${value*-1.5}px`;
   backgroundTwo.style.top = `${value*-1.3}px`;
   backgroundThree.style.left = `${value*1.5}px`;
   headerTitle.style.left = `${value*1.5}px`;
   headerSubtitle.style.left = `${value*1.5}px`;

});
