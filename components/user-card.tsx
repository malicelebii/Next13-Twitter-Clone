import Image from "next/image";
import Link from "next/link";
import React from "react";

function UserCard({ name, imgUrl ,userId}) {
  return (
    <Link href={`/${userId}`} className="hover:bg-gray-400">
      <div className="flex justify-between items-center w-full h-16 px-5 hover:bg-gray-100">
        <div className="flex gap-2 h-2/3">
          <Image
            src={imgUrl}
            alt=""
            height={32}
            width={40}
            className="border rounded-full"
          />
          <div className="flex items-center">
            <p>{name}</p>
            {/* <p>Name</p> */}
          </div>
        </div>
        <div className="flex gap-2">
          <button className="rounded-full text-white border bg-black px-3 py-1">
            Takip et
          </button>
          <span>...</span>
        </div>
      </div>
    </Link>
  );
}

export default UserCard;
