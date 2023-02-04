import { Route, Routes } from "react-router-dom";
import Footer from "./assets/components/Footer";
import Header from "./assets/components/Header";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import "./assets/css/App.css";
import Article from "./assets/components/Article";

const App = () => {
  return (
    <div className="main" >
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </main>
      
      <Footer/>
    </div>
  );
};

export default App;
