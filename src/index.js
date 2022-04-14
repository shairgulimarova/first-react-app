import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.scss';
import './Pages/About/about.scss'
import './Pages/Github/github.scss'
import './Pages/Notion/notion.scss';
import './Pages/Members/members.scss'
import './Pages/Contacts/contacts.scss'
import './Pages/Notfound/notfound.scss'
import App from './App';


ReactDOM.render(
  <Router>
    
     <App/>
    
  </Router>,
document.getElementById('root')
);
  


