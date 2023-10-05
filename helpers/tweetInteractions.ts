import { cookies } from "next/dist/client/components/headers";

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

export const IsTweetLiked = async (postId) => {
  const cooks = cookies();
  const token = cooks.get("next-auth.session-token")?.value;

  let data = await fetch(`http://localhost:3000/api/users/like`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((r) => r.json());

  const filteredForIds = data.likedPosts.map((post) => post.id);

  return filteredForIds.includes(postId);
};
