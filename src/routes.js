import express from 'express';

import { findAllCargo, addCargo } from './controllers/cargo.js'

import { getAllFunc, addFunc } from './controllers/funcionario.js'

import { addProjeto, findAllProjetos } from './controllers/projeto.js'

const router = express.Router();


router.get('/cargo', findAllCargo)

router.post('/cargo/new', addCargo)


router.get('/funcionario', getAllFunc)

router.post('/funcionario/new', addFunc)


router.post('/projeto/new', addProjeto)

router.get('/projeto', findAllProjetos)

export default router;