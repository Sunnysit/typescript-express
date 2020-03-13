"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
exports.getTodo = (req, res) => {
    axios_1.default.get('https://jsonplaceholder.typicode.com/todos/')
        .then(result => {
        console.log(result.data);
        res.send(result.data);
    })
        .catch(err => {
        res.send(err);
    });
};
