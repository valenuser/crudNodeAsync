const express = require('express')

const router = express.Router()

const { getAllUsers, postUser ,getUserById, PutUser , DeleteUser} = require('../modulosDB/functionsDB')

router.get('/',async (req,res)=>{
    const response = await getAllUsers()

    if(response[0].length == 0){
            res.status(404).send('No hay datos del usuario registrados.')
    }else{
            res.status(200).send(response[0])
    }
})

router.get('/:id',async (req,res)=>{

    if(req.params.id == undefined){
        res.status(404).send('No se han enviado los datos correctamente.')
    }

    const response = await getUserById(req.params.id)

    if(response[0] == false){

        res.status(404).send('Error interno, vuelva  a intentarlo mas tarde.')

    }else if(response[0].length == 0){

        res.status(204).send('No hay datos del usuario registrados.')

    }else{

        res.status(200).send(response[0])

    }
})


router.post('/',async (req,res)=>{
    const response =  await postUser(req.body.nombre)

    if(!response){

        res.status(404).send('No se ha podido registrar el usuario.')
        
    }else{

        res.status(200).send('Usuario registrado correctamente.')

    }
})



router.put('/', async (req,res)=>{

    const response = await  PutUser(req.body.nombre,req.body.id)

    if(!response){

        res.status(404).send('No se ha podido actualizar el usuario.')

    }else{

        res.status(200).send('Usuario actualizado correctamente.')

    }
})



router.delete('/',async(req,res)=>{
    if(req.body.id == "" || req.body.id == undefined){
        res.status(404).send('Los datos enviados no son correctos .')
    }


    const response = await  DeleteUser(req.body.id)


    if(!response){
        res.status(404).send('No se ha podido eliminar el usuario.')
    }else{
        res.status(200).send('Usuario eliminado correctamente.')
    }
})


module.exports = router