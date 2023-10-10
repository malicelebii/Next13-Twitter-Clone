import CommentCard from "@/components/comment-card";
import TweetCard from "@/components/tweet-card";
import WriteComment from "@/components/write-comment";
import WritePost from "@/components/write-post";
import Image from "next/image";
import React from "react";

async function Post({ params }: { params: { id: string } }) {
  const data = await fetch(`http:localhost:3000/api/posts/${params.id}`, {
    cache: "no-store",
  });
  const post = await data.json();
  console.log(post.comments);

  return (
    <div>
      <div>
        <TweetCard
          author={post.author}
          content={post.content}
          createdAt={post.createdAt}
          id={params.id}
        />
        <div className="flex justify-between border">
           <WriteComment id={params.id} />
        </div>
      </div>
      {post.comments.map((comment) => (
        <div key={comment.id}>
          <CommentCard
            author={comment.author}
            content={comment.content}
            createdAt={comment.createdAt}
            id={comment.id}
          />
        </div>
      ))}
    </div>
  );
}

export default Post;
