import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Layout from "./Layout";
import Me from "./MyJsx/Me";
import Boxes from "./MyJsx/Boxes";
import Lab from "./MyJsx/Lab";
import SecondLab from "./MyJsx/SecondLab";
import Design from "./MyJsx/Design";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <>
              <Me />
              <Boxes />
              <Design/>
              <Lab/>
              {/* <SecondLab/> */}
            </>
          }
        />

        
        <Route path="about" element={<Me />} />
        <Route path="boxes" element={<Boxes />} />
        <Route path="lab" element={<Lab/>} />
        
      </Route>
    </Routes>
  );
}

export default App;
