import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './components/Memoria/Memoria.css';
import Memoria from './components/Memoria/Memoria';

ReactDOM.render(
	<React.StrictMode>
		<Memoria />
	</React.StrictMode>, 
	document.getElementById('root')
);