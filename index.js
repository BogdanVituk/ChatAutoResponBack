import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import http from 'http'
import cors from 'cors';
import { Server } from "socket.io";
import session from "express-session";
import passport from "passport";
import router from "./routes/router.js";
import authRouter from './routes/routerAuth.js';
import { setupSocket } from "./scoket.js";
import './passport.js'
import { setupPassport } from "./passport.js";
import { seedChats } from "./seed/seedChats.js";

dotenv.config()

mongoose
    .connect(process.env.MONGODB_URI)
    .then(async () => {
        console.log('Ok')
        await seedChats();
    })
    .catch((err) => console.log('Db error', err))


const app = express(); 
app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true  
}));

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        maxAge: 1000 * 60 * 60 * 24
    }
}))
app.use(express.json());

app.use(passport.initialize());
app.use(passport.session());

const server = http.createServer(app)
const io = new Server(server);

setupSocket(io)
setupPassport({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
})
app.locals.io = io;

app.use('/', router);
app.use('/', authRouter);

server.listen(process.env.PORT, () => {
    console.log('start')
}) 