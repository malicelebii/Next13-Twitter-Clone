import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

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
  const { title, content, userId } = res;

  const newPost = await prisma.post.create({
    data: { title, content, userId },
  });

  // console.log(req.credentials.);

  return NextResponse.json(newPost);
};
