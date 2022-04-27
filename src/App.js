
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Articles } from "./pages/Articles";
import { Home } from "./pages/Home";


function App() {
  return (
    <div >
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/article" element={<Articles/>}/>
      </Routes>
      
      
    </div>
  );
}

export default App;
