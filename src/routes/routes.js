// --- Routes --- //
'use strict'

// Importing and define Router
import { Router } from "express";
const router = new Router();

// Importing Usercontroller
import Usercontroller from '../controllers/user.js'

// Setting routes
router.get('/', (req, res) => { res.render('index') });
// Calling to methods of UserController
router.get('/home', Usercontroller.home);
router.get('/save-user', Usercontroller.saveUser);
router.get('/user/:id', Usercontroller.getUser);
router.get('/users', Usercontroller.users);

// Exporting routes
export default router;