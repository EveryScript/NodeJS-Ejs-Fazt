'use strict'

// Importing 'app' Express configuration
import app from './app.js';
// Importing Mongoose
import mongoose from 'mongoose';

// Setting connection to MongoDB with Mongoose
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/db_wallet')
    .then(() => {
        console.log("Conexión establecida con exito MONGODB");
        // Create listen and alert "Server start!"
        app.listen(3000, () => {
            console.log("El servidor funciona correctamente en el puerto 3000 SERVER");
        });
    })
    .catch(error => {
        console.log(error);
    });