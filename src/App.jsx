import Navbar from "./components/Navbar";
import About from "./pages/About.jsx";
import Cart from "./pages/Cart";
import { useState } from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";

function App() {
  const [Api, SetApi] = useState([]);
  return (
    <>
    <BrowserRouter>
    <Navbar SetApi={SetApi}/>
    <Routes>
      <Route path="/" element={ <Cart Api={Api} SetApi={SetApi}/>} />
      <Route path="/about" element={About} />
      <Route path="*" element={<h1> 404 File not Found</h1>} />
    </Routes>
    </BrowserRouter>
    
     
    </>
  )
}

export default App
