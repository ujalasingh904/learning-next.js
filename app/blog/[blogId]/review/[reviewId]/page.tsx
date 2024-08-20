import PageNotFound from "./not-found";

export default function page({ params }: {
    params: {
        reviewId: string,
        blogId: string
    }
}) {
    if (parseInt(params.blogId) > 1000 || parseInt(params.reviewId) > 1000) {
        return PageNotFound();
    }
    return (
        <div>review id: {params.reviewId} + blod id :{params.blogId}</div>
    )

}