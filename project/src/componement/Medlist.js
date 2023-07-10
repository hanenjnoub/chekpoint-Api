import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { getmedcontacts } from "../redux/action";
import ContactCard from "./ContactCard";
const Medlist=()=>{
const dispatch=useDispatch()
useEffect(()=>{
    dispatch(getmedcontacts())
},[])
const contacts=useSelector((state)=>state.medcontacts.contacts)
console.log(contacts,"hellloooo")

  return(
      <div style={{ display: "flex", flexWrap: "wrap", margin: "20px" }}>
{
  contacts && contacts.map((el)=>(
      <ContactCard el={el}/>
  ))
}
      </div>
  )
}

export default Medlist