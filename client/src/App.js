import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import "./App.css";

import SignInOutContainer from "./containers";
import PageUser from "./pages/pageUser";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInOutContainer />}></Route>
          <Route path="/menu" element={<PageUser />}></Route>
          {/* aqui van las otras rutas */}
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
