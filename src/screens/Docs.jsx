import React from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";

const Docs = () => {
    useDocumentTitle("Documentation");

    return (
        <div>
            <img src="/images/react.svg" alt="logo" className="mx-auto block m-5 h-40" />
        </div>
    );
};

export default Docs;
