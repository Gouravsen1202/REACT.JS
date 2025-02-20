import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./public/Home";
import Insert from "./public/insert";
import Contact from "./public//display";
import Nopage from "./public//Nopage";
const App=()=> {

  const handleInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    console.log({[name]:value})
   }

  return (
    <>
       <BrowserRouter>
  <Routes>
    <Route path="/"element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path="home"element={<Home/>}/>
    <Route path="about"element={<About/>}/>
    <Route path="contact"element={<Contact/>}/>
    <Route path="*"element={<Nopage/>}/>
    </Route>
  </Routes>
  
  </BrowserRouter>


  Enter City : <input type="text" name="mycity" value="Bhopal"
  
    onChange={handleInput} />
    </>
  );
};
export default App;