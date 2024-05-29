import React from "react";
import "./styles/App.css";
import { Authorization } from "./pages/Authorization/Authorization";
import { useNavigate, Route, Routes } from "react-router";

import { InfoAboutTable } from "./pages/InfoAboutTable/InfoAboutTable";

function App() {
  const navigate = useNavigate();
  React.useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/auth");
    } else {
      navigate("/info");
    }
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/auth" element={<Authorization></Authorization>}></Route>
        <Route path="/info" element={<InfoAboutTable></InfoAboutTable>}></Route>
      </Routes>
    </div>
  );
}

export default App;
