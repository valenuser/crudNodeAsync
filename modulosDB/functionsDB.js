const conn = require('../database')


const getAllUsers = async ()=>{
    try{
        const response =  await conn.query('select * from user')
     
        return response
    }catch(e){
        return false
    }
}

const getUserById = async(data)=>{
    try{

        const result = await conn.query(`select * from user where id = ${data}`)

        return result

    }catch(e){
        console.log(e);
        return false
    }
}


const postUser = async (userData)=>{
    try{
        await conn.query(`insert into user(nombre) values ('${userData}')`)

        return true

    }catch(e){

        if(e instanceof Error){

            return false
        
        }
    }
}

const PutUser = async(data,index) =>{
    try{
        const verify = await getUserById(index)

        if(verify[0].length != 0){

            const datas = await conn.query(`update user set nombre = '${data}' where id = ${index}`)

            return true
        
        }else{
        
            return false
        
        }
    }catch(e){
        console.log(e);
        return false
    }
}

const DeleteUser = async(index)=>{
    try{
        const verify = await getUserById(index)

        if(verify[0].length != 0){
            await conn.query(`delete from user where id = ${index}`)
            return true
        }else{
            return false
        }
    }catch(e){
        console.log(e);
        return false
    }
}

module.exports = {getAllUsers:getAllUsers, postUser:postUser,getUserById:getUserById,PutUser:PutUser,DeleteUser:DeleteUser}