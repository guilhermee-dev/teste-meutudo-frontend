import { Routes, Route } from "react-router-dom";

import { Home, PeriodPage, ValuePage, Simulation } from "../pages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/values" element={<ValuePage />} />
      <Route path="/period" element={<PeriodPage />} />
      <Route path="/simulation" element={<Simulation />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;
