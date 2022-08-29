import React from "react";
import Home from "./pages/Home"
import Contact from "./pages/Contact";
import {Routes, Route} from 'react-router-dom'


const App = () => {
  return (
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/contact" element={<Contact/>}/>
</Routes>    


  );
}



export default App;
