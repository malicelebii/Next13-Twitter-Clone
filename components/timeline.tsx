import { cookies } from "next/dist/client/components/headers";
import Tweets from "./tweets";

export default async function Timeline() {
  // const session = await getServerSession(authOptions);
  const cooks =cookies();
  const token =cooks.get("next-auth.session-token")?.value;

  const data = await fetch(`http://localhost:3000/api/posts/followings`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  const list = await data.json()



  return (
    <div className="bg-blue-300 p-5 flex justify-center mx-auto">
      <div className=""><Tweets tweets={list.posts} /></div>
    </div>
  );
}
