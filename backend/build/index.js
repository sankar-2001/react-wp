"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const user_1 = require("./routes/user");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/user", user_1.userRouter);
mongoose_1.default.connect("mongodb://admin:admin@127.0.0.1:27017/?retryWrites=true&w=majority")
    .catch((err) => console.log("ERR", err));
app.listen(6500, () => console.log("SERVER STARTED"));
