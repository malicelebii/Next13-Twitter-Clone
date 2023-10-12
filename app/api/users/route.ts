import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export const GET = async () => {
  const users = await prisma?.user.findMany({
    include: {
      posts: true,
      likedPosts:true
    },
  });

 

  return NextResponse.json({ users });
};
