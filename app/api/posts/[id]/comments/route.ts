import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getUserId } from "helpers/user";

export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const comments = await prisma.comment.findMany({
    where: {
      postId: params.id,
    },
  });

  return NextResponse.json(comments);
};

export const POST = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const res = await req.json();
  const { content } = res;

  const userId = await getUserId(req);

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  const post = await prisma.post.findUnique({
    where: {
      id: params.id,
    },
    select: {
      comments: true,
    },
  });


  const comment = await prisma.comment.create({
    data: {
      content,
      author: user?.name,
      postId: params.id,
      userId: user?.id,
    },
  });

  const updatePost = await prisma.post.update({
    where: {
      id: params.id,
    },
    data: {
      comments: {
        connect: { id: comment.id },
      },
    },
  });

  return NextResponse.json("başarılı")
};
