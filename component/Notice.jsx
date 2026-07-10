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
                className={`${note.color} ${note.rotate}
                relative min-h-55
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
                    <Link
                        href={{
                            pathname: `/notice/${note.id}`,
                            // query: note,
                        }}
                    >
                        <div className="opacity-55 hover:opacity-100 hover:cursor-pointer">
                            🔍
                        </div>
                    </Link>
                    <div 
                        onClick={() => setIsEditModal(true)}
                    className="opacity-55 hover:opacity-100 hover:cursor-pointer">
                        ✏️
                    </div>
                    <div
                        onClick={() => setIsDeleteModal(true)}
                        className="opacity-55 hover:opacity-100 hover:cursor-pointer">
                        🗑️
                    </div>
                </div>
            </article>

            {isDeleteModal && <DeleteModal setIsOpen={setIsDeleteModal} />}
            {isEditModal && <NoticeModal setIsOpen={setIsEditModal} note={note} />}
        </>
    )
}

export default Notice