import express, { Router, Request, Response } from "express";
import { getTodo } from "../controller/rootController";

export const rootRouter: Router = express.Router();

rootRouter.get("/todo", getTodo);
