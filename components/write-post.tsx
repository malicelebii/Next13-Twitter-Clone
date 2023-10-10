"use client";
import Image from "next/image";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";

export default function WritePost({imageSrc}) {
  const [content, setContent] = useState("second");
  const router = useRouter();

  const onContentChange = (e) => {
    setContent(e.target.value);
  };

  const onSubmit = async (e) => {
    // e.preventDefault();
    try {
      const response = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content }),
      });
  
      if (response.ok) {
        router.refresh();
      }  
    } catch (error) {
      
    }
    
  };

  return (
    <div className="flex justify-center p-10 w-full">
      <div className="rounded-full border  w-16 h-16">
        <Image
          src={imageSrc} // Profil fotoğrafı URL'si
          alt="Profil Fotoğrafı"
          className="object-cover w-full h-full rounded-full "
          width="16"
          height="16"
        />
      </div>
      <div className=" w-full">
        <form className="px-2" onSubmit={onSubmit}>
          <textarea
            className="placeholder:italic place-items-center placeholder:text-slate-400 block bg-white h-28 w-full  p-2 shadow-sm border rounded-lg sm:text-md resize-none"
            placeholder="Ne düşünüyorsun"
            onChange={onContentChange}
          />
          <button
            type="submit"
            className="float-right rounded-full mt-2 bg-blue-300 p-2"
          >
            Gönder
          </button>
        </form>
      </div>
    </div>
  );
}
