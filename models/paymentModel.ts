import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
  email:{
    type:String,
    required:true
  },
  productId:{
    type:Number,
    required: true,
  },
  razorpay_order_id: {
    type: String,
    required: true,
  },
  razorpay_payment_id: {
    type: String,
    required: true,
  },
  razorpay_signature: {
    type: String,
    required: true,
  },
});

const model = mongoose.models.Payment || mongoose.model("Payment", paymentSchema);

export default model;