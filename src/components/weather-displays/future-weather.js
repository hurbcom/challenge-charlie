import React from "react";

import styled from "styled-components";

const Container = styled.div``;

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;

    align-content: center;
`;

export default ({ day, temperature = "--" }) => {
    return (
        <Wrapper>
            <div></div>
            <div>
                <h1>{day}</h1>
                <p>{temperature} ºC</p>
            </div>
        </Wrapper>
    );
};
