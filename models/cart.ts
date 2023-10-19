import mongoose ,{Schema} from "mongoose";

const cart = new Schema({
    email:{type:String},
    product_id:{type:String},
    title:{type:String},
    price:{type:Number},
    image:{type:String},
    quantity:{
        type:Number,
        default:1,
    }
}
,{collection:'cart'}
);

const model = mongoose.models.cart || mongoose.model('cart',cart);

export default model;