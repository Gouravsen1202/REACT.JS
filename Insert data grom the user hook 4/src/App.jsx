import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Display from "./pages/Display";
import Insert from "./pages/Insert";
import Layout from "./Layout";

const App = () => {
  return (
    <center>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="display" element={<Display />} />
            <Route path="insert" element={<Insert />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </center>
  );
};

export default App;