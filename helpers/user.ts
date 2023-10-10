import { getToken } from "next-auth/jwt";
import { NextRequest } from "next/server";

export const getUserId = async (req: NextRequest) => {
  const payload = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  return payload?.sub;
};

export const getAuthorImgUrl = async (userId: string) => {
  const user = await fetch("http://localhost:3000/api/users/profile/" + userId).then((res) =>
    res.json()
  );

  return user.profileImgUrl;
};