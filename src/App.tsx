import "./css/global.module.scss";

import Rotas from "./router";
function App() {
  window.addEventListener("load", () => {
    const observer = new IntersectionObserver((entries) => {
      console.log(entries);
      Array.from(entries).forEach((entry) => {
        // console.log(entry.target);
        if (entry.isIntersecting) {
          if (entry.target.id == "home") {
            entry.target.children[0].children[0].children[2].setAttribute(
              "data-animate",
              "slide"
            );
            entry.target.children[1].setAttribute("data-animate", "slide");
          }
          // if (entry.target.id == "about") {
          //   entry.target.children[0].setAttribute("data-animate", "slide");
          // }
          if (entry.target.id == "values") {
            entry.target.setAttribute("data-animate", "slide2");
          }
          // if (entry.target.id == "services") {
          //   entry.target.children[0].children[0].setAttribute(
          //     "data-animate",
          //     "grow"
          //   );
          // }
          if (entry.target.id == "team") {
            entry.target.children[0].setAttribute("data-animate", "grow");
          }
        }
        // else {
        //   entry.target.setAttribute("data-animate", "not-animate");
        // }
      }),
        { root: "main", rootMargin: "0px", threshold: [0, 0.5, 1] };
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
