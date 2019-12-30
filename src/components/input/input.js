import React, { useState } from "react";

import styled from "styled-components";

import colors from "../../styles/colors";

const Wrapper = styled.div`
    position: relative;

    &:before {
        content: url(${require("../../assets/icons/compass.svg")});
        display: block;
        position: absolute;
        height: 50px;
        width: 50px;

        top: 50%;
        left: 20px;
        transform: translateY(-50%);
    }
`;

const Input = styled.input`
    display: block;
    height: 100%;
    width: 100%;
    outline: none;
    padding: 20px;
    padding-left: 90px;
    box-sizing: border-box;
    border: none;
    color: ${colors["gray"]};
    font-weight: bold;
    font-size: 30px;
`;

export default ({ setLocation }) => {
    const [value, setValue] = useState("");

    return (
        <Wrapper>
            <Input value={value} onChange={e => setValue(e.target.value)} />
        </Wrapper>
    );
};
