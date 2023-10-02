"use client"
import { useRouter } from 'next/navigation';
import React from 'react'

function FollowButton({followId,buttonType}) {
    const router = useRouter();
    
    const handleFollow = async () => {
        try {
          const response = await fetch("/api/users/follow", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ followId }),
          });

          if (response.ok) {
                   router.refresh();
          }
        } catch (error) {}
      };
    
      const handleUnfollow = async () => {
        try {
          const response = await fetch("/api/users/unfollow", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ followId }),
          });

          if (response.ok) {
                   router.refresh();

          }
        } catch (error) {}
      };
    
  return (
    <button onClick={buttonType=="follow"? handleFollow : handleUnfollow} className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
   {buttonType}
  </button>
  )
}

export default FollowButton