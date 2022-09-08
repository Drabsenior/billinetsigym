import Home from "./pages/Home/Home";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Pricedetail from "./pages/Pricedetail/Pricedetail";
import ScrollToTop from "./ScrollToTop";
import Coming_soon from "./pages/Coming_soon/Coming_soon";
import { Languagecontext } from "./Contexts/Languagecontext";
import { useState } from "react";
function App() {
  const [language, setLanguage] = useState("english");
  return (
    <div>
      <Languagecontext.Provider value={{ language, setLanguage }}>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/comingsoon" element={<Coming_soon />} />
            <Route path="/pricedetail" element={<Pricedetail />} />
            <Route exact path="/" element={<Home />}></Route>
          </Routes>
        </BrowserRouter>
      </Languagecontext.Provider>
    </div>
  );
}

export default App;
