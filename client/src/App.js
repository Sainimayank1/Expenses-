import {useState} from "react";
import './App.css';

function App() {
  const [Form,setForm] = useState({
    "amount":"",
    "description":"",
    "date":"",
  })
 
  const handleclick = (e) =>
  {
      e.preventDefault();
      console.log(e)
  }

  const handlechange = (e) =>
   setForm({...Form,[e.target.name]:e.target.value})
  
  return (
    <div>
      <form>
      <input type="number" name="amount" id="" value={Form.amount} onChange={handlechange}/>
      <input type="text" name="description" id="" value={Form.description} onChange={handlechange}/>
      <input type="date" name="date" id="" value={Form.date} onChange={handlechange} />
      <button type="submit" onClick={handleclick}></button>
      </form>
    </div>
  );
}

export default App;
