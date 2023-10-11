"use client";
import React, { MouseEvent, useState } from "react";
import { unlikeTweet, likeTweet, reTweet } from "helpers/tweetInteractions";
import { useRouter } from "next/navigation";

export interface InteractButtonType {
  id: string;
  children: React.ReactNode;
  type: string;
}

function InteractButton({ id, children, type }: InteractButtonType) {
  const [isLoading, setIsLoading] = useState(false);
  const [isOpenRetweetModal, setisOpenRetweetModal] = useState(false);
  const router = useRouter();

  const clickEvent = async (id: string) => {
    if (type == "like") {
      await likeTweet(id);
      router.refresh();
    } else if (type == "unlike") {
      const unlike = await unlikeTweet(id);
      router.refresh();
    } else if (type == "retweet") {
      setisOpenRetweetModal(!isOpenRetweetModal);
    }
  };

  const handleLikeClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    clickEvent(id); // id'yi likeTweet fonksiyonuna iletiyoruz
  };

  return (
    <div className="flex-col">
      <a href="" onClick={handleLikeClick}>
        {children}
        {/* {isLoading ? <p>Loadinggg</p> : children} */}
      </a>
      {isOpenRetweetModal && (
        <div className="-ml-10">
          <button
            onClick={async () => {
              await reTweet(id);
              router.refresh();
              setisOpenRetweetModal(false)
            }}
            className="mr-2"
          >
            Retweet
          </button>
          <button onClick={() => setisOpenRetweetModal(false)}>Cancel</button>
        </div>
      )}
    </div>
  );
}

export default InteractButton;
