import React from "react";
import { TweetType } from "./tweets";

function TweetCard({ author, content }: TweetType) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex w-96 mb-5">
      {/* Profil Fotoğrafı */}
      <div className="w-16 h-16 overflow-hidden rounded-full">
        <img
          src="https://via.placeholder.com/150" // Profil fotoğrafı URL'si
          alt="Profil Fotoğrafı"
          className="object-cover w-full h-full"
        />
      </div>
      {/* İçerik */}
      <div className="ml-4">
        {/* Kullanıcı Adı */}
        <p className="font-semibold text-lg">{author}</p>
        {/* Tweet Metni */}
        <p className="mt-2">{content}</p>
      </div>
    </div>
  );
}

export default TweetCard;
