import express from 'express';
import dotenv from 'dotenv';
import appHogares from "./routers/hogares.js";
import dtoHogares from "./middleware/dtoHogares.js"


dotenv.config();
const app = express();
app.use(express.json());

app.use("/hogares",dtoHogares,appHogares)


let config = JSON.parse(process.env.MY_SERVER);
app.listen(config, () => {
    console.log(`Server is running on http://${config.host}:${config.port}`);
})