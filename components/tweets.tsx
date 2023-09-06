import React from "react";
import TweetCard from "./tweet-card";

export interface TweetType {
  author: string;
  content: string;
}

function Tweets({ tweets }: { tweets: [TweetType] }) {
  return (
    <div >
      {tweets.map((tweet, i) => (
        <div key={i}>
          <TweetCard author={tweet.author} content={tweet.content} />
        </div>
      ))}
    </div>
  );
}

export default Tweets;
