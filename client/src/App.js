import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome.jsx";
import Home from "./pages/Home.jsx";
import CountryDetail from "./components/CountryDetail.jsx";
import { useDispatch } from "react-redux";
import { get_countries } from "./redux/actions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(get_countries());
    }, 3000);
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Welcome />} />
        <Route exact path="/home" element={<Home />} />
        <Route path="/country/:id" element={<CountryDetail />} />
      </Routes>
    </>
  );
}

export default App;
