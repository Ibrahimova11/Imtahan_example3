import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Add from "./Pages/Add/Add";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Courses from "./Pages/Courses/Courses";
import Elements from "./Pages/Elements/Elements";
import News from "./Pages/News/News";
import Home from "./Pages/Home/Home";


function App() {
  return (
<BrowserRouter>
<Navbar/>
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/Home" element={<Home/>} />
<Route path="/About" element={<About/>} />
<Route path="/Courses" element={<Courses/>} />
<Route path="/Elements" element={<Elements/>} />
<Route path="/News" element={<News/>} />
<Route path="/Contact" element={<Contact/>} />
<Route path="/Add" element={<Add/>} />

</Routes>
<Footer/>

</BrowserRouter>
  );
}

export default App;