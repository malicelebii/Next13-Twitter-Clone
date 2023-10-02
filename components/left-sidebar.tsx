import Tweets, { TweetType } from "@/components/tweets";
import Link from "next/link";
import { BiSolidHomeCircle } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import SidebarLink from "./sidebar-link";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function LeftSidebar() {
  const session =await getServerSession(authOptions);
  console.log(session);
  let userId=session.token.sub;
  
  
  return (
    <div className="flex flex-col bg-red-300 p-5 w-full items-start">
      <a className="p-2" href="">
        LOGO
      </a>
      <SidebarLink Icon={BiSolidHomeCircle} text="Anasayfa" path="/login" />
      <SidebarLink Icon={BsSearch} text="Keşfet" path="/explore" />
      <SidebarLink Icon={AiOutlineMail} text="Mesajlar" path="/#" />
      <SidebarLink Icon={IoPersonOutline} text="Profil" path={"/"+userId} />
      {/* <div>
        <Link
          className="rounded-full p-2 hover:bg-slate-200 flex items-center justify-start gap-2"
          href={"/login"}
        >
          <BiSolidHomeCircle />
          Anasayfa
        </Link>
      </div> */}
    </div>
  );
}
