import dotenv from 'dotenv';
import express from 'express';
import './src/banco/dbMongo.js'
import cors from 'cors'
import routes from './src/routes.js'
import db from './src/banco/db.js'

dotenv.config()

const app = express();
app.use(express.json())
app.use(express.static('./public'))
app.use(cors())
app.use(routes)
db.authenticate()

export default app;