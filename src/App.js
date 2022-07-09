import "./App.sass";
import Home from './components/pages/Home/Home';
import {  BrowserRouter, Routes, Route } from "react-router-dom";
import TopBar from "./components/ui/organisms/TopBar/TopBar";
import Header from "./components/ui/organisms/Header/Header";
import Footer from "./components/ui/organisms/Footer/Footer";

function App() 
{
  return (
    <BrowserRouter>
      <TopBar/>
      <Header/>
      
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </BrowserRouter>    
  );
}

export default App;
