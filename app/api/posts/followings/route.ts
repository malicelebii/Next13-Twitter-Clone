import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { getToken } from "next-auth/jwt";

export const GET = async (req: NextRequest) => {

  
  const payload = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  // console.log(payload);

  const userId = payload?.sub;

  let posts = await prisma.post.findMany({
    where: { userId: userId },
  });

  let user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  let followings = await user?.followingIDs.map((following) => following);

  if (followings) {
    const followingPosts = await Promise.all(
      followings.map(async (followingUserId) => {
        const posts = await prisma.post.findMany({
          where: { userId: followingUserId },
        });
        return posts;
      })
    );
    //burası arıza çıkarablilir
    posts = [...posts, ...followingPosts.flat()];
  }


  return NextResponse.json({ posts });

};
