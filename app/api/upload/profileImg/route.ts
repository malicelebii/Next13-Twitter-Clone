import { getUserId } from "helpers/user";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const userId = await getUserId(req);
  const res = await req.json();

  
  const user = await prisma?.user.update({
    where: {
      id: userId,
    },
    data: {
      profileImgUrl : res,
    },
  });

  return NextResponse.json(user);   
};
