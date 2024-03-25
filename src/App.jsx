import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from "./component/Header/Header"; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home/Home";
import NewsLetter from "./component/Home/NewsLetter/NewsLetter";
import Footer from "./component/Footer/Footer";
function App() {
  return (
    <BrowserRouter>
    <Header/>
    
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <NewsLetter/>
      <Footer/>

    </BrowserRouter>
  );
}

export default App;
