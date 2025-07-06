import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CharacterDetails from "./pages/CharacterDetail";
import ThemeProvider from "./context/ThemeContext";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/character/:id" element={<CharacterDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}
