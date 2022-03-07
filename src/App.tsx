import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import { Route, Navigate, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import theme from "./config/theme";
import Homepage from "./pages/Homepage";
import Mountains from "./pages/Mountains";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="*" element={<Navigate to="/homepage" />} />
          <Route path="/homepage" element={<Homepage />}></Route>
          <Route path="/mountains" element={<Mountains />}></Route>
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
