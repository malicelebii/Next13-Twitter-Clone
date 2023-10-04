export const likeTweet = async (postId) => {
  const post = await fetch("/api/users/like", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ postId}),
  }).then((r) => r.json());
};
