import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import CommentCard from "@/components/comment-card";
import TweetCard from "@/components/tweet-card";
import WriteComment from "@/components/write-comment";
import WritePost from "@/components/write-post";
import { getServerSession } from "next-auth";
import Image from "next/image";
import React from "react";

async function Post({ params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions)
  
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
          userId={post.userId}
        />
        <div className="flex justify-between border">
           <WriteComment id={params.id} imgSrc={session?.user?.image}/>
        </div>
      </div>
      {post.comments.map((comment) => (
        <div key={comment.id}>
          <CommentCard
            author={comment.author}
            content={comment.content}
            createdAt={comment.createdAt}
            id={comment.id}
            userId={comment.userId}
          />
        </div>
      ))}
    </div>
  );
}

export default Post;
