import React from "react";
import { Input } from './Stylesheet';

const Component = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('enviou')
    };

    return (
        <div className="text-align___center">
            <form onSubmit={handleSubmit}>
                <Input type="text" placeholder="Digite aqui" />
            </form>
        </div>
    );
};

export default Component;