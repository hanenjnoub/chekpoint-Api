import axios from "axios";
import { Get_Medcontact } from "./actiontype";
//get medcontact

export const getmedcontacts=()=>(dispatch)=>{
    axios.get("/api/projet/")
    .then((res)=>dispatch({type:Get_Medcontact,payload:res.data}))
    .catch(err=>console.log(err))
    }
//add med contact
export const addmedcontact=(newmedcontact)=>(dispatch)=>{
    axios.post("api/projet/add",newmedcontact)
    .then((res)=>dispatch(getmedcontacts()))
    .catch((err)=>console.log(err))
}
// delete
export const deletemedcontact=(idmedcontacts)=>(dispatch)=>{
    axios.delete(`/api/projet/delete/${idmedcontacts}`)
    .then((res)=>dispatch(getmedcontacts()))
    .catch(err=>console.log(err))
}
//edit


export const editmedcontact=(idmedcontacts,editedmedontact)=>(dispatch)=>{
    axios.put(`/api/projet/edit/${idmedcontacts}`,editedmedontact)
    .then((res)=>dispatch(getmedcontacts()))
    .catch((err)=>console.log(err))
}