import express from 'express'
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from 'cookie-parser';
import makeDbConnection from './db/db.js';
import { registerController } from './api/controller/registerController.js';
import { loginController } from './api/controller/loginController.js';
import { testController } from './api/controller/testController.js';
import { dashbordController } from './api/controller/dashbordController.js';
import { verifyToken } from './api/middleware/verifyToken.js';
dotenv.config({ path: ".env" });

const app = express()

const allowedOrigins = [
    'http://localhost:3000',
    'https://quantum--five.vercel.app'
];

app.use(cookieParser());
app.use(express.json());
app.use(cors({
    origin: allowedOrigins,
    credentials: true,
    optionSuccessStatus: 200,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',

}));

app.post('/test', verifyToken, testController)
app.post('/login', loginController)
app.post('/register', registerController)
app.get('/fetch-user', verifyToken, dashbordController)

makeDbConnection(app)
