import React, { useReducer } from 'react';

const LongForm = () => {

    const initialFormState = {
        firstName: "",
        lastName: "",
        email: "",
        gender: "",
        education: "",
        quantity: 0,
        feedback: "",
        term: false,
    }

    const formReducer = (state, action) => {
        switch (action.type) {
            case "INPUT":
                return {
                    ...state,
                    [action.payload.name]: action.payload.value
                }
            case "TOGGLE":
                return {
                    ...state,
                    term: !state.term
                }
            case "INCREMENT":
                return {
                    ...state,
                    quantity: state.quantity + 1
                }
            case "DECREMENT":
                return {
                    ...state,
                    quantity: state.quantity - 1
                }
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(formReducer, initialFormState)

    const formSubmit = e => {
        e.preventDefault()

        console.log(state)
    }

    return (
        <div className='shadow-lg m-5 w-2/4 p-2 py-4 rounded-lg mx-auto'>
            <form className='grid grid-cols-2 gap-2' onSubmit={formSubmit}>
                <div>
                    <label htmlFor="firstName" className='text-gray-500'>FirstName</label>
                    <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        autoComplete='false'
                        className='border p-1 rounded outline-none w-full focus:border-indigo-400'
                        onBlur={(e) => dispatch({ type: "INPUT", payload: { name: e.target.name, value: e.target.value } })}
                    />
                </div>
                <div>
                    <label htmlFor="lastName" className='text-gray-500'>LastName</label>
                    <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        autoComplete='false'
                        className='border p-1 rounded outline-none w-full focus:border-indigo-400'
                        onBlur={(e) => dispatch({ type: "INPUT", payload: { name: e.target.name, value: e.target.value } })}
                    />
                </div>
                <div>
                    <label htmlFor="email" className='text-gray-500'>Email</label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        autoComplete='false'
                        className='border p-1 rounded outline-none w-full focus:border-indigo-400'
                        onBlur={(e) => dispatch({ type: "INPUT", payload: { name: e.target.name, value: e.target.value } })}
                    />
                </div>
                <div>
                    <h1 className='text-gray-500'>Gender</h1>
                    <div className='flex space-x-4'>
                        <div className='space-x-1 text-gray-500'>
                            <input
                                type="radio"
                                name="gender"
                                id="male"
                                value="male"
                                className='w-4 h-4'
                                onClick={(e) => dispatch({ type: "INPUT", payload: { name: e.target.name, value: e.target.value } })} />
                            <label htmlFor="male">Male</label>
                        </div>
                        <div className='space-x-1 text-gray-500'>
                            <input
                                type="radio"
                                name="gender"
                                id="female"
                                value="female"
                                onClick={(e) => dispatch({ type: "INPUT", payload: { name: e.target.name, value: e.target.value } })} />
                            <label htmlFor="female">Female</label>
                        </div>
                        <div className='space-x-1 text-gray-500'>
                            <input
                                type="radio"
                                name="gender"
                                id="others"
                                value="others"
                                onClick={(e) => dispatch({ type: "INPUT", payload: { name: e.target.name, value: e.target.value } })} />
                            <label htmlFor="others">Others</label>
                        </div>
                    </div>
                </div>
                <div>
                    <label htmlFor="education" className='text-gray-500 block'>Education</label>
                    <select
                        className='w-full rounded outline-none border-2 border-slate-200 p-1'
                        name="education"
                        id="education"
                        onChange={(e) => dispatch({ type: "INPUT", payload: { name: e.target.name, value: e.target.value } })}
                    >
                        <option value="GRADUATE">GRADUATE</option>
                        <option value="HSC">HSC</option>
                        <option value="SSC">SSC</option>
                        <option value="JDC">JDC</option>
                        <option value="PSC">PSC</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="education" className='text-gray-500 block'>Number of PC's</label>
                    <div className='flex'>
                        <button
                            className='py-1 px-3 border rounded text-white font-bold bg-indigo-500 '
                            onClick={() => dispatch({ type: "DECREMENT" })}
                        >-</button>
                        <div className='border text-center w-2/4 mx-1 rounded'>
                            <span>{state.quantity}</span>
                        </div>
                        <button className='py-1 px-3 border rounded text-white font-bold bg-indigo-500 '
                            onClick={() => dispatch({ type: "INCREMENT" })}
                        >+</button>
                    </div>
                </div>
                <div>
                    <label htmlFor="feedback" className='text-gray-500 block'>Feedback</label>
                    <textarea
                        className='border w-full rounded'
                        rows='5'
                        name="feedback"
                        id="feedback"
                        onBlur={(e) => dispatch({ type: "INPUT", payload: { name: e.target.name, value: e.target.value } })}
                    >
                    </textarea>
                </div>
                <div className='flex items-end justify-end'>
                    <button
                        type='submit'
                        className='px-4 py-1 border rounded text-white bg-indigo-500 '
                        disabled={!state.term}
                    >Submit</button>
                </div>
                <div className='flex items-center'>
                    <input
                        type="checkbox"
                        name='term'
                        className='w-4 h-4 rounded-lg'
                        id='term'
                        onClick={() => dispatch({ type: "TOGGLE" })}
                    />
                    <label htmlFor="term" className='text-gray-500 ml-1'>I Agree with the term and conditions</label>
                </div>
            </form>
        </div>
    );
};

export default LongForm;