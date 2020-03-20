import { Request, Response } from "express";
import axios from "axios";

export const getTodo = (req: Request, res: Response) => {
  axios
    .get("https://jsonplaceholder.typicode.com/todos/")
    .then(result => {
      console.log(result.data);
      res.send(result.data);
    })
    .catch(err => {
      res.send(err);
    });
};
