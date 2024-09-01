"use client";
import PageNotFound from "./not-found";

function getRandomInt(val: number) {
  return Math.floor(Math.random() * val);
}

export default function page({
  params,
}: {
  params: {
    reviewId: string;
    blogId: string;
  };
}) {
//   const num = getRandomInt(2);
//   if (num == 0) {
//     throw new Error("We caught an error")
//   }

  if (parseInt(params.blogId) > 1000 || parseInt(params.reviewId) > 1000) {
    return PageNotFound();
  }
  return (
    <div>
      review id: {params.reviewId} + blod id :{params.blogId}
    </div>
  );
}
