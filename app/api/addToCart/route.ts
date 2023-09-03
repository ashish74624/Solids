import connectMongoDB from "@/lib/mongodb";
import { NextResponse } from "next/server";
import cartModel from '@/models/cart'

export async function GET (request:Request){
    return NextResponse.json({msg:"Hello from backend"})
}

export async function POST(request:Request) {
    let {id} = await request.json();
    await connectMongoDB();
    const cart = await cartModel.create({
        product_id : id,
        email:'ashish@gmail.com'
    })
    await cart.save();
    return NextResponse.json({msg:id})
}