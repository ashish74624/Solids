import connectMongoDB from '@/lib/mongodb'
import cartModel from '@/models/cart'
import { NextResponse } from 'next/server';

export async function PATCH(request:Request){
    const {email,id} = await request.json()
    try{
        connectMongoDB();
        const dec = await cartModel.updateOne({email:email,productId:id},{$inc : {quantity:1}})
        if(dec){
            return NextResponse.json({done:true},{status:200})
        }
    }catch{
        return NextResponse.json({done:false},{status:400})
    }
}