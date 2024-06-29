import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Me from "./pages/Me";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Navbar from "./pages/Navbar";
import "./pages/styles.css";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Me />}></Route>
          <Route path="About" element={<About />}></Route>
          <Route path="Experience" element={<Experience />}></Route>
          <Route path="Projects" element={<Projects />}></Route>
          <Route path="Contact" element={<Contact />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
