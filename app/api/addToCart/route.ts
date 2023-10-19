import connectMongoDB from "@/lib/mongodb";
import { NextResponse } from "next/server";
import cartModel from '@/models/cart'

export async function GET (request:Request){
    return NextResponse.json({msg:"Hello from backend"})
}

export async function POST(request:Request) {
    let {id,user,title,price,image} = await request.json();
    await connectMongoDB();
    const check = await cartModel.findOne({product_id : id,email:user})
    if(check){
        // await cartModel.updateOne({"product_id":id},{$inc:{quantity:-1}})
        return NextResponse.json({done:false,msg:'Item already Exists in your cart'},{status:200})
    }
    const cart = await cartModel.create({
        product_id : id,
        title:title,
        price:price,
        image:image,
        email:user,
        quantity:1
    })
    console.log(cart)
    await cart.save();
    return NextResponse.json({done:true,msg:"Item added to the Cart"},{status:200})
}