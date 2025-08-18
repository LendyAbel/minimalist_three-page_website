import NavbarLayout from "./layout/NavbarLayout";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <div>
      <NavbarLayout>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about-us" element={<AboutUs/>}/>
          <Route path="/contact-us" element={<ContactUs/>}/>
        </Routes>
      </NavbarLayout>
    </div>
  );
}

export default App;
