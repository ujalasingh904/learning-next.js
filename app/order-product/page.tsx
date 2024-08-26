"use client";
import { useRouter } from "next/navigation";

export default function OrderProduct() {
  const router = useRouter();
  const handleclick = () => {
    console.log("order placed successfully");
    router.push("/");
  };
  return (
    <div className="flex justify-center items-center flex-col gap-4 mt-5 mb-5">
      <h1>Order Product</h1>
      <button
        className="p-4 bg-lime-500 rounded-lg text-xl"
        onClick={handleclick}
      >
        place order
      </button>
    </div>
  );
}
