import Timeline from "@/components/timeline";
import LeftSidebar from "@/components/left-sidebar";
import WritePost from "@/components/write-post";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
export const dynamic = 'force-dynamic'

export default async function App({}) {
  const session = await getServerSession(authOptions)
  
  return (
    // <div className="flex justify-around m-5 mx-auto w-full px-80">
    <div className="flex flex-col justify-center items-center w-full">
      <div className="w-full border">
        <WritePost imageSrc={session?.user?.image}/>
      </div>
      <div>
        <Timeline />
      </div>
    </div>
    // </div>
  );
}
