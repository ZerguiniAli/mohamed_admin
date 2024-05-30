import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
    try {
        const users = await prisma.inscription.findMany({
            select: {
                id: true,
                societe: true,
                Non: true,
                Email: true,
                Telephone: true,
                Region: true,
                Nomutil: true,
                createdAt: true,
                offre: true
            }
        });
        return NextResponse.json(users);
    } catch (error) {
        return NextResponse.error();
    }
}
