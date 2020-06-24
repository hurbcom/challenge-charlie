import React from 'react';
import ReactDOM from 'react-dom';
import Background from './js/components/Background';
import Form from './js/components/Form';
import Temperature from './js/components/Temperature';
import './index.css';
import './assets/fonts/stylesheet.css';



const index = (
    <main>
        {/* <a href="" data-icon="(">Link</a> */}
        <Background>
            <div className="container">
                <Form/>
                <Temperature/>
            </div>
        </Background>
    </main>
);

ReactDOM.render(index, document.getElementById('app'));
