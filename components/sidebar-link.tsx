import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

function SidebarLink({
  Icon,
  text,
  path,
}: {
  Icon: IconType;
  text: string;
  path: string;
}) {
  return (
    <div>
      <Link
        className="rounded-full p-2 hover:bg-slate-200 flex items-center justify-start gap-2 "
        href={path}
      >
        <div className="flex items-center gap-3 text-xl">
          <span> {<Icon />}</span>
          <p className=""> {text}</p>
        </div>
      </Link>
    </div>
  );
}

export default SidebarLink;
