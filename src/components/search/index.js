import React from "react";
import useContainer from './Container';
import { Input } from './Stylesheet';

const Component = () => {

    const { handleSubmit } = useContainer();

    return (
        <div className="text-align___center">
            <form onSubmit={handleSubmit}>
                <Input type="text" name="search" placeholder="Digite aqui" />
            </form>
        </div>
    );
};

export default Component;