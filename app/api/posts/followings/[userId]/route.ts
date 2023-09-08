import prisma from "@/lib/prisma";
import { Post } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
  { params }: { params: { userId: string } }
) => {
  let posts = await prisma.post.findMany({
    where: { userId: params.userId },
  });

  let user = await prisma.user.findUnique({
    where: {
      id: params.userId,
    },
  });

  let followings = await user?.followingIDs.map((following) => following);

  const followingPosts = await Promise.all(
    followings.map(async (followingUserId) => {
      const posts = await prisma.post.findMany({
        where: { userId: followingUserId },
      });
      return posts;
    })
  );

//   console.log([...posts, ...followingPosts.flat()]);
  posts=[...posts, ...followingPosts.flat()]
  
  // let followings=await user

  //   followings.forEach(
  //     async (following) =>{
  //       const followingPosts= await prisma.post.findMany({ where: { userId: following.id } })
  //       posts=await [...posts,...followingPosts]
  //     }
  //   );

  return NextResponse.json({ posts });
};
