import global from "./css/global.module.scss";

import { Rotas } from "./router";
function App() {
  return (
    <main className={global.App}>
      <Rotas />
    </main>
  );
}

export default App;
