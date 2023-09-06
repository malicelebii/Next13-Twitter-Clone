import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export const GET = async () => {
  const users = await prisma?.user.findMany({
    include: {
      posts: true,
    },
  });

 

  // console.log(req.body);
  return NextResponse.json({ users });
};
