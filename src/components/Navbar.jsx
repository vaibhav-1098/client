import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const activeStyling = {
        color: "yellow",
    };

    return (
        <nav className="flex justify-center items-center bg-blue-600 text-white p-2 gap-5">
            <NavLink to="/" style={({ isActive }) => (isActive ? activeStyling : {})}>
                Home
            </NavLink>
            <NavLink to="/docs" style={({ isActive }) => (isActive ? activeStyling : {})}>
                Docs
            </NavLink>
        </nav>
    );
};

export default Navbar;
