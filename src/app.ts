import express from "express";
import apiRoutes from "./routes/api.routes";

import { errorHandler } from "./middlewares/errorHandler";
import cors from "cors";



const app = express();

app.use(errorHandler);
app.use(cors());

app.use(express.json()); 
app.use(express.urlencoded({ extended: false })); 

app.use("", apiRoutes);

export default app;
