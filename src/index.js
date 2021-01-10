import React from 'react';
import ReactDOM from 'react-dom';
import APP from '../src/components/APP';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(<BrowserRouter><APP/></BrowserRouter>, document.querySelector('#root'));
