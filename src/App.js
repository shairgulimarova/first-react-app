
import {Routes,Route} from "react-router-dom";
import { About, Skills, Blog, Members, Contacts,Notfound } from "./Pages";







import {Navbar,Footer} from './Components'

import './app.scss';

function App() {
  return (
    <div className="app">
      <header>
         <Navbar /> 
      </header>    
     <main>
        <Routes>

          <Route index="/" element={<About />}/>
            <Route path="skills" element={<Skills/>}/>
            <Route path="blog" element = {<Blog />}/>
            <Route path="members" element = {<Members />}/>
            <Route path="contacts" element = {<Contacts/>}/>
            <Route path="*" element = {<Notfound/>}/>
        </Routes>
        </main> 

        <footer>
          <Footer/>
        </footer>
        
    </div>
  );
}

export default App;
