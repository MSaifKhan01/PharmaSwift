import mongoose,{Document,Schema} from "mongoose";

export interface Product extends Document{
    name:string
    description:string
    price:Number
    category:string
    image:string
}

const ProductSchema:Schema=new Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    price:{type:Number,required:true},
    category:{type:String,required:true},
    image:{type:String,required:true}

},
{
    versionKey:false
})

export const ProductModel=mongoose.model<Product>("product",ProductSchema)

