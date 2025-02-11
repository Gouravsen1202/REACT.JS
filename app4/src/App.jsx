import EmpData from "./EmpData";
import EmpDesign from "./empdesign";

const App=()=>{
const ans=EmpData.map((key)=>
  
<EmpDesign

nm={key.Name}
Id={key.Id}
sal={key.Salary}
join={key.Joindate}/>);

return(

  <>
  <h1>Employ Data</h1><hr />
  <table>
    <tr>
<td>Name </td>
<td>Id </td>
<td>Salary </td>
<td>JoinDate </td>
</tr>
{ans}


  </table>
  
  </>
)

}
export default App;