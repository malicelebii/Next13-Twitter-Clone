import React from "react";
import TweetCard from "./tweet-card";

export interface TweetType {
  author: string;
  content: string;
  createdAt : Date;
  id:string
}

function Tweets({ tweets }: { tweets: [TweetType] }) {
  return (
    <div >
      {tweets.map((tweet, i) => (
        <div key={i}>
          <TweetCard author={tweet.author} content={tweet.content} createdAt={tweet.createdAt} id={tweet.id}/>
        </div>
      ))}
    </div>
  );
}

export default Tweets;
