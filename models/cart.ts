import mongoose ,{Schema} from "mongoose";

const cast = new Schema({
    email:{type:String , required:true},
    product_id:{type:String , required:true}
}
,{collection:'cart'}
);

const model = mongoose.model('cast',cast);

export default model;