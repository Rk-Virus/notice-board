import Link from 'next/link'
import React, { useState } from 'react'
import TextInput from './utils/TextInput';
import Button from './utils/Button';
import Modal from './utils/Modal';
import DeleteModal from './DeleteModal';
import NoticeModal from './NoticeModal';

const Notice = ({ note }) => {
    const [isDeleteModal, setIsDeleteModal] = useState(false);
    const [isEditModal, setIsEditModal] = useState(false);
    return (
        <>
            <article
                key={note.id}
                className={`${note?.color} bg-amber-100 rotate-${Math.floor(Math.random() * 4) + 1}
                relative min-h-55 rounded-xl border-4 border-black p-6
                shadow-[8px_8px_0px_#000] transition-all duration-300
                hover:rotate-0 hover:-translate-y-2
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

                <div className="flex justify-end flex text-4xl">
                    <Link href={`/notice/${note?.id}`}>
                        <div className="opacity-55 hover:cursor-pointer hover:opacity-100">
                            🔍
                        </div>
                    </Link>

                    <div
                        onClick={() => setIsEditModal(true)}
                        className="opacity-55 hover:cursor-pointer hover:opacity-100"
                    >
                        ✏️
                    </div>

                    <div
                        onClick={() => setIsDeleteModal(true)}
                        className="opacity-55 hover:cursor-pointer hover:opacity-100"
                    >
                        🗑️
                    </div>
                </div>
            </article>

            {isDeleteModal && <DeleteModal setIsOpen={setIsDeleteModal} noteId={note?.id} />}
            {isEditModal && <NoticeModal setIsOpen={setIsEditModal} note={note} />}
        </>
    )
}

export default Notice