import mongoose from 'mongoose'

(async()=>{
    try{
    const db = await mongoose.connect('mongodb://127.0.0.1:27017/a3')
    } catch(error){
        console.error(error)
    }
})()