import Timeline from "@/components/timeline";
import LeftSidebar from "@/components/left-sidebar";
import WritePost from "@/components/write-post";

export default async function App({}) {
  return (
    <div className="flex justify-center m-5 mx-auto">
      {/* <div></div> */}
      <div>
        <LeftSidebar />
        </div>
      <div className="flex flex-col justify-center items-center">
        <WritePost />
        <Timeline />
      </div>
      <div>
      <LeftSidebar />
      </div>
    </div>
  );
}
