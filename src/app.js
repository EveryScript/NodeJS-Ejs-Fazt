// App Express Configuration
'use strict'
// Importing Express
import express from 'express';
// Importing Routes file
import my_router from './routes/routes.js';
// Importing Body-parser
import bodyParser from 'body-parser';
// Import dirname and path
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

// Setting general paths
const __dirname = dirname(fileURLToPath(import.meta.url));
const my_view_path = join(__dirname, 'views');
const my_public_path = join(__dirname, 'public');

// A - Init application
const app = express();

// B - Setting Middleware of Body-Parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// C - Setting routes from file "routes" and public paths
app.use(my_router);
app.use(express.static(my_public_path));

// D - Setting views path by Ejs
app.set('views', my_view_path);
app.set('view engine', 'ejs');

// Exporting variable
export default app;