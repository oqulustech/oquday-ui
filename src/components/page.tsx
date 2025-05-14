"use client";

import React from "react";
import { useRouter } from "next/navigation";
const Page = () => {
  const router = useRouter();

  return (
    <div>
      <div
        className='border-2 p-2  cursor-pointer'
        onClick={() => router.push("/login")}
      >
        Go to login page
      </div>
    </div>
  );
};

export default Page;
