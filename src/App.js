import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import General from './components/general';
import {BrowserRouter,Route, Routes} from "react-router-dom";
import { useState } from "react";
import Home from './components/home';
import Footer from "./components/footer";



function App() {
  const [category,setCategory]=useState()
  
  
  
  return (
    <div className="App">
        <BrowserRouter>
        <Navbar setCategory={setCategory}/>
        
       <Routes>
            <Route path="/home"  element={<Home/>}></Route>
            <Route path='/general'  element={<General category={category} />}></Route>
            <Route path='/business' element={<General category={category} />}></Route>
            <Route path='/sports' element={<General category={category} />}></Route>
            <Route path='/entertainment' element={<General category={category} />}></Route>
            <Route path='/health' element={<General category={category} />}></Route>
            <Route path='/science' element={<General category={category} />}></Route>
            <Route path='/technology' element={<General category={category} />}></Route>
      </Routes>
      <Footer/>
  </BrowserRouter>
    
    
    </div>
  );
}

export default App;
