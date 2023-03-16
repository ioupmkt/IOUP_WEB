import "./css/global.module.scss";

import { Rotas } from "./router";
function App() {
  window.addEventListener("load", () => {
    const observer = new IntersectionObserver((entries) => {
      // console.log(entries);
      Array.from(entries).forEach((entry) => {
        // console.log(entry.target);
        if (entry.isIntersecting) {
          entry.target.setAttribute("data-animate", "animate");
        }
        // else {
        //   entry.target.setAttribute("data-animate", "not-animate");
        // }
      }),
        { root: null, rootMargin: "0px", threshold: [0, 0.5, 1] };
    });
    Array.from(document.querySelectorAll("section")).forEach((element) => {
      observer.observe(element);
    });
  });
  return (
    <main>
      <Rotas />
    </main>
  );
}

export default App;
