import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { getBackground } from "../apis/bgImages";
export const Background = ({ children }) => {
    const [bg, setBg] = useState("");
    useEffect(() => {
        getBackground().then((bgUrl) => {
            setBg(bgUrl);
        });
    }, []);
    return (
        <Wrapper bg={bg}>
            <Opacity>{children}</Opacity>
        </Wrapper>
    );
};
const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    ${({ bg }) => {
        if (bg) {
            return css`
                background-image: url(${bg});
                background-size: cover;
            `;
        }
        return css`
            background: linear-gradient(#43cea2, #185a9d);
        `;
    }}
`;
const Opacity = styled.div`
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
`;
