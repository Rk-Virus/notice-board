import { prisma } from "@/lib/prisma";

export default async function handler(req, res) {
    const id = Number(req.query.id);

    switch (req.method) {
        case "GET":
            return res.json(
                await prisma.notice.findUnique({
                    where: { id },
                })
            );

        case "PUT":
            return res.json(
                await prisma.notice.update({
                    where: { id },
                    data: {
                        ...req.body,
                        publishDate: new Date(req.body.publishDate),
                    },
                })
            );

        case "DELETE":
            await prisma.notice.delete({
                where: { id },
            });

            return res.json({
                success: true,
            });

        default:
            return res.status(405).end();
    }
}