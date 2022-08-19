import Home from "./pages/Home/Home";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Pricedetail from "./pages/Pricedetail/Pricedetail";
import ScrollToTop from "./ScrollToTop";
import Coming_soon from "./pages/Coming_soon/Coming_soon";
function App() {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/comingsoon" element={<Coming_soon />} />
          <Route path="/pricedetail" element={<Pricedetail />} />
          <Route exact path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
