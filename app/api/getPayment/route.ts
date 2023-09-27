import { NextResponse } from 'next/server';
import Razorpay from 'razorpay'

// const instance = new Razorpay({
//     key_id: 'rzp_test_XpNRA8Qw0nU8TX',
//     key_secret: 'eLsA6neHeh2ef0yfS61rnW4M',
// });

export async function GET(request:Request) {
    NextResponse.json({msg:"Hello from payment gateway"})
}

export async function POST(request:Request){
    try{
        const options = {
            amount: 500,  // amount in the smallest currency unit
            currency: "INR",
        };
        
        // const order = await instance.orders.create(options);
    
        // NextResponse.json({order:order,done:true})
    }catch{
        NextResponse.json({order:"none",done:false})
    }    
    
      
}