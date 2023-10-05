import { cookies } from "next/dist/client/components/headers";

let token:string 

export const likeTweet = async (postId) => {
  const post = await fetch("/api/users/like", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ postId }),
  }).then((r) => r.json());
};

export const unlikeTweet = async (postId) => {
  const post = await fetch("/api/users/like", {
    method: "DELETE",
    body: JSON.stringify({ postId }),
  }).then((r) => r.json());
};

export const reTweet = async (postId) => {
  const post = await fetch(`/api/posts/${postId}`, { method: "GET" }).then(
    (r) => r.json()
  );

  const createPost = await fetch("/api/posts", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ content: post.content }),
  }).then((r) => r.json());
};

export const IsTweetLiked = async (postId) => {
  const cooks = cookies();
  token = cooks.get("next-auth.session-token")?.value;

  let data = await fetch(`http://localhost:3000/api/users/like`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((r) => r.json());

  const filteredForIds = data.likedPosts.map((post) => post.id);

  return filteredForIds.includes(postId);
};
