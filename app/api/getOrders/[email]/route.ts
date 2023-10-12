    import mongoose from "mongoose";
    import paymentModel from '@/models/paymentModel' 
    import { NextResponse } from "next/server";
    import connectMongoDB from "@/lib/mongodb";

    type Params = {
        params: {
            email: any
        }
    }

    export async function GET(request:Request, {params:{email}}:Params){
        try{
            connectMongoDB();
            const email1 = email.replace('%40','@')
            const order = await paymentModel.find({email:email1})
            let product:any=[]
            // order.map(async(item)=>{ --- THIS DOES NOT WORK .MAP DOES NOT WORK HERE
            //     const res = await fetch(`https://fakestoreapi.com/products/${item.productId}`)
            //     const data = await res.json();
            //     product.push(data)
            // })
            for (const item of order){
                const res = await fetch(`https://fakestoreapi.com/products/${item.productId}`)
                const data = await res.json();
                product.push(data)
            }
            return NextResponse.json({product})
        }catch{
            return NextResponse.json("Can't fetch order at the moment")
        }
    }