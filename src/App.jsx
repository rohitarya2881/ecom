import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from "./component/Header/Header"; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home/Home";
import About from "./component/About/About";

import NewsLetter from "./component/Home/NewsLetter/NewsLetter";
import Footer from "./component/Footer/Footer";
import Contact from "./component/Contact/Contact";
import AllProducts from "./component/Products/AllProducts/AllProducts";
import Singleproduct from "./component/Products/SingleProduct/Singleproduct";
function App() {
  
  return (
    <BrowserRouter>
    <Header/>
    <Singleproduct/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/products" element={<AllProducts/>} />

      </Routes>
      <NewsLetter/>
      <Footer/>

    </BrowserRouter>
  );
}

export default App;
