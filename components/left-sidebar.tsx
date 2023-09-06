import Tweets, { TweetType } from "@/components/tweets";
import Link from "next/link";

export default async function LeftSidebar() {
  return (
    <div className="flex flex-col bg-red-300 p-5 w-1/10 gap-5">
      <a className="p-2" href="">
        LOGO
      </a>
      <Link className="rounded-md p-2 hover:bg-slate-200" href={"/login"}>Anasayfa</Link>
      <Link className="rounded-md p-2 hover:bg-slate-200" href="">Anasayfa</Link>
      <Link className="rounded-md p-2 hover:bg-slate-200" href="">Anasayfa</Link>
      <Link className="rounded-md p-2 hover:bg-slate-200" href="">Anasayfa</Link>
      <Link className="rounded-md p-2 hover:bg-slate-200" href="">Anasayfa</Link>
    </div>
  );
}
