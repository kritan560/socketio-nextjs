"use client";

import Link from "next/link";

const Homepage = () => {
  return (
    <>
      Homepage <br />
      <Link href={"/blog"}>Blog</Link>
    </>
  );
};
export default Homepage;
