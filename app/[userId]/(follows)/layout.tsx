import FollowersFollowingButtons from "@/components/followers-following-buttons";
import Link from "next/link";
import React from "react";
import { BiArrowBack } from "react-icons/bi";
export const dynamic = "force-dynamic";

async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { userId: string };
}) {
  const user = await fetch(
    `http://localhost:3000/api/users/profile/${params.userId}`
  ).then((r) => r.json());

  const name = user.name;

  
  return (
    <div>
      <div className="flex flex-col">
        <div className="flex gap-5 items-center">
          <Link href={`/${params.userId}`}>
          <span>
            <BiArrowBack />
          </span>
          </Link>
          <div>
            <strong>{name}</strong>
          </div>
        </div>
        <div className="flex text-xl h-10">
          <Link
            href={`/${params.userId}/followers`}
            className="hover:bg-gray-100 flex w-1/2 justify-center items-center"
          >
            Takipçiler
          </Link>
          <Link
            href={`/${params.userId}/following`}
            className="hover:bg-gray-100 flex w-1/2 justify-center items-center"
          >
            Takip ediliyor
          </Link>
        </div>
        {/* <FollowersFollowingButtons userId={params.userId} /> */}
      </div>
      <div className="mt-5">{children}</div>
    </div>
  );
}

export default Layout;
