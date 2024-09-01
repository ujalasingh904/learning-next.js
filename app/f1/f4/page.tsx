import Link from "next/link";

export default function F4() {
  return (
    <>
      <h1>F1</h1>
      <div className="aspect-square underline">
        <Link href="/about">about</Link>
      </div>
    </>
  );
}
