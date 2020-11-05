import React from 'react';
import ReactDOM from 'react-dom';
import Title from './components/Title.jsx'


const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Title name="Isaac" />, wrapper) : false;
