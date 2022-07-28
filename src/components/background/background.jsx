import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { getBackground } from "../../apis/bingImages";
export const Background = ({ children }) => {
    const [bg, setBg] = useState("");
    useEffect(() => {
        getBackground().then((bgUrl) => {
            setBg(bgUrl);
        });
    }, []);
    return <Wrapper bg={bg}>{children}</Wrapper>;
};
const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    ${({ bg }) => {
        console.log(bg);
        if (bg) {
            return css`
                background-image: url(${bg});
            `;
        }
    }}
`;
