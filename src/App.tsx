import React from "react";
import Sidebar from "./components/Sidebar";
import MapAndChart from "./components/MapAndChart";
import { Route, Routes } from "react-router-dom";
import Contacts from "./components/Contacts";

function App() {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/contacts" element={< Contacts/>} />
        <Route path="/map_chart" element={<MapAndChart/>}/>
      </Routes>
    </>
  );
}

export default App;
