// document.addEventListener("DOMContentLoaded", function () {
//     const sections = document.querySelectorAll(".section");

//     sections.forEach((section) => {
//         section.style.height = window.innerHeight + "px";
//     });

//     const links = document.querySelectorAll(".header");

//     links.forEach((link) => {
//         link.addEventListener("click", (e) => {
//             e.preventDefault();
//             const targetId = link.getAttribute("href").substring(1);
//             const targetSection = document.getElementById(targetId);
//             window.scrollTo({
//                 top: targetSection.offsetTop,
//                 behavior: "smooth"
//             });
//         });
//     });
// });
