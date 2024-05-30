import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function PUT(request: Request,context: { params: { id: string } }) {
    try {
        const data = await request.json();
        const {
            title,
            description,
            wilaya,
            type,
            date_preemption,
            sectors,
        } = data
        const id = parseInt(context.params.id);

        const updateAnnonce = await prisma.annonce.update({
            where: {id},
            data: {
                title: title,
                description: description,
                wilaya : wilaya,
                type :type,
                date_preemption: date_preemption,
                sectors: sectors,
            }
        })
        return NextResponse.json(updateAnnonce); 
    } catch (error) {
        return NextResponse.error();
    }
}

export async function DELETE(request: Request,context: { params: { id: string } }) {
    try {
        const id = parseInt(context.params.id);
        const deleteAnnonce = await prisma.annonce.delete({
            where: {id}
        })
        return NextResponse.json(deleteAnnonce); 
    } catch (error) {
        return NextResponse.error();
    }
}
