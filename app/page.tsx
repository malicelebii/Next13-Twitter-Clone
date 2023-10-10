import Timeline from "@/components/timeline";
import LeftSidebar from "@/components/left-sidebar";
import WritePost from "@/components/write-post";

export default async function App({}) {
  return (
    // <div className="flex justify-around m-5 mx-auto w-full px-80">
    <div className="flex flex-col justify-center items-center w-full">
      <div className="w-full border">
        <WritePost />
      </div>
      <div>
        <Timeline />
      </div>
    </div>
    // </div>
  );
}
