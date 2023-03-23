import React from "react";
import ReactDOM from "react-dom/client";

import global from "./css/global.module.scss";
import Header from "./components/Header";
import App from "./App";
import Footer from "./components/Footer";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./router";

// ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
//   <React.StrictMode>
//     <Header />
//     <App />
//     <Footer />
//   </React.StrictMode>
// );
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <Header />

    <RouterProvider router={routes} />

    <Footer />
  </>
);
