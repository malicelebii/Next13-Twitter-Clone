import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
  { params }: { params: { userId: string } }
) => {
  let user;
  try {
    user = await prisma.user.findUnique({
      where: {
        id: params.userId,
      },
      select: {
        id: true,
        email: true,
        name: true,
        posts: { orderBy: { createdAt: "desc" } },
        followedByIDs: true,
        followingIDs: true,
        profileImgUrl: true,
        commments: true,
        followedBy: true,
        following: true,
      },
    });
  } catch (error) {
    console.log(error);
  }

  return NextResponse.json(user);
};
