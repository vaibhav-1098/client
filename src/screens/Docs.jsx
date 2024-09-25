import React from "react";
import { useSelector } from "react-redux";
import useDocumentTitle from "../hooks/useDocumentTitle";

const Docs = () => {
    useDocumentTitle("Documentation");
    const count = useSelector((state) => state.counter.value);

    return (
        <>
            <img src="/images/react.svg" alt="logo" className="mx-auto block m-5 h-40" />
            <p className="text-center">Value of count is {count}</p>
        </>
    );
};

export default Docs;
