import { RouterProvider } from "react-router-dom";
import "./css/global.module.scss";

import { routes } from "./router";
function App() {
  return (
    <main>
      <RouterProvider router={routes} />
    </main>
  );
}

export default App;
