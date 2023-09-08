import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {

  const post = await prisma?.post.findUnique({
    where: {
      id: params.id,
    },
  });

  return NextResponse.json(post);
};

export const POST = async (req: NextRequest) => {};
