import React from 'react'
import Modal from './utils/Modal'
import TextInput from './utils/TextInput'
import Button from './utils/Button'

const DeleteModal = ({setIsOpen}) => {
  return (
    <Modal setIsOpen={setIsOpen}>
                    {/* Pin */}
                    <div className="absolute left-1/2 top-3 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-black bg-red-500 shadow-lg" />

                    <h2 className="mt-6 text-2xl font-black space-y-4">
                        <TextInput placeholder="Are you sure you want to Delete" disabled />
                        <TextInput placeholder="This Notice??" disabled />
                    </h2>

                    <p className="mt-2 text-lg leading-7 text-zinc-800">
                        {/* Note text */}
                        <TextInput disabled />
                        <TextInput disabled />
                    </p>

                    <div className="absolute flex bottom-4 right-4 text-4xl -space-x-2!">
                        <Button onClick={() => setIsOpen(false)}>No 🙂‍↔️</Button>
                        <Button>Yes 🚮</Button>
                    </div>
                </Modal>
  )
}

export default DeleteModal