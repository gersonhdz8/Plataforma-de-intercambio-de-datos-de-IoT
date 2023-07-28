import express from 'express';
import dotenv from 'dotenv';
import appHogares from "./routers/hogares.js";
import appPropietarios from "./routers/propietarios.js"
import appDispositivos from "./routers/dispositivos.js"
import appUbicacion from "./routers/ubicacion.js"
import appTiposDispositivos from "./routers/tiposDispositivos.js"
import appProveedores from "./routers/proveedores.js"
import appEventos from "./routers/eventos.js"
import appDispositivosProveedores from "./routers/dispositivosProveedores.js"
import appJWT from "./routers/JWT.js";
import { validateJWT } from "./middleware/token.js";


const app = express();
dotenv.config();
app.use(express.json());

app.use("/token", appJWT)
app.use("/hogares",validateJWT,appHogares)
app.use("/propietarios",validateJWT,appPropietarios)
app.use("/dispositivos",validateJWT,appDispositivos)
app.use("/ubicacion",validateJWT,appUbicacion)
app.use("/tiposDispositivos",validateJWT,appTiposDispositivos)
app.use("/proveedores",validateJWT,appProveedores)
app.use("/eventos",validateJWT,appEventos)
app.use("/dispositivosProveedores",validateJWT,appDispositivosProveedores)


let config = JSON.parse(process.env.MY_SERVER);
app.listen(config, () => {
    console.log(`Server is running on http://${config.host}:${config.port}`);
})