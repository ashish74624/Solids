import mongoose ,{Schema} from "mongoose";

const cart = new Schema({
    email:{type:String},
    product_id:{type:String },
    quantity:{type:Number}
}
,{collection:'cart'}
);

const model = mongoose.models.cart || mongoose.model('cart',cart);

export default model;