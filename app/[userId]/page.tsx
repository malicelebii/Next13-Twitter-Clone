import FollowButton from "@/components/follow-button";
import LeftSidebar from "@/components/left-sidebar";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
export default async function UserProfile({
  params,
}: {
  params: { userId: string };
}) {
  const data = await fetch(
    `http://localhost:3000/api/users/profile/${params.userId}`,
    { method: "GET" ,cache:"no-store"}
  );
  const user = await data.json();
console.log(user);
const session =await getServerSession(authOptions);
  let userId;
  if (session) {
    userId=session.token.sub;
  }

 

  return (
    <div className="flex justify-between m-5 mx-auto gap-10 max-w-5xl  bg-slate-400">
      <div className="w-1/5">
        <LeftSidebar />
      </div>
      <div className="bg-gray-100  flex items-center justify-center w-full">
        <div className="bg-white p-6 rounded-lg shadow-md w-full">
          <div className="flex items-center space-x-4">
            <img
              src="https://via.placeholder.com/100"
              alt="Profile Avatar"
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h1 className="text-2xl font-semibold">{user.name}</h1>
              <p className="text-gray-600">@johndoe</p>
            </div>
          </div>
          <p className="mt-4 text-gray-800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio.
          </p>
          <div className="mt-4">
            <div className="flex">
              <div className="mr-2">
                <strong>{user.followedByIDs?.length}</strong> Takipçi
              </div>
              <div>
                <strong>{user.followingIDs?.length}</strong> Takip Edilen
              </div>
            </div>
          </div>
          { (userId !== user.id && !user.followedByIDs.includes(userId))&&
        <FollowButton followId={params.userId} buttonType={"follow"}/>         
      }
      {
        user.followedByIDs.includes(userId) && 
        <FollowButton followId={params.userId} buttonType={"unfollow"} />        
      }
        </div>
      </div>
      <div className="w-1/4">
        <LeftSidebar />
      </div>
    </div>
  );
}
