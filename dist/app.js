"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const rootRoute_1 = require("./routes/rootRoute");
const app = express_1.default();
app.use(rootRoute_1.rootRouter);
app.get('/', (req, res) => {
    res.send("Hello");
});
const server = app.listen(process.env.PORT || 8080, () => {
    console.log(`Listening on 8080`);
});
