import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function PUT(request: Request,context: { params: { id: string } }) {
    try {
        const data = await request.json();
        const {offre} = data
        const id = parseInt(context.params.id);

        const updateUser = await prisma.inscription.update({
            where: {id},
            data: {offre:offre}
        })
        return NextResponse.json(updateUser); 
    } catch (error) {
        return NextResponse.error();
    }
}

export async function DELETE(request: Request,context: { params: { id: string } }) {
    try {
        const id = parseInt(context.params.id);
        const deleteUser = await prisma.inscription.delete({
            where: {id}
        })
        return NextResponse.json(deleteUser); 
    } catch (error) {
        return NextResponse.error();
    }
}
