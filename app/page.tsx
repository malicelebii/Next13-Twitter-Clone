import Timeline from "@/components/timeline";
import LeftSidebar from "@/components/left-sidebar";
import WritePost from "@/components/write-post";

export default async function App({}) {
  return (
    <div className="flex justify-around m-5 mx-auto w-full px-80">
      {/* <div></div> */}
      <div className="w-1/3">
        <LeftSidebar />
      </div>
      <div className="flex flex-col justify-center items-center w-2/3">
        <div className="w-full border">
        <WritePost />
        </div>
        <div>
        <Timeline />
        </div>
      </div>
      <div className="w-1/2">
        <LeftSidebar />
      </div>
    </div>
  );
}
