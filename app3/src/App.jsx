import Data from "./Data";
import EmpDesegn from "./EmpDesegn";
const App=()=>{
const ans=Data.map((key)=>
    <EmpDesegn

Name={key.Name}
Id={key.Id}
Join={key.Join}
Domain={key.Domain}  />);


    return(

        <>
        <h1> TCS Employes Data</h1><hr />
        <table>


                <tr>
                    <td>NAME </td>
                    
                    <td>ID </td>
                    <td>Joing </td>
                    <td>Domain  </td>
                </tr>
        {ans}
        </table>
        </>
    )
}
export default App