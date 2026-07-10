import { prisma } from '@/lib/prisma';
import { fetchNotice } from '@/utils/ApiFunctions';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'

const NoticePage = ({ note }) => {

    const router = useRouter();

    if (router?.isFallback) return (<h2>Loading...</h2>)

    return (
        <div className='fixed inset-0 flex bg-[#c58c54] justify-center items-center'>
            <article
                key={note?.id}
                className={`${note?.color} bg-amber-100 rotate-${Math.floor(Math.random() * 4) + 1}
                relative min-h-155
                w-240
                mx-10
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

                <h2 className="mt-6 text-2xl font-black">
                    {note?.title}
                </h2>

                {/* Category & Priority */}
                <div className="mt-3 flex items-center gap-2 text-sm font-bold">
                    <span className="rounded-full border-2 border-black bg-white px-3 py-1">
                        {note?.category}
                    </span>

                    <span
                        className={`rounded-full border-2 border-black px-3 py-1 ${note?.priority === "Urgent"
                            ? "bg-red-300"
                            : "bg-green-300"
                            }`}
                    >
                        {note?.priority}
                    </span>
                </div>

                <p className="mt-4 text-lg leading-7 text-zinc-800">
                    {note?.body?.slice(0, 48)} {note?.body?.slice(0, 48) === note?.body?.length && "..."}
                </p>

                {/* Publish Date */}
                <p className="mt-4 text-sm font-semibold text-zinc-700">
                    📅 {new Date(note.publishDate).toISOString().split("T")[0]}
                </p>

                <div className="absolute bottom-4 right-4 flex text-4xl">
                    <Link href={`/`} >
                        <div className="opacity-55 hover:opacity-100 hover:cursor-pointer">
                            🔙
                        </div>
                    </Link>
                </div>
            </article>
        </div>
    )
}

export default NoticePage;

// to tell what can the paths be; pov: no need for SSR
// export const getStaticPaths = () => {
//     return {
//         paths: [
//             {
//                 params: {
//                     noticeId: '1'
//                 }
//             }
//         ],
//         fallback: 'blocking' 
//         // blocking: same as true but no fallback UI // to avoid fast loading flashes
//         // true: show a fallback page (loading), until the new path is created
//         // false: fixed paths (no loading for new notice)
//     }
// }

// SSG * -> getStaticProps
// SSR / -> getServerSideProps
export const getServerSideProps = async (context) => {
    const { params, req, res } = context; // noteId
    const noticeId = params?.noticeId;

    // const notice = await fetchNotice(noticeId) // got error
    // fix
    const notice = await prisma.notice.findUnique({
        where: {
            id: Number(params.noticeId),
        },
    });

    return {
        props: {
            note: JSON.parse(JSON.stringify(notice)),
            noteId: noticeId
        }
    }
}