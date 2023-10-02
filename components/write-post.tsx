"use client";
import Image from "next/image";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";

export default function WritePost() {
  const [content, setContent] = useState("second");

  const onContentChange = (e) => {
    setContent(e.target.value);
  };

  const onSubmit = async (e) => {
    // e.preventDefault(); 
    await fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content }),
    });

    redirect("/")
  };

  return (
    <div className=" flex justify-center items-center p-5">
      <div className="rounded-full border p-3 w-16 h-16">
        <Image
          src="/x.png" // Profil fotoğrafı URL'si
          alt="Profil Fotoğrafı"
          className="object-cover w-full h-full "
          width={15}
          height={15}
        />
      </div>
      <div className="mt-28">
        <form className="px-2" onSubmit={onSubmit}>
          <textarea
            className="placeholder:italic place-items-center placeholder:text-slate-400 block bg-white    h-24 w-72  p-2 shadow-sm outline-none focus:ring-1 sm:text-sm resize-none"
            placeholder="Ne düşünüyorsun"
            onChange={onContentChange}
          />
          <hr className="my-3"></hr>
          <button
            type="submit"
            className="float-right rounded-full bg-blue-300 p-2"
          >
            Gönder
          </button>
        </form>
      </div>
    </div>
  );
}
