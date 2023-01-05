import {} from "react";

// Parts Home
import Portfolio from "../parts/Portfolio";
import Services from "../parts/Services";
import Sobre from "../parts/About";
import Inicio from "../parts/Home";
import Nos_Move from "../parts/Mission";
import Valores from "../parts/Values";

function Home() {
  return (
    <>
      <Inicio />

      <Sobre />
      <Nos_Move />
      <Valores />
      <Services/>
      {/* <Portfolio/> */}
    </>
  );
}

export default Home;
