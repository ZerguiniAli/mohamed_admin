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
        } = data

        const newB2bService = await prisma.annonce.create({
            data: {
                title,
                description,
                wilaya,
                type,
                date_preemption,
                sectors
            },
        });

        return NextResponse.json(newB2bService, { status: 201 });
    } catch (error) {
        console.error("Error creating b2b service:", error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function GET() {
    try {
        const b2bServices = await prisma.annonce.findMany();
        return NextResponse.json(b2bServices);
    } catch (error) {
        console.error("Error fetching b2b services:", error);
        return NextResponse.error();
    }
}
