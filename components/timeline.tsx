import { cookies } from "next/dist/client/components/headers";
import Tweets from "./tweets";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Image from "next/image";
import Link from "next/link";
import SignOut from "./sign-out";
import { redirect } from 'next/navigation'

export default async function Timeline() {
  const session = await getServerSession(authOptions);
  let data;
  if (session) {
    const cooks = cookies();
    const token = cooks.get("next-auth.session-token")?.value;

    data = await fetch(`http://localhost:3000/api/posts/followings`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  const list = await data?.json();

  return (
    <div className="flex justify-center mx-auto border">
      {session ? (
        <div>
          <div className="">
            <Tweets tweets={list.posts} />
          </div>
          <div className=" flex flex-col space-y-5 justify-center items-center">
            <SignOut />
          </div>
        </div>
      ) : (
        redirect("/login")
      )}
    </div>
  );
}
