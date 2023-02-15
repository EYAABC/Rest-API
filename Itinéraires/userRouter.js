const express = require('express')
const  router  =  express. Router()

const  { AddUser, getAllDataUsers, DeleteDataUser, UpdateDataUser }  =  require('.. /controllers/userController')



router. get('/',  getAllDataUsers)


POST METHOD 


router. post('/',  AddUser)


router. delete('/:idUser',DeleteDataUser )





//update data user
//method : @PUT
router. put('/:id',  UpdateDataUser )



module. exports  =  router