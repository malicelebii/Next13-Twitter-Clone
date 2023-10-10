import React from "react";
import { TweetType } from "./tweets";
import InteractButton from "./TweetInteractions/InteractButton";
import { AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import { FaRetweet } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { BiComment } from "react-icons/bi";
import { IsTweetLiked } from "helpers/tweetInteractions";
import { getAuthorImgUrl } from "helpers/user";
import Link from "next/link";


async function TweetCard({
  author,
  content,
  createdAt,
  id,
  userId,
}: TweetType) {
  // IsTweetLiked(id);
  const profileImg = await getAuthorImgUrl(userId);

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
    <div className="bg-white p-4 border-b-2 shadow-md w-full flex-col">
      <Link href={`/post/${id}`}>
        {/* Profil Fotoğrafı */}
        <div className="flex w-full p-4">
          <div className="w-16 h-16 overflow-hidden rounded-full">
            <img
              src={profileImg} // Profil fotoğrafı URL'si
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
      </Link>
      <div className="flex justify-around border-t align-middle pt-3 ">
        {/* <a onClick={likePost}>
          <BiComment />{" "}
        </a> */}
        <InteractButton id={id} type={"comment"}>
          <BiComment />
        </InteractButton>
        <InteractButton id={id} type={"retweet"}>
          <FaRetweet />
        </InteractButton>
        {(await IsTweetLiked(id)) ? (
          <InteractButton id={id} type={"unlike"}>
            <FcLike />
          </InteractButton>
        ) : (
          <InteractButton id={id} type={"like"}>
            <AiOutlineHeart />
          </InteractButton>
        )}
        <InteractButton id={id} type={"share"}>
          <AiOutlineShareAlt />
        </InteractButton>
      </div>
    </div>
  );
}

export default TweetCard;
