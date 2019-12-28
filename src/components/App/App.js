import React from 'react';
import './App.scss';
import {Route} from 'react-router-dom';

import Homepage from '../../pages/Homepage/Homepage';


function App() {
    return (
        <div>
            <Route exact path="/" component={Homepage} />
        </div>
    );
}

export default App;
