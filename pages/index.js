import Notice from "@/component/Notice";
import Button from "@/component/utils/Button";
import Modal from "@/component/utils/Modal";
import TextInput from "@/component/utils/TextInput";
import { Geist, Geist_Mono } from "next/font/google";
import { useState } from "react";

const geistSans = Geist({
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
});

export default function Home({notes}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <main
        className={`${geistSans.className} min-h-screen bg-linear-to-br from-yellow-100 via-orange-100 to-red-100 p-10`}
      >
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-10 rounded-3xl border-[5px] border-black bg-white p-8 shadow-[10px_10px_0px_#000]">
            <h1 className="text-center text-5xl font-black uppercase tracking-wider">
              📌 Notice Board
            </h1>

            <p
              className={`${geistMono.className} mt-3 text-center text-lg text-zinc-700`}
            >
              Stick your ideas. Organize your chaos.
            </p>
          </div>

          {/* create new button */}
          <div className="text-right">
            <Button onClick={() => setIsModalOpen(true)}>
              New Notice 📃
            </Button>
          </div>

          {/* Board */}
          <section className="rounded-[40px] border-8 border-[#4d2c1d] bg-[#c58c54] p-8 shadow-[16px_16px_0px_#000]">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {notes.map((note) => (
                <Notice note={note} />
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* modal  */}
      {isModalOpen && 
      <Modal setIsOpen={setIsModalOpen}>
        {/* Pin */}
        <div className="absolute left-1/2 top-3 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-black bg-red-500 shadow-lg" />

        <h2 className="mt-6 text-2xl font-black">
          <TextInput placeholder="Note title here..." />
        </h2>

        <p className="mt-6 text-lg leading-7 text-zinc-800">
          {/* Note text */}
          <TextInput placeholder="Note text here..." />
          <TextInput disabled />
          <TextInput disabled />
        </p>

        <div className="absolute flex bottom-4 right-4 text-4xl">
          <Button>Submit</Button>
        </div>
      </Modal>}
    </>
  );
}

export const getStaticProps = () => {
const notes = [
  {
    id: 1,
    title: "🚀 Finish UI",
    text: "Design the dashboard before Friday.",
    color: "bg-yellow-200",
    rotate: "-rotate-3",
  },
  {
    id: 2,
    title: "☕ Coffee Break",
    text: "Remember to stretch and hydrate.",
    color: "bg-pink-200",
    rotate: "rotate-2",
  },
  {
    id: 3,
    title: "📌 Meeting",
    text: "Team sync at 4:00 PM.",
    color: "bg-green-200",
    rotate: "-rotate-2",
  },
  {
    id: 4,
    title: "💡 Idea",
    text: "Comic-themed task manager would look awesome!",
    color: "bg-sky-200",
    rotate: "rotate-3",
  },
];

return {
  props: {
    notes: notes
  }
}
}