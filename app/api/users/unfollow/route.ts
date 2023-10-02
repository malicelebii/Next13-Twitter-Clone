import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getUserId } from "helpers/user";

export const POST = async (req: NextRequest) => {
  const res = await req.json();

  const userId = await getUserId(req);

  const { followId } = res;

  const unfollowedUser = await prisma.user.findFirst({
    where:{
        id:followId
    },
    select:{
        followedByIDs:true
    }
  })

  
  const userWithFollowings = await prisma.user.findFirst({
      where: {
          id: userId,
        },
        select: {
            followingIDs: true,
        },
    });
    
    const user = await prisma?.user.update({
        where: {
            id: userId,
        },
        data: {
            followingIDs: {
                set: userWithFollowings?.followingIDs?.filter((id) => id != followId),
            },
        },
    });
    
    await prisma?.user.update({
        where:{
            id:followId
        },
        data:{
            followedByIDs:{
                set:unfollowedUser?.followedByIDs.filter(id=>id!= userId)
            }
        }
    })
    
    return NextResponse.json(user);
};
