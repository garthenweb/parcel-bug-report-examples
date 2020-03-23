import React from "react";

const Page1 = React.lazy(() => import("./Page1"));
const Page2 = React.lazy(() => import("./Page2"));

const Layout = () => (
  <div>
    <Page1 />
    <Page2 />
  </div>
);

export default Layout;
