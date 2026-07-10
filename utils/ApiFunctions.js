// todo: setup axios

import { notices } from "@/data/notices"


export const fetchNotices = () => {
    try {
        return notices;
    } catch (error) {
        
    }
}