import mysql from "mysql2";

const appDB = (req,res,next) => {    

    let config = JSON.parse(process.env.MY_DATABASE);
    req.conexion=mysql.createPool(config);
    next();

};
export default appDB