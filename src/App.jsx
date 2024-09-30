import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import Docs from "./screens/Docs";
import Home from "./screens/Home";

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/docs" element={<Docs />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <ToastContainer />
        </Router>
    );
};

export default App;
