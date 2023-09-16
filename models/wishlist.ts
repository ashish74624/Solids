import mongoose ,{Schema} from "mongoose";

const wishList = new Schema({
    email:{type:String},
    product_id:{type:Number}
},
{collection:'wishlist'}
);

const model = mongoose.models.wishlist || mongoose.model('wishlist',wishList);

export default model;