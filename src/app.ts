import express ,{Application,Request,Response} from 'express';
import {rootRouter} from './routes/rootRoute';


const app: Application = express();

app.use(rootRouter);


app.get('/',(req:Request,res:Response)=>{
    res.send("Hello");
})


const server = app.listen( process.env.PORT||8080,()=>{
    console.log(`Listening on 8080`);
})