import React, { useReducer } from 'react';

const CounterReducer = () => {

    const initialState = {
        users: [],
        count: 0,
        active: true,
    };

    const counterReducer = (state, action) => {
        switch (action.type) {
            case "INCREMENT":
                return {
                    ...state,
                    count: state.count + action.payload.count
                }
            case "DECREMENT":
                return {
                    ...state,
                    count: state.count - action.payload.count
                }
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(counterReducer, initialState)

    return (
        <div className='flex  justify-center'>
            <div className="shadow-lg border-4 border-green-100 m-5 w-80 text-center p-2 py-4 rounded-lg">
                <h1 className='text-lg mb-2'>{state.count}</h1>
                <button
                    className='border px-2 py-1 mr-2 rounded bg-violet-500 text-white uppercase active:bg-violet-400'
                    onClick={() => dispatch({ type: "DECREMENT", payload: { count: 5 } })}
                >
                    Decrement
                </button>
                <button
                    className='border px-2 py-1 mr-2 rounded bg-green-500 text-white uppercase active:bg-green-400'
                    onClick={() => dispatch({ type: "INCREMENT", payload: { count: 5 } })}
                >
                    Increment
                </button>
            </div>
        </div>
    );
};

export default CounterReducer;