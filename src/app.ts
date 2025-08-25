import express, { Application } from "express";
import { Routes } from "./routes/routes";
import { APP_CONFIG } from "./config/app.config";
import { MongoLoader } from "./loader/mongo.loader";

const app:Application = express();

app.use(express.json());
app.use("/api" ,Routes.getInstance().router)

const PORT = APP_CONFIG.PORT;
const mongoLoader = new MongoLoader();
mongoLoader.connect();
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});