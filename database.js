const sql = require('mysql2')

const dotenv = require('dotenv')

dotenv.config({path:'./.env'})

try{
    const conn = sql.createPool({
        host:process.env.DATABASE_HOST,
        user:process.env.DATABASE_USER,
        password:process.env.DATABASE_PASSWORD,
        database:process.env.DATABASE_NAME
    }).promise()


    module.exports = conn
}catch(e){
    console.log(e);
}
