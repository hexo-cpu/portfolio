// import React from "react";
// import Header from "../src/MyJsx/Header";
// import { Outlet } from "react-router-dom";
// import Footer from "./MyJsx/Footer";

//  function Layout() {
//   return (
//     <>
//       <Header />
//       <main>
//         <Outlet />
//       </main>
      
//     </>
//   );
// }
// export default Layout
// src/Layout.jsx
import React from "react";
import Header from "./MyJsx/Header";
import Footer from "./MyJsx/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer /> 
    </>
  );
}

export default Layout;
