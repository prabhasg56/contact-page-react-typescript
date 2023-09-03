import { Route, Routes } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import MapAndChart from "./components/MapAndChart";
import ContactPage from "./pages/ContactPage";
import UpdateContact from "./components/UpdateContact";

function App() {
  return (
    <>
      <Sidebar/>
      <Routes>
        <Route path="/contacts" element={<ContactPage />} />
        <Route path="/update-contact/:id" element={<UpdateContact />} />
        <Route path="/map_chart" element={<MapAndChart />} />
      </Routes>
    </>
  );
}

export default App;
