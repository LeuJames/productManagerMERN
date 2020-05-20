import React from 'react';
import {Router} from '@reach/router';
import Main from './Views/Main';
import Detail from './Views/Details';
import Update from './Views/Update';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Router>
          <Main path='/'/>
          <Detail path='/products/:id'/>
          <Update path='/products/:id/edit'/>
        </Router>
      </div>


    </div>
  );
}

export default App;
