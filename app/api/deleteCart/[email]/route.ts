import connectMongoDB from "@/lib/mongodb";
import Cart from '@/models/cart'
import { NextResponse } from "next/server";

type Props={
    params:{
        email:string
    }
}

export async function DELETE(request:Request,{params:{email}}:Props){
    try{
        connectMongoDB();
        const a =await Cart.deleteMany({email:email})
        return NextResponse.json({done:true})
    }catch{
        return NextResponse.json({done:false})
    }
}