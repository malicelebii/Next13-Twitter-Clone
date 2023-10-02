import React from "react";
import { TweetType } from "./tweets";

function TweetCard({ author, content, createdAt }: TweetType) {
  function getTimeDifference(createdAtTime) {
    const now = new Date();
    const tweetDate = new Date(createdAtTime);

    const timeDifference = now - tweetDate;
    const minutes = Math.floor(timeDifference / (1000 * 60));
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
      return `${days} g`;
    } else if (hours > 0) {
      return `${hours} s`;
    } else if (minutes > 0) {
      return `${minutes} d`;
    } else {
      return "Şimdi";
    }
  }

  const timeAgo = getTimeDifference(createdAt);

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
      <div className="flex-col  w-full ml-5">
        <div className="flex flex-row justify-between flex-grow-0">
          {/* Kullanıcı Adı */}
          <div className="font-semibold text-lg">{author}</div>
          <div className="font-semibold text-lg">{timeAgo}</div>
          {/* <span className="font-semibold text-lg">{createdAt}</span> */}

          {/* Tweet Metni */}
        </div>
        <div className="mt-2">{content}</div>
      </div>
    </div>
  );
}

export default TweetCard;
