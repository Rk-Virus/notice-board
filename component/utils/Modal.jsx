import React from 'react'

const Modal = ({ isOpen, setIsOpen, children }) => {
    return (
        <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-50 bg-black/10 flex justify-center items-center">
            <div
                // key={note.id}
                className={`bg-white
                relative min-h-55
                px-8
                rounded-xl
                border-4
                border-black
                p-6
                mx-6
                shadow-[8px_8px_0px_#000]
                transition-all
                duration-300
                hover:shadow-[12px_12px_0px_#000]
                w-2xl
              `}
              onClick={e => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    )
}

export default Modal