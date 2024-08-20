export default function page({ params }: {
    params: { blogId: string  }
}) {
    return (
        <h1>Blog id: {params.blogId}</h1>
    )
}