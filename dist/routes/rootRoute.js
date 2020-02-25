"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
exports.rootRouter = express_1.default.Router();
exports.rootRouter.get('/bb', (req, res) => {
    res.send('bb');
});
// module.exports = rootRouter;
