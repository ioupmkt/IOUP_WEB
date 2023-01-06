import {} from "react";

// Parts Home

import Services from "../parts/Services";
import Sobre from "../parts/About";
import Inicio from "../parts/Home";
import Nos_Move from "../parts/Mission";
import Valores from "../parts/Values";
import Team from "../parts/Team";

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
