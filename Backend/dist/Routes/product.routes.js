"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_model_1 = require("../Models/product.model");
const ProductRouter = express_1.default.Router();
ProductRouter.post("/add", async (req, res) => {
    const { name, description, price, category, image } = req.body;
    try {
        const NewProduct = new product_model_1.ProductModel({ name, description, price, category, image });
        await NewProduct.save();
        return res.status(200).send({ "msg": "Product added succesfully" });
    }
    catch (error) {
        return res.status(401).send({ msg: error.message });
    }
});
ProductRouter.get("/get", async (req, res) => {
    try {
        const PrpductData = await product_model_1.ProductModel.find();
        return res.status(200).send(PrpductData);
    }
    catch (error) {
        return res.status(401).send({ msg: error.message });
    }
});
ProductRouter.get("/get/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const particularProduct = await product_model_1.ProductModel.findById(id);
        return res.status(200).send(particularProduct);
    }
    catch (error) {
        return res.status(401).send({ msg: error.message });
    }
});
ProductRouter.delete("/delete/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const DeleteProduct = await product_model_1.ProductModel.findByIdAndDelete(id);
        return res.status(200).send({ "msg": "product Deleted succesfully" });
    }
    catch (error) {
        return res.status(401).send({ msg: error.message });
    }
});
exports.default = ProductRouter;
