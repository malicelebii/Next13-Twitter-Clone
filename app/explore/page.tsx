import Image from "next/image";
import Form from "@/components/form";
import Link from "next/link";
import LeftSidebar from "@/components/left-sidebar";
import Search from "@/components/search";

export default function Explore() {
  return (
    <div className="flex justify-center m-5 mx-auto">
      {/* <div></div> */}
      <div>
        <LeftSidebar />
        </div>
      <div className="flex flex-col justify-center items-center">
        <Search  />
      </div>
      <div>
      <LeftSidebar />
      </div>
    </div>
  );
}
