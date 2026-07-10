import { notices } from "@/data/notices";

const handler = (req, res) => {
    if (req.method === 'GET') {
        return res.status(200).json({
            success: true,
            data: notices
        })
    } 
    else if(req.method === 'POST') {
        const {title, desc, id} = req.body;
        const newNotice = {
            id,
            title,
            desc
        }
        // save
        notices.push(newNotice);
        res.status(201).json({
            success: true,
            message: 'created',
            data: newNotice
        })
    }
}

export default handler;