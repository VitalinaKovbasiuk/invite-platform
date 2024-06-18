import { prisma } from "@/lib/prismadb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const invite = await prisma.invite.create({
    data: {
      ...body,
      Guests: {
        create: body.guests,
      },
    },
  });

  return NextResponse.json(invite, { status: 201 });
}

export async function GET() {
  const invites = await prisma.invite.findMany({
    include: {
      Guests: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return NextResponse.json(invites);
}
