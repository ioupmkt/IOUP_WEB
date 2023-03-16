import { useRef, useState } from "react";

// Parts Home

import Services from "../parts/Services";
import Sobre from "../parts/About";
import Inicio from "../parts/Home";
import Nos_Move from "../parts/Mission";
import Valores from "../parts/Values";
import Team from "../parts/Team";

// const site = document.querySelectorAll("section");
// const positions: any = [];
// site.forEach((el) => {
//   let c = el.offsetTop;
//   let d = el;
//   positions.push({ c, d });
//   console.log(positions);
//   let scroll = window.scrollY;
//   document.addEventListener("scroll", () => {
//     // el.classList.add("animate");
//     console.log(positions);
//     // console.log(`ScrollPos:${scroll}`);
//     positions.forEach((elem: any, i: any) => {
//       if (scroll <= i.c) {
//         // console.log(elem.d);
//         elem[i].d.setAttribute("data-animate", "animate");
//       } else {
//         elem.d.setAttribute("data-animate", "not-animate");
//       }
//     });
//   });

//   // console.log(site);
// });
// window.addEventListener("load", () => {
//   const observer = new IntersectionObserver((entries) => {
//     // console.log(entries);
//     Array.from(entries).forEach((entry) => {
//       // console.log(entry.target);
//       if (entry.isIntersecting) {
//         entry.target.setAttribute("data-animate", "animate");
//       }
//       // else {
//       //   entry.target.setAttribute("data-animate", "not-animate");
//       // }
//     }),
//       { root: null, rootMargin: "0px", threshold: [0] };
//   });
//   Array.from(document.querySelectorAll("section")).forEach((element) => {
//     observer.observe(element);
//   });
// });

function Home() {
  return (
    <>
      <Inicio />
      <Sobre />
      <Nos_Move />
      <Valores />
      <Services />
      <Team />
    </>
  );
}

export default Home;
