import Link from "next/link"
export default function page() {
    return (
        <>
            <div className="h-[83vh] bg-black flex  flex-col items-center justify-center text-3xl text-white"> hey 👋 welcome back to first next.js project 💻
                <Link href='/blog'className="underline">
                    blog
                </Link>
            </div>
        </>
    )
}