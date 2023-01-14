import React, { createContext, useState } from 'react';
import Parent from './Parent';
export const CREATE_CONTEXT = createContext()

const Counter = () => {
    const [count, setCount] = useState(0)

    const value = { count, setCount }
    return (
        <CREATE_CONTEXT.Provider value={value}>
            <Parent />
        </CREATE_CONTEXT.Provider>

    )
};

export default Counter;