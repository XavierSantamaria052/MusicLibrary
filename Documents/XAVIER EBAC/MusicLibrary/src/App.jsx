import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SongDetail from "./pages/SongDetail";
import "./App.css";
    
    function App() {
    return (
        <BrowserRouter>
        <div className="app">
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/song/:id" element={<SongDetail />} />
            </Routes>
        </div>
        </BrowserRouter>
    );
    }
    
export default App;