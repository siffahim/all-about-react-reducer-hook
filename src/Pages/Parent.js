import React, { useContext } from 'react';
import Child from './Child';
import { CREATE_CONTEXT } from './Counter';

const Parent = () => {
    const { count } = useContext(CREATE_CONTEXT)

    return (
        <>
            <div className='flex justify-center'>
                <div className="shadow-lg border-4 border-green-100 m-5 w-72 text-center p-2 py-6 rounded-lg">
                    <p>Parent</p>
                    <h1 className='text-lg mb-2'>{count}</h1>
                </div>
            </div>
            <Child />
        </>
    );
};

export default Parent;