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
            document  // Change this to match the key used in the frontend
        } = data;


        const newAnnonce = await prisma.b2b.create({
            data: {
                title: title,
                description: description,
                wilaya : wilaya,
                sectors : sectors,
                Contact : Contact,
                document : document,  // Use the decoded document value
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
        const announce = await prisma.b2b.findMany();
        return NextResponse.json(announce);
    } catch (error) {
        console.error("Error fetching annonces:", error);
        return NextResponse.error();
    }
}
