import React from 'react'
import Notice from './Notice';
import { fetchNotices } from '@/utils/ApiFunctions';
import useSWR from 'swr';

const BoardSWR = () => {
    // using SWR only to enjoy, web-socket behaviour :}
    const { data, error, isLoading } = useSWR('/notices', fetchNotices);

    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>
    return (
        <section className="rounded-[40px] border-8 border-[#4d2c1d] bg-[#c58c54] p-8 shadow-[16px_16px_0px_#000]">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                { data?.length > 0 ? data.map((note, index) => (
                    <Notice note={note} key={index} />
                ))
                :
                <div className='min-h-60 space-y-2 font-semibold font-serif'> 
                    <h2 className='text-white text-3xl'>No Notices yet!</h2>
                    <div className='text-white text-2xl'>Create your first notice clicking the <span className='text-amber-200'>New Notice</span> button.</div>
                </div>
            }
            </div>
        </section>
    )
}

export default BoardSWR;