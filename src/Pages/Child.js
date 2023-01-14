import React, { useContext } from 'react';
import { CREATE_CONTEXT } from './Counter';


const Child = () => {
    const { count, setCount } = useContext(CREATE_CONTEXT)
    return (
        <div className='flex  justify-center'>
            <div className="shadow-lg border-4 border-green-100 m-5 w-72 text-center p-2 py-4 rounded-lg">
                <p>Child</p>
                <h1 className='text-lg mb-2'>{count}</h1>
                <button
                    onClick={() => setCount(count - 1)}
                    className='border px-2 py-1 mr-2 rounded bg-violet-500 text-white uppercase'
                >
                    Decrement
                </button>
                <button
                    onClick={() => setCount(prvState => prvState + 1)}
                    className='border px-2 py-1 mr-2 rounded bg-green-500 text-white uppercase'
                >
                    Increment
                </button>
            </div>
        </div>
    );
};

export default Child;