import Home from "./pages/Home/Home";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Pricedetail from "./pages/Pricedetail/Pricedetail";
import ScrollToTop from "./ScrollToTop";
function App() {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/pricedetail" element={<Pricedetail />} />
          <Route exact path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
