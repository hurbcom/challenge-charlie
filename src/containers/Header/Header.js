import React from 'react';
import './Header.css';
import FormBtn from '../../components/FormBtn/FormBtn';
import InputSearch from '../../components/InputSearch/InputSearch';

export const header = () => (
    <div className="containerHeader">
        <FormBtn/>
        <InputSearch/>
    </div>
)

export default header;