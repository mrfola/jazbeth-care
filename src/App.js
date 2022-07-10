
import {  BrowserRouter, Routes, Route } from "react-router-dom";
import TopBar from "./components/ui/organisms/TopBar/TopBar";
import Header from "./components/ui/organisms/Header/Header";
import Footer from "./components/ui/organisms/Footer/Footer";
import Services from './components/pages/Services/Services';
import About from './components/pages/About/About';
import Home from './components/pages/Home/Home';
import Contact from './components/pages/Contact/Contact';
import "./App.sass";

function App() 
{
  return (
    <BrowserRouter>
      <TopBar/>
      <Header/>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>    
  );
}

export default App;
