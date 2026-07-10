// pages/api/notices/index.js

import { prisma } from "@/lib/prisma";

export default async function handler(req, res) {
    switch (req.method) {
        case "GET":
            const notices = await prisma.notice.findMany({
                orderBy: [
                    {
                        priority: "desc"
                    },
                    {
                        createdAt: "desc",
                    }],
            });

            return res.status(200).json(notices);

        case "POST":
            const notice = await prisma.notice.create({
                data: {
                    ...req.body,
                    publishDate: new Date(req.body.publishDate),
                },
            });

            return res.status(201).json(notice);

        default:
            return res.status(405).end();
    }
}