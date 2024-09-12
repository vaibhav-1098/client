import React from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";

const Home = () => {
    useDocumentTitle("Home");

    return (
        <>
            <h1 className="text-center m-3 font-semibold text-4xl">
                Welcome <i className="bi bi-android text-emerald-500"></i>
            </h1>
        </>
    );
};

export default Home;
