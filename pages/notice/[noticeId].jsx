import Link from 'next/link';
import React from 'react'

const NoticePage = () => {
    const note = {
        id: 1,
        title: "🚀 Finish UI",
        text: "Design the dashboard before Friday.",
        color: "bg-yellow-200",
        rotate: "-rotate-1",
    }
    return (
        <div className='fixed inset-0 flex bg-[#c58c54] justify-center items-center'>
            <article
                key={note.id}
                className={`${note.color} ${note.rotate}
                relative min-h-155
                w-240
                rounded-xl
                border-4
                border-black
                p-6
                shadow-[8px_8px_0px_#000]
                transition-all
                duration-300
                hover:rotate-0
                hover:-translate-y-2
                hover:shadow-[14px_14px_0px_#000]
              `}
            >
                {/* Pin */}
                <div className="absolute left-1/2 top-3 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-black bg-red-500 shadow-lg" />
                {/* <div className="absolute left-1/2 top-3 -translate-x-1/2" >
                📌
            </div> */}

                <h2 className="mt-6 text-2xl font-black">
                    {note.title}
                </h2>

                <p className="mt-4 text-lg leading-7 text-zinc-800">
                    {note.text}
                </p>

                <div className="absolute flex bottom-4 right-4 text-4xl">
                    <Link href={`/`} >
                        <div className="opacity-55 hover:opacity-100 hover:cursor-pointer">
                            🔙
                        </div>
                    </Link>
                    <div className="opacity-55 hover:opacity-100 hover:cursor-pointer">
                        ✏️
                    </div>
                    <div className="opacity-55 hover:opacity-100 hover:cursor-pointer">
                        🗑️
                    </div>
                </div>
            </article>
        </div>
    )
}

export default NoticePage;