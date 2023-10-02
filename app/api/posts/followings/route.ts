import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { getUserId } from "helpers/user";

export const GET = async (req: NextRequest) => {
  const userId = await getUserId(req);

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

  posts.sort((a,b)=>b.createdAt-a.createdAt);

  return NextResponse.json({ posts });
};
