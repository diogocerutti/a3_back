import mongoose from 'mongoose';

const Schema = mongoose.Schema
const model = mongoose.model

const Carg = new Schema({
    cargo: String,
    salario: Number
})

export default model('cargo', Carg)