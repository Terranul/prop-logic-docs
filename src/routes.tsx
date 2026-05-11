import { Routes, Route } from "react-router-dom";

import Landing from "./landing";
import Display from "./V1.0.0/V1.0.0"
import Eval from "./V1.0.0/EvalDocsV1.0.0";

function Redirection() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/v1.0.0" element={<Display/>} />
      <Route path="/v1.0.0/eval" element={<Eval/>} />
    </Routes>
  );
}

export default Redirection;