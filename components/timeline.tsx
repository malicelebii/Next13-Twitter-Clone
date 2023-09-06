import Tweets, { TweetType } from "@/components/tweets";

export default async function Timeline() {
  const list = await fetch("http://localhost:3000/api/posts");
  const newList = await list.json();

  return (
    <div className="bg-blue-300 p-5 flex justify-center mx-auto">
      <div className="">
        <Tweets tweets={newList.posts} />
      </div>
    </div>
  );
}
