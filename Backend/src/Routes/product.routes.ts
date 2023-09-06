import Express,{Request,Response}  from "express";

import { Product,ProductModel } from "../Models/product.model";

const ProductRouter=Express.Router()

ProductRouter.post("/add",async(req:Request,res:Response)=>{
    const {name,description,price,category,image}:Product=req.body

    try {
        const NewProduct:Product=new ProductModel({name,description,price,category,image})
        await NewProduct.save()
        return res.status(200).send({"msg":"Product added succesfully"})
    } catch (error:any) {
        return res.status(401).send({msg:error.message})
    }
})

ProductRouter.get("/get",async(req:Request,res:Response)=>{
    try {
        const PrpductData:Product[]=await ProductModel.find()
        return res.status(200).send(PrpductData)
    } catch (error:any) {
        return res.status(401).send({msg:error.message})
    }
})

ProductRouter.get("/get/:id",async(req:Request,res:Response)=>{
    const {id}=req.params
    try {
        const particularProduct:Product|null=await ProductModel.findById(id)
        return res.status(200).send(particularProduct)
    } catch (error:any) {
        return res.status(401).send({msg:error.message})
    }
})
ProductRouter.delete("/delete/:id",async(req:Request,res:Response)=>{
    const {id}=req.params
    try {
        const DeleteProduct:Product|null=await ProductModel.findByIdAndDelete(id)
        return res.status(200).send({"msg":"product Deleted succesfully"})
    } catch (error:any) {
        return res.status(401).send({msg:error.message})
    }
})

export default ProductRouter