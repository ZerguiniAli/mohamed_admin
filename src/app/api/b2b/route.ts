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
            sectors,
            Contact,
            document
        } = data;

        // No need to join sectors if it's already a string

        const newAnnonce = await prisma.b2bservice.createMany({
            data: {
                title: title,
                description: description,
                wilaya : wilaya ,
                sectors: sectors,
                Contact : Contact ,
                document: document,
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

