import { Suspense, lazy } from "react";

import { Layout, NavBar } from "../components";

const ClientInfo = lazy(() => import("../components/ClientInfo"));
const Content = lazy(() => import("../components/Home"));

const Home = () => {
  return (
    <Layout>
      <NavBar />
      <Suspense fallback={<h3>Aguarde ...</h3>}>
        <ClientInfo />
        <Content />
      </Suspense>
    </Layout>
  );
};

export default Home;
