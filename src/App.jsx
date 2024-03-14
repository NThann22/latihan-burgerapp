import {
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Navbar from "./components/navbar";
import Order from "./pages/order";
import About from "./pages/about";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </div>
  );
}

export default App;