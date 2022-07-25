import React from "react";

import "./App.css";
import StoreApp from "./pages/reduxStore";
import CounterApp from "./pages/counter";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <StoreApp />
            </div>
          }
        ></Route>
        <Route path="counter" element={<CounterApp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
