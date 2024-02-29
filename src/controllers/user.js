// User Controller
'use strict'

// Importing UserModel
import User from "../models/user.js";
// Importing luxon (Datetime format library)    Documentation: https://moment.github.io/luxon/demo/global.html
import { DateTime } from "luxon";
const luxon_date = DateTime.now().setZone('UTC-4');

var controller = {
    // Test method
    home: function(req, res) {
        return res.status(200).send({
            message: "Soy el metodo Home desde el controlador de usuarios"
        });
    },
    // Saving user method
    saveUser: function(req, res) {
        var user = new User();
        var params = req.body;
        // Setting the User model data
        user.name = params.name;
        user.lastname =  params.lastname;
        user.username = params.username;
        user.password = params.password;
        user.image = null;
        user.created_at = luxon_date.toISO();
        user.updated_at = luxon_date.toISO();
        // saving user
        user.save((error, userSaved) => {
            if(error) return res.status(500).send({ message: "Error al guardar el usuario" });
            if(!userSaved) return res.status(404).send({ message: "No se ha podido guardar al usuario" });
            return res.status(200).send({
                message: "El usuario ha sido guardado correctamente",
                user: userSaved
            });
        });

    },
    // Loading all users method
    getUser: function(req, res){
        var user_id = req.params.id;    // Param from URL
        // Find user using User model
        User.findById(user_id, (error, user) => {
            if(error) return res.status(500).send({ message: "El usuario no existe" });
            if(!user) return res.status(404).send({ message: "No se ha podido encontrar al usuario" });
            return res.status(200).send({
                message: "Usuario encontrado",
                user: user
            });
        });
    },
    // Get all users
    users: function(req, res) {
        User.find().sort('name').exec((error, users) => {
            if(error) return res.status(500).send({ message: "Usuarios no encontrados" });
            if(!users) return res.status(404).send({ message: "No se ha podido obtener a todos los usuarios" });
            return res.status(200).send({
                users: users
            });
        });
    }
};

export default controller;