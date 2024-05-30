import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function PUT(request: Request, context: { params: { id: string } }) {
    try {
        const data = await request.json();
        const {
            title,
            description,
            wilaya,
            sectors,
            Contact,
            document
        } = data;
        const id = parseInt(context.params.id);

        const updateB2bService = await prisma.b2b.update({
            where: { id },
            data: {
                title,
                description,
                wilaya,
                sectors,
                Contact,
                document,
            }
        });
        return NextResponse.json(updateB2bService);
    } catch (error) {
        console.error("Error updating B2b service:", error);
        return NextResponse.error();
    }
}

export async function DELETE(request: Request, context: { params: { id: string } }) {
    try {
        const id = parseInt(context.params.id);
        const deleteB2bService = await prisma.b2b.delete({
            where: { id }
        });
        return NextResponse.json(deleteB2bService);
    } catch (error) {
        console.error("Error deleting B2b service:", error);
        return NextResponse.error();
    }
}
