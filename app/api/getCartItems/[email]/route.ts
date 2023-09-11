import connectMongoDB from "@/lib/mongodb";
import cartModel from '@/models/cart'
import { NextResponse } from "next/server";

type Props = {
    params: {
        email: string
    }
}

export async function GET(request:Request,{ params: { email } }: Props) {
    const url = new URL(request.url)
    console.log(email)
    try{
        connectMongoDB();
        const cart = await cartModel.find({email:email.toString()});
        console.log(cart)
        return NextResponse.json({cart:cart,msg:"Done"});
    }catch{
        return NextResponse.json({msg:"Couldn't get Cart Data"})
    }
}