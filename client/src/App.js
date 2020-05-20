import React from 'react';
import {Router} from '@reach/router';
import Main from './Views/Main';
import Detail from './Views/Details';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path='/products'/>
        <Detail path='products/:id'/>
      </Router>

    </div>
  );
}

export default App;
