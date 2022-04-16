
import {Routes,Route} from "react-router-dom";
import About from "./Pages/About/About";
import Github from "./Pages/Github/Github";
import Notion from "./Pages/Notion/Notion";
import Members from "./Pages/Members/Members";
import Contacts from "./Pages/Contacts/Contacts";
import Notfound from "./Pages/Notfound/Notfound";




import Navbar from "./Components/Navbar/Navbar"

import './app.scss';

function App() {
  return (
    <div className="app">
      <header>
         <Navbar /> 
      </header>    
     <main>
        <Routes>
          <Route index="/about" element={<About />}/>
            <Route path="github" element={<Github/>}/>
            <Route path="notion" element = {<Notion />}/>
            <Route path="members" element = {<Members />}/>
            <Route path="contacts" element = {<Contacts/>}/>
            <Route path="*" element = {<Notfound/>}/>
        </Routes>
        </main> 
    </div>
  );
}

export default App;
