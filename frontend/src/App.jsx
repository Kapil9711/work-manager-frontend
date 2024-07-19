// import { useEffect, useRef } from "react";
// import API from "./services/API";
// import Register from "./components/auth/Register";
import AuthPage from "./page/AuthPage";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./page/LandingPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
      <Route path="/auth" element={<AuthPage />}></Route>
    </Routes>
  );
}

export default App;
