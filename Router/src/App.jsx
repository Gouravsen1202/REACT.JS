import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/COntact";
const App=()=> {
 return(
  <>
  <BrowserRouter>
  <Routes>
    <Route path="/"element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path="home"element={<Home/>}/>
    <Route path="about"element={<About/>}/>
    <Route path="contact"element={<Contact/>}/>
    </Route>
  </Routes>
  
  </BrowserRouter>
  <h1>hi</h1>
    </>
  )
}

export default App
