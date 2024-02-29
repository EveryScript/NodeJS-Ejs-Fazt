// User Schema Model
'use strict'

// Importing mongoose and schema
import mongoose from "mongoose"

const Schema = mongoose.Schema;
var UserSchema = new Schema({
    name: String, 
    lastname: String,
    username: String,
    password: String,
    image: String,
    created_at: String,
    updated_at: String,
});

// Exporting model with Mongoose
export default mongoose.model('User', UserSchema);