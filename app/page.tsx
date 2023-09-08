import { SessionProvider } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import Post from "../components/post";
import Timeline from "@/components/timeline";
import LeftSidebar from "@/components/left-sidebar";

export default async function Home() {
  return (
    <div className="flex justify-between m-5 mx-auto bg-black w-2/3">
      <div className="">
        <LeftSidebar />
      </div>
      <div>
        <Timeline userId={"64f83ca89e819bef241e496d"}/>
      </div>
      <div>
      <LeftSidebar />
      </div>
    </div>
  );
}
