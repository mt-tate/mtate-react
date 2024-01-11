import { Routes, Route } from "react-router-dom";
import { LoginForm } from "./routes/LoginForm";
import { Home } from "./routes/Home"
import { About } from "./routes/About";
import { Contact } from "./routes/Contact";
import { Notfound } from "./routes/Notfound"

function App () {
    return (
      <div>
      <Routes> {/*Routesで囲む*/}
        <Route path="/" element={ <LoginForm /> } />
        <Route path="/Home" element={ <Home id={100}/> } />
        <Route path="/About" element={ <About /> } />
        <Route path="/Contact" element={ <Contact />} />
        <Route path="*" element={ <Notfound />} />
      </Routes>
    </div>
    );
}

export default App;