import dotenv from 'dotenv'
import { SignJWT, jwtVerify } from 'jose';
import 'reflect-metadata';


dotenv.config("../");


// Función para generar el token para una tabla específica
const generateTokenForTabla = async (tabla) => {
    const inst = { "tabla": tabla };
    const encoder = new TextEncoder();
    const jwtconstructor = new SignJWT({ inst });
    const jwt = await jwtconstructor
        .setProtectedHeader({ alg: "HS256", typ: "JWT" })
        .setIssuedAt()
        .setExpirationTime("30m")
        .sign(encoder.encode(process.env.JWT_PRIVATE_KEY));
    return jwt;
};

const tokenJWT = async (req, res, next) => {
    let inst;
    switch (req.query.tabla) {
        case '/hogares':
        case '/propietarios':
        case '/dispositivos':
        case '/dispositivosProveedores':
        case '/eventos':
        case '/tiposDispositivos':
        case '/ubicacion':
            inst = {
                "tabla": req.query.tabla
            }
            break;
        default:
            res.json({ status: 406, message: "No se puede generar el token" });
            return;
    }

    try {
        const jwt = await generateTokenForTabla(req.query.tabla);
        req.data = jwt;
        console.log(req.data);
        next();
    } catch (error) {
        console.error("Error al generar el token:", error);
        res.json({ status: 500, message: "Error al generar el token" });
    }
};

const validateJWT = async (req, res, next) => {
    console.log(req.baseUrl)
    const { authorization } = req.headers;
    if (!authorization) return res.json({ status: 401, message: "Token no enviado" });

    try {
        // Verificar el token
        const encoder = new TextEncoder();
        const jwtData = await jwtVerify(
            authorization,
            encoder.encode(process.env.JWT_PRIVATE_KEY)
        );

        const { tabla } = jwtData.payload;
        const expectedTabla = req.query.tabla;

        // Verificar que el valor de "tabla" concuerde con la tabla específica esperada
        if (tabla !== expectedTabla) {
            return res.json({ status: 403, message: "Token no válido para esta tabla" });
        }

        req.data = jwtData.payload;
        next();
    } catch (error) {
        res.json({ status: 401, message: "Token caducado o no válido" });
    }
};
export {
    tokenJWT,
    validateJWT
};