"use client";
import React, { MouseEvent, useState } from "react";
import { unlikeTweet, likeTweet, reTweet } from "helpers/tweetInteractions";
import { useRouter } from "next/navigation";
import { TweetType } from "../tweets";
import TweetCard from "../tweet-card";
import WriteComment from "../write-comment";

export interface InteractButtonType {
  id: string;
  children: React.ReactNode;
  type: string;
  data: any;
}

function InteractButton({ id, children, type, data }: InteractButtonType) {
  const [isLoading, setIsLoading] = useState(false);
  const [isOpenRetweetModal, setisOpenRetweetModal] = useState(false);
  const [isShareDropdownOpen, setIsShareDropdownOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const router = useRouter();

  let classAttr =
    type == "like"
      ? "hover:rounded-full p-1 hover:bg-red-100 hover:text-red-500"
      : type == "retweet"
      ? "hover:rounded-full p-1 hover:bg-green-100 hover:text-green-500"
      : "hover:rounded-full p-1 hover:bg-blue-100 hover:text-blue-500";

  const clickEvent = async (id: string) => {
    if (type == "like") {
      await likeTweet(id);
      router.refresh();
    } else if (type == "unlike") {
      const unlike = await unlikeTweet(id);
      router.refresh();
    } else if (type == "retweet") {
      setisOpenRetweetModal(!isOpenRetweetModal);
    } else if (type == "share") {
      setIsShareDropdownOpen(!isShareDropdownOpen);
    } else if (type == "comment") {
      setIsDialogOpen(!isDialogOpen);
    }
  };

  const handleLikeClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    clickEvent(id); // id'yi likeTweet fonksiyonuna iletiyoruz
  };

  const openDialog = () => {
    setIsDialogOpen(true); // Dialog penceresini aç
  };

  const closeDialog = () => {
    setIsDialogOpen(false); // Dialog penceresini kapat
  };

  const handleDialogConfirm = () => {
    // Dialog onaylandığında burada yapılması gereken işlemleri ekleyin
    closeDialog(); // Dialog penceresini kapat
  };

  return (
    <div className={classAttr}>
      <a href="" onClick={handleLikeClick}>
        {children}
        {/* {isLoading ? <p>Loadinggg</p> : children} */}
      </a>
      {isDialogOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            {/* <p>Dialog İçeriği</p> */}
            <div className="flex w-full p-4">
              <div className="w-16 h-16 overflow-hidden rounded-full">
                <img
                  src={data.profileImg} // Profil fotoğrafı URL'si
                  alt="Profil Fotoğrafı"
                  className="object-cover w-full h-full"
                />
              </div>
              {/* İçerik */}
              <div className="flex-col  w-full ml-5">
                <div className="flex flex-row justify-between flex-grow-0">
                  {/* Kullanıcı Adı */}
                  <div className="font-semibold text-lg">{data.author}</div>
                  <div className="font-semibold text-lg">{data.timeAgo}</div>

                  {/* Tweet Metni */}
                </div>
                <div className="mt-2">{data.content}</div>
              </div>
            </div>
            <div className="">
              <WriteComment id={id} imgSrc={data.profileImg} />
            </div>

            <button
              onClick={handleDialogConfirm}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Onayla
            </button>
            <button
              onClick={closeDialog}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Kapat
            </button>
          </div>
        </div>
      )}
      {isShareDropdownOpen && type === "share" && (
        <div className="-ml-10 border rounded-md text-black">
          <button onClick={() => {}} className="px-2 hover:bg-gray-100">
            Bağlantıyı Kopyala
          </button>
        </div>
      )}
      {isOpenRetweetModal && (
        <div className="flex flex-col -ml-10 border rounded-md">
          <button
            onClick={async () => {
              await reTweet(id);
              router.refresh();
              setisOpenRetweetModal(false);
            }}
            className="hover:bg-gray-100 px-2"
          >
            Retweet
          </button>
          <button
            onClick={() => setisOpenRetweetModal(false)}
            className="hover:bg-gray-100 px-2"
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}

export default InteractButton;
