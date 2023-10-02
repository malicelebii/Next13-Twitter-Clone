import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getUserId } from "helpers/user";

export const POST = async (req: NextRequest) => {
  const res = await req.json();

  const userId = await getUserId(req);

  const { followId } = res;

  const user = await prisma?.user.update({
    where: {
      id: userId,
    },
    data: {
      following: {
        connect: { id: followId },
      },
    },
  });

  return NextResponse.json(user);
};
