import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export const POST = async (req: NextRequest) => {
    
  const res = await req.json();

  const { userId, followerId } = res;

  const user = await prisma?.user.update({
    where: {
      id: userId,
    },
    data: {
      followedBy: {
        connect: { id: followerId },
      },
    },
  });



  return NextResponse.json(user)
};
