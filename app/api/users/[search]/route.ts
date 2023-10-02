import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
  { params }: { params: { search: string } }
) => {
  let users = await prisma.user.findMany({select: {
    id:true,
    email: true,
    name: true,
  },});

  users = users.filter((user) => user.name?.toLowerCase().includes(params.search.toLowerCase()));

  // console.log(req.body);
  return NextResponse.json({ users });
};
