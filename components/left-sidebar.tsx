import { BiSolidHomeCircle } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import SidebarLink from "./sidebar-link";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Image from "next/image";
import SignOut from "./sign-out";

export default async function LeftSidebar() {
  const session = await getServerSession(authOptions);
  let userId;
  if (session) {
    userId = session.token.sub;
  }

  return (
    <div className="flex flex-col pl-5  items-start">
      <a className="p-2" href="">
        <Image src="/x.png" width={32} height={32} alt="LOGO" />
      </a>
      <SidebarLink Icon={BiSolidHomeCircle} text="Anasayfa" path="/login" />
      <SidebarLink Icon={BsSearch} text="Keşfet" path="/explore" />
      <SidebarLink Icon={AiOutlineMail} text="Mesajlar" path="/#" />
      <SidebarLink Icon={IoPersonOutline} text="Profil" path={"/" + userId} />
      {session && <SignOut />}
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
