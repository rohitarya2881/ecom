import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from "./component/Header/Header"; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home/Home";
function App() {
  return (
    <BrowserRouter>
    <Header/>
    
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
