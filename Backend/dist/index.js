"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = require("./Connection/db");
const user_routes_1 = __importDefault(require("./Routes/user.routes"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const product_routes_1 = __importDefault(require("./Routes/product.routes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get("/", (req, res) => {
    res.send({ "msg": "hello" });
});
app.use("/user", user_routes_1.default);
app.use("/product", product_routes_1.default);
app.listen(process.env.port, async () => {
    try {
        await db_1.connecting;
        console.log("connected");
    }
    catch (error) {
        console.log(error);
    }
    console.log("connected to server");
});
