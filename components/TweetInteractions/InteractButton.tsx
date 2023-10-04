"use client";
import React from "react";
import { likeTweet } from "helpers/tweetInteractions";

function InteractButton({ id, children, type }) {
    const clickEvent = (id) =>{
        if (type=="like") {
            likeTweet(id);
        }
    }


    const handleLikeClick = (e) => {
        e.preventDefault();
        clickEvent(id); // id'yi likeTweet fonksiyonuna iletiyoruz
      };
    
  return (
    <a href="" onClick={handleLikeClick} >
      {children}
    </a>
  );
}

export default InteractButton;
