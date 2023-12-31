import { Card, Button, CardTitle, CardText } from "reactstrap";
import {deletemedcontact} from "../redux/action"
import {useDispatch} from "react-redux"
import EditModal from "./EditModal"
const ContactCard=({el})=>{
    const dispatch=useDispatch()
    
        const deletes=()=>{
    dispatch(deletemedcontact(el._id))
        }
        return(
            <div style={{ minWidth: "300px", margin: "10px" }}>
            <Card
              body
              inverse
              style={{ backgroundColor: "#333", borderColor: "#333" }}
            >
              <CardTitle tag="h5"> {el.name} </CardTitle>
              <CardText>{el.email} </CardText>
              <CardText>{el.phone} </CardText>
              <CardText>
                {el.dateCreation.slice(0, 10)} ---{" "}
                {el.dateCreation.slice(11, 19)}{" "}
              </CardText>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
           <Button onClick={deletes}>delete</Button>
           <EditModal el={el}/>
       
              </div>
            </Card>
          </div>
        )
    }
    export default ContactCard