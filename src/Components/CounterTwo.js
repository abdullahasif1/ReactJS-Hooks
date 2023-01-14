import React, { useReducer } from "react";

const initialState = {
    firstCounter: 0,
    secondCounter: 10,
};
const reducer = (state, action) => {
    switch (action.type) {
        case "increament":
            return { ...state, firstCounter: state.firstCounter + action.value };
        case "decreament":
            return { ...state, firstCounter: state.firstCounter - action.value };
        case "increament2":
            return { ...state, secondCounter: state.secondCounter + action.value };
        case "decreament2":
            return { ...state, secondCounter: state.secondCounter - action.value };
        case "reset":
            return initialState;
        default:
            return state;
    }
};

function CounterTwo() {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <div>
                <h1>Counter 1 is {count.firstCounter}</h1>
                <button
                    className="btn btn-primary mx-2"
                    onClick={() => dispatch({ type: "increament", value: 1 })}
                >
                    Increament Counter 1
                </button>
                <button
                    className="btn btn-primary mx-2"
                    onClick={() => dispatch({ type: "decreament", value: 1 })}
                >
                    Decreament Counter 1
                </button>
                <button
                    className="btn btn-primary mx-2"
                    onClick={() => dispatch({ type: "increament", value: 5 })}
                >
                    Increament Counter 1 by 5
                </button>
                <button
                    className="btn btn-primary mx-2"
                    onClick={() => dispatch({ type: "decreament", value: 5 })}
                >
                    Decreament Counter 1 by 5{" "}
                </button>
            </div>
            <div>
                <h1>Counter 2 is {count.secondCounter}</h1>
                <button
                    className="btn btn-primary mx-2"
                    onClick={() => dispatch({ type: "increament2", value: 1 })}
                >
                    Increament Counter 2
                </button>
                <button
                    className="btn btn-primary mx-2"
                    onClick={() => dispatch({ type: "decreament2", value: 1 })}
                >
                    Decreament Counter 2
                </button>
            </div>
            <div className="my-3">
                <button
                    className="btn btn-primary mx-2"
                    onClick={() => dispatch({ type: "reset" })}
                >
                    Reset
                </button>
            </div>
        </div>
    );
}

export default CounterTwo;
