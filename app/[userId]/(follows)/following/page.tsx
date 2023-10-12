import React from "react";
import Layout from "../layout";
import UserCard from "@/components/user-card";
import { getTheFollowing } from "helpers/user";

async function Following({ params }: { params: { userId: string } }) {
  const following = await getTheFollowing(params.userId);

  
  return (
    <div>
      {following.map((following) => (
        <div key={following.id}>
          <UserCard name={following.name} userId={following.id} imgUrl={following.profileImgUrl ? following.profileImgUrl : ""} />
        </div>
      ))}
      {/* <UserCard name={}/> */}
    </div>
  );
}

export default Following;
