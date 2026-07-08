import React from 'react'

const TextInput = ({ label, type = 'text', style, ...props }) => {
    const id = String(Math.random())
    return (
        <div>
            {label && <label htmlFor={id}></label>}
            <input
                id={id}
                type={type}
                className={`border-b border-gray-500 outline-none w-full ${style}`}
                {...props}
            />
        </div>
    )
}

export default TextInput;