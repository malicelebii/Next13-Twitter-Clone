import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest,{params}:{params:{userId:string}}) => {
  console.log(params.userId);
  console.log("userId");
  
  let user ;
  try {
     user = await prisma.user.findUnique({
      where: {
        id: params.userId,
      },
      select:{
        email:true,
        name:true,
        followedByIDs:true,
        followingIDs:true,
      },
    });  
  } catch (error) {
    console.log(error);
    
  }
  

  // console.log(req.body);
  return NextResponse.json(user);
};