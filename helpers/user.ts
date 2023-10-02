import { getToken } from "next-auth/jwt";
import { NextRequest } from "next/server";

export const getUserId = async (req: NextRequest) => {
  const payload = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  return payload?.sub;
};
