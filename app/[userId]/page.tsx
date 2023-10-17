import FollowButton from "@/components/follow-button";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import UploadImage from "@/components/upload-image";
import Link from "next/link";
import ProfileItems from "@/components/profile-items";
import UserTweets from "@/components/user-tweets";
export default async function UserProfile({
  params,
}: {
  params: { userId: string };
}) {
  const data = await fetch(
    `http://localhost:3000/api/users/profile/${params.userId}`,
    { method: "GET", cache: "no-store" }
  );
  const user = await data.json();
  const session = await getServerSession(authOptions);
  let userId;
  if (session) {
    userId = session.token.sub;
  }

  return (
    <>
      <div className="flex justify-between m-5 mx-auto gap-10 max-w-5xl  bg-slate-400">
        <div className="bg-gray-100  flex items-center justify-center w-full">
          <div className="bg-white p-6 rounded-lg shadow-md w-full">
            <div className="flex items-center space-x-4">
              <UploadImage imgSrc={user.profileImgUrl} />

              <div>
                <h1 className="text-2xl font-semibold">{user.name}</h1>
                <p className="text-gray-600">@johndoe</p>
              </div>
            </div>
            <p className="mt-4 text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio.
            </p>
            <div className="mt-4">
              <div className="flex items-center">
                <div className="mr-2">
                  <Link
                    href={`/${params.userId}/followers`}
                    className="hover:underline"
                  >
                    {" "}
                    <strong>{user.followedByIDs?.length}</strong> Takipçi
                  </Link>
                </div>
                <div>
                  <Link
                    href={`/${params.userId}/following`}
                    className="hover:underline"
                  >
                    {" "}
                    <strong>{user.followingIDs?.length}</strong> Takip Edilen{" "}
                  </Link>
                </div>
                <div>
                  {userId !== user.id &&
                    !user.followedByIDs.includes(userId) && (
                      <FollowButton
                        followId={params.userId}
                        buttonType={"follow"}
                      />
                    )}
                  {user.followedByIDs.includes(userId) && (
                    <FollowButton
                      followId={params.userId}
                      buttonType={"unfollow"}
                    />
                  )}
                </div>
              </div>
              <ProfileItems userId={params.userId}/>
  
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
