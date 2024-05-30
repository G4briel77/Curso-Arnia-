const { MongoClient } = require ('mongodb')
const url = 'mongodb+srv://Gabriel:<Gbzin157>@arniabnb.ly4yyd4.mongodb.net/?retryWrites=true&w=majority&appName=ArniaBnb'
const client = new MongoClient(url);
const dbname = 'arniaBnb';

import express from 'express';
import mongoose from 'mongoose';
import guestRoutes from './routes/guestRoutes';
import adminRoutes from './routes/adminRoutes';
import roomRoutes from './routes/roomRoutes';
import { startController } from './controllers';
const app = express();

app.use(express.json());

app.get('/guests', startController)

app.post('/guests', (request , response) => {
      const { name } = request.body 

         console.log("Name:", name);
         console.log(request.body)

         response.send({return: 'ok'});
})

app.listen(3000, ( ) => console.log("Servidor rodando na porta 3000!"));