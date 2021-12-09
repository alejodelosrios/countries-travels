import { Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome.jsx";
import Home from "./pages/Home.jsx";
import CountryDetail from "./components/CountryDetail.jsx";

function App() {
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
