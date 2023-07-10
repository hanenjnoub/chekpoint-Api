const express=require("express")
const router=express.Router()
const medcontact=require("../model/medcontact")

router.get('/',async (req,res)=>{
    const contacts= await medcontact.find()
    res.send({msg:"data fetched",contacts})
    })
//add
router.post("/add",async(req,res)=>{
    const{name,email,phone}=req.body
    
        const newmedcontacts= new medcontact ({name,email,phone})
        const medcontacts=await newmedcontacts.save()
        res.send({msg:"success add",medcontacts})
       
})
//delete
    router.delete('/delete/:id',async(req,res)=>{
        const {id}=req.params
        const contact= await medcontact.findOneAndDelete({_id:id})
    
        res.send({msg:"contact deleted",medcontact})
     })
     // edit
     
    router.put('/edit/:id',async(req,res)=>{
        const{id}=req.params
        const contact=await medcontact.findOneAndUpdate({_id:id},{$set:req.body},{new:true})
        res.send({msg:'contact edited',contact})
    })
    module.exports=router