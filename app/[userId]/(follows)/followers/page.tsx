import UserCard from "@/components/user-card";
import { getTheFollowers } from "helpers/user";
import React from "react";

async function Followers({ params }: { params: { userId: string } }) {
  const followers = await getTheFollowers(params.userId);

  return (
    <div>
      {followers.map((follower) => (
        <div key={follower.id}>
          <UserCard name={follower.name} userId={follower.id} imgUrl={follower.profileImgUrl ? follower.profileImgUrl : ""} />
        </div>
      ))}
      {/* <UserCard name={}/> */}
    </div>
  );
}

export default Followers;
