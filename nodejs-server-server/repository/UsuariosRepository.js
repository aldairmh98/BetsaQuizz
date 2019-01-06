'use strict';
const Sequelize = require('sequelize');

const Usuarios = require('../database/models').Usuario;

const Op = Sequelize.Op;

function crearUsuario(usuario){
    return Usuarios
      .create({
        username: usuario.username,
        password: usuario.password,
        email: usuario.email
      })
}

function login(email, password){
    return Usuarios.findOne({
        where:{
            email:email,
            password:password
        }
    })
}

function getOne(id){
    return Usuarios.findOne({
        where:{
            id:id
        }
    },
    )
}

function getMany(dato){
    return Usuarios.findAll({
        where:{
            $or:[
            {username:{
                $iLike:'%'+dato+'%'
           }},
           {email:{
            $iLike:'%'+dato+'%'
       }}           
        ]
        }
    })
}

function updateUser(id,usuario){
      return Usuarios.update({
        username: usuario.username,
        description: usuario.description,
        password: usuario.password,
        email: usuario.email
      },{
          where: {
              id:id
          }
    })
}


function deleteUser(id){
    return Usuarios.destroy({
        where : {
            id:id
        }
    }
    )
}
module.exports={crearUsuario,login, getOne, getMany, deleteUser, updateUser}