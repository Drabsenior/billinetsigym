import About from "./components/About/About";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Landing from "./components/Landing/Landing";
import Pricing from "./components/pricing/Pricing";
import Trainers from "./components/Trainers/Trainers";
import Navbar from "./components/Navbar/Navbar";
import Price from "./pages/Price/Price";
import Gymfeatures from "./pages/Features/Gymfeatures";
import Experttrainers from "./pages/Expert/Experttrainers";

function App() {
  return (
    <div>
      <Navbar />
      <Landing />
      <About />
      <Price />
      <Gymfeatures />
      <Experttrainers />
      <Footer />
    </div>
  );
}

export default App;
