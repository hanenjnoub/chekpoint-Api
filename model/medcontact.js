const mongoose =require('mongoose')
const schema=mongoose.Schema

const medcontactSchema= new schema({
    name:{
        type:String,
    },
    email:{
        type:String
    },
    phone:{
        type:Number
    },
    dateCreation:{
        type:Date,
        default:Date.now()
    }
})
module.exports=medcontact=mongoose.model('medcontact',medcontactSchema)