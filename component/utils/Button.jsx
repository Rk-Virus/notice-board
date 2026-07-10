import React from 'react'

const Button = ({ onClick, type='button', children }) => {
    return (
        <button
            onClick={onClick}
            type={type}
            className="bg-amber-600 text-lg font-sans text-white p-2.5 py-1.5 rounded-lg mx-5 mb-2 shadow-[4px_4px_0px_#000] hover:shadow-[6px_6px_0px_#000] cursor-pointer">
            {children}
        </button>
    )
}

export default Button