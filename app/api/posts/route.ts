import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getToken } from "next-auth/jwt";
import { getUserId } from "helpers/user";

interface PostType {
  title: string;
  content: string;
  userId: string;
}

export const GET = async (req: NextRequest) => {
  const posts = await prisma?.post.findMany();
  // console.log(req.body);
  return NextResponse.json({ posts });
};

export const POST = async (req: NextRequest) => {
  const res = await req.json();

  const userId = await getUserId(req);

  const user = await prisma.user.findUnique({ where: { id: userId } });

  const {  content } = res;

  const newPost = await prisma.post.create({
    data: {  content, userId, author: user?.name },
  });

  // console.log(req.credentials.);

  return NextResponse.json(newPost);
};
