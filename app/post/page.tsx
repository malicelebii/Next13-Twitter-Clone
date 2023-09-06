"use client";

import { SessionProvider, useSession } from "next-auth/react";
import React, { useState } from "react";

function Post() {
  const [title, setTitle] = useState("second");
  const [content, setContent] = useState("second");

  return (
    <div>
        <form>
          <div>
          </div>
          
          <button>Submit et</button>
        </form>
    </div>
  );
}

export default Post;
