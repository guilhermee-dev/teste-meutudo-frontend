import { Suspense, lazy } from "react";

import { Layout, NavBar } from "../components";

const HeaderTitle = lazy(() => import("../components/HeaderTitle"));
const SimulationEnd = lazy(() => import("../components/SimulationEnd"));

const Simulation = () => {
  return (
    <Layout>
      <NavBar />
      <Suspense fallback={<h3>Aguarde ...</h3>}>
        <HeaderTitle name="Opções" />
        <SimulationEnd />
      </Suspense>
    </Layout>
  );
};

export default Simulation;
