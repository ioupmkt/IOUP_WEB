import { Routes, Route, createBrowserRouter } from "react-router-dom";

import "./css/global.module.scss";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";

const routes = createBrowserRouter([
  {
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
    ],
  },
]);

// function Rotas() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/portfolio" element={<Portfolio />} />
//     </Routes>
//   );
// }
export { routes };
