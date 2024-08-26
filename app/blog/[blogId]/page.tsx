import { Metadata } from "next";

type props={
    params:{
        blogId:string;
    };
};

export const generateMetadata = async ({params}:props):Promise<Metadata>=>{
    const title = await new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(`iphone ${params.blogId}`)
        })
    })
    return{
        title : `Blog ${title}`
    }
}




export default function page({ params }:props) {
    return (
        <h1 className="text-2xl">Blog id: {params.blogId}</h1>
    )
}