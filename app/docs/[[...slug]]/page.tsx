export default function page({params}:{
    params:{slug:string[]}
}){
    if(params.slug?.length===2){
        return <div>viewing docs for {params.slug[0]} and for {params.slug[1]}</div>
    }else if(params.slug?.length===1){
        return <div className="text-2xl">viewing docs for {params.slug[0]}</div>
    }
    return <div>Welcome to docs page + {params.slug}</div>
}