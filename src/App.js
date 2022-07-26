import React from "react";

import "./App.css";
import StoreApp from "./pages/reduxStore";
import CounterApp from "./pages/counter";
import SagaUsecaseApp from "./pages/sageUsecase";

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
        <Route path="saga_usecase" element={<SagaUsecaseApp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
