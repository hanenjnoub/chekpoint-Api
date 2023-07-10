import './App.css';
import {Routes,Route,Link} from "react-router-dom"
import Medlist from "./componement/Medlist"
import Addcontact from './componement/Addcontact';
import { Button } from "reactstrap";

function App() {
  return (
    <div className="App">
<Link to="/list">
<Button color="info">Contact list</Button>
</Link>
<Link to="/add">
<Button color="info">Add Contact</Button>
</Link>
<Routes>
  <Route path="/list" element={<Medlist />} />
  <Route path="/add" element={<Addcontact />} />

</Routes>

    </div>
  );
}

export default App;
