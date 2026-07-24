import BoardSWR from "@/component/BoardSWR";
import Button from "@/component/utils/Button";
import NoticeModal from "@/component/NoticeModal";
import { notices } from "@/data/notices";
import { Geist, Geist_Mono } from "next/font/google";
import { useState } from "react";

const geistSans = Geist({
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
});

export default function Home({ notes }) {
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
          <BoardSWR />
        </div>
      </main>

      {/* modal  */}
      {isModalOpen && <NoticeModal setIsOpen={setIsModalOpen} />}
    </>
  );
}

export const getServerSideProps = async () => {
  const notes = notices;

  // const res = await fetch('http://172.20.10.2:3001/api/notices')
  // const notes = res.json()

  return {
    props: {
      notes: notes
    }
  }
}