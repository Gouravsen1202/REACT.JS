import { useState } from "react";

const App = () => {

  
  const[enp,enpno]=useState("");
  const[name,setName]=useState("");
  const[city,setCity]=useState("");
  const[sal,salary]=useState("");



  const handleSubmit=()=>{
    console.log({enp:enp,name:name,city:city,salaryy:sal})
  }
  return (
    <>
    <center>
      <h1>Application Form</h1>
      Enter Enono:<input type="text"  value={enp} onChange={(e)=>{enpno(e.target.value)}}/>
      <br />
      Enter name:<input type="text"  value={name} onChange={(e)=>{setName(e.target.value)}}/>
      <br />
      Enter city:<input type="text"  value={city} onChange={(e)=>{setCity(e.target.value)}}/>
      <br />
      Enter salary:<input type="text"  value={sal} onChange={(e)=>{salary(e.target.value)}}/>

      
      <br />
      <button onClick={handleSubmit}>Click Here</button>
      </center>
    </>
  );
};
export default App;