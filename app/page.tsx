import Timeline from "@/components/timeline";
import LeftSidebar from "@/components/left-sidebar";

export default async function App({}) {
  return (
    <div className="flex justify-between m-5 mx-auto bg-black w-2/3">
      <div className="">
        <LeftSidebar />
      </div>
      <div>
        <Timeline />
      </div>
      <div>
      <LeftSidebar />
      </div>
    </div>
  );
}
