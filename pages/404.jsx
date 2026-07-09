import Link from 'next/link';
import React from 'react'

const NotFound = () => {
    return (
        <div className='fixed inset-0 flex bg-[#c58c54] justify-center items-center'>
            <div
                className={`
                relative h-155
                w-240
                rounded-xl
                border-4
                border-black
                p-6
                shadow-[8px_8px_0px_#000]
                transition-all
                duration-300
                hover:rotate-0
                hover:-translate-y-1
                hover:shadow-[14px_14px_0px_#000]
              `}
            >

                <div className='h-full flex p-24'>
                    <h2 className="mt-6 text-3xl font-black">
                    Sorry, notice not found!
                </h2>
                </div>

                <div className="absolute flex bottom-4 right-4 text-4xl">
                    <Link href={`/`} >
                        <div className="opacity-75 hover:opacity-100 hover:cursor-pointer">
                            🔙
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NotFound;