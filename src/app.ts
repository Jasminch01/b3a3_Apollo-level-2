import express, { Application, Request, Response } from "express";
import cors from "cors";
import router from "./app/routes/router";
import globalErrorHandler from "./app/middleware/globalErrorHandler";
const app: Application = express();

//parser
app.use(express.json());
app.use(cors());

//application routes
app.use('/api', router)
app.use(globalErrorHandler)

app.get("/", (req: Request, res: Response) => {
  res.send("server is online");
});

export default app;
