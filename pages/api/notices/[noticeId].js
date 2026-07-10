import { notices } from "@/data/notices";

const handler = (req, res) => {
    const { noticeId } = req.query;
    
    if (req.method === 'GET') {
        // find
        const notice = notices.find((notice) => notice.id === parseInt(noticeId));
        // send
        return res.status(200).json({
            success: true,
            data: notice
        })
    }
    else if (req.method === 'DELETE') {

        const leftNotices = notices.filter((notice) => notice.id !== parseInt(noticeId));
        // save
        notices = [...leftNotices];
        
        res.status(201).json({
            success: true,
            message: 'deleted',
            data: notices
        })
    }
}

export default handler;