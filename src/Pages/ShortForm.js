import React, { useState } from 'react';

const ShortForm = () => {
    const [formData, setFormData] = useState({});

    const handleOnBlur = e => {
        const name = e.target.name;
        const value = e.target.value;

        const newFormData = { ...formData }
        newFormData[name] = value
        setFormData(newFormData)
    }

    const handleFormSubmit = e => {
        e.preventDefault()

        console.log(formData)
    }

    return (
        <div className='shadow-lg border-4 border-green-100 m-5 w-72 p-2 py-4 rounded-lg mx-auto'>
            <form className='space-y-3' onSubmit={handleFormSubmit}>
                <div>
                    <label htmlFor="firstName" className='text-gray-500'>Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        autoComplete='false'
                        className='border p-1 rounded outline-none w-full focus:border-green-400'
                        onBlur={handleOnBlur}
                    />
                </div>
                <div>
                    <label htmlFor="email" className='text-gray-500'>Email</label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        autoComplete='false'
                        className='border p-1 rounded outline-none w-full focus:border-green-400'
                        onBlur={handleOnBlur}
                    />
                </div>
                <div>
                    <label htmlFor="password" className='text-gray-500'>Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        autoComplete='false'
                        className='border p-1 rounded outline-none w-full focus:border-green-400'
                        onBlur={handleOnBlur}
                    />
                </div>
                <button
                    type='submit'
                    className='bg-green-400 uppercase px-2 text-white py-1 rounded'
                >
                    submit
                </button>
            </form>
        </div>
    );
};

export default ShortForm;