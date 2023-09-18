import connectMongoDB from "@/lib/mongodb";
import cartModel from '@/models/cart'
import { NextResponse } from "next/server";

type Props = {
    params: {
        email: any
    }
}

export async function GET(request:Request,{ params: { email } }: Props) {
    try{
        await connectMongoDB();
        const cart = await cartModel.find({email:email});
        let products=[]
        for(const product of cart){
            const res = await fetch(`https://fakestoreapi.com/products/${product.product_id}`)
            const data = await res.json();
            products.push(data);
        }
        return NextResponse.json({cart:products,msg:"Done"});
    }catch{
        return NextResponse.json({msg:"Couldn't get Cart Data"})
    }
}

export async function DELETE(request:Request, {params:{email}}:Props) {
    const {id} = await request.json();
    try{
        await connectMongoDB();
        const del = await cartModel.findOneAndDelete({email:email,product_id:id});
        return  NextResponse.json({msg:'Item Removed from Cart'});
    }catch{
        return NextResponse.json({msg:"Couldn't get Cart Data"})
    }
}