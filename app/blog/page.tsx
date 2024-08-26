import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    absolute: "Blog-app",
  },
};

const page = () => {
  return (
    <>
      <div>Blog page</div>
    <div className="text-white underline flex flex-col">
      <Link href="blog/100" >Blog 100</Link>
      <Link href="blog/200">Blog 200</Link>
      <Link href="blog/300" replace>Blog 300</Link>

    </div>
    <Link href="/">Home</Link>
      
    </>
  );
};

export default page;
