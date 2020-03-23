import React, { Suspense } from "react";
import { render } from "react-dom";

const Layout = React.lazy(() => import("./Layout"));

render(
  <Suspense fallback={null}>
    <Layout />
  </Suspense>,
  document.querySelector("main")
);
