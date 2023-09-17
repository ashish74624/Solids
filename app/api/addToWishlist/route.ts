import wishModel from '@/models/wishlist'
import connectMongoDB from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(request:Request){
    const {id,email} = await request.json();
    await connectMongoDB();
    const check = await wishModel.findOne({product_id : id,email:email})
    if(check){
        // await cartModel.updateOne({"product_id":id},{$inc:{quantity:-1}})
        return NextResponse.json({done:false,msg:'Item already Exists in your wishlist'},{status:200})
    }

    const wish = await wishModel.create({
        product_id : id,
        email: email,
    });
    await wish.save();
    return NextResponse.json({done:true,msg:"Item added to Wishlist"},{status:200})
}