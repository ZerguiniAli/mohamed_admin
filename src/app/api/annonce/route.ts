import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: Request) {
    try {
        const data = await request.json();
        const {
            title,
            description,
            wilaya,
            type,
            date_preemption,
            sectors,
        } = data;

        // No need to join sectors if it's already a string

        const newAnnonce = await prisma.annonce.createMany({
            data: {
                title: title,
                description: description,
                wilaya: wilaya,
                type: type,
                date_preemption: date_preemption,
                sectors: sectors, // Assuming sectors is already a string
            },
        });

        return NextResponse.json(newAnnonce, { status: 201 });
    } catch (error) {
        console.error("Error creating annonce:", error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function GET() {
    try {
        const announce = await prisma.annonce.findMany({});
        return NextResponse.json(announce);
    } catch (error) {
        return NextResponse.error();
    }
}

