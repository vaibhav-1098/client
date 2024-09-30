import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { decrement, increment, reset } from "../functions/counterSlice";

const CounterComponent = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    const handleReset = () => {
        dispatch(reset());
        toast.warn("counter reset", { autoClose: 1000, hideProgressBar: true });
    };

    return (
        <div className="max-w-md mx-auto p-4 text-center">
            <h1 className="text-3xl  mb-4">Counter: {count}</h1>
            <div className="flex justify-center space-x-4 mb-4">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white p-2 py-1  rounded"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <button
                    className="bg-gray-500 hover:bg-gray-700 text-white p-2 py-1  rounded"
                    onClick={handleReset}
                >
                    Reset
                </button>
                <button
                    className="bg-red-500 hover:bg-red-700 text-white p-2 py-1  rounded"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
            </div>
        </div>
    );
};

export default CounterComponent;
