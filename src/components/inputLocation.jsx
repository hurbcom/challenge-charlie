import styled from "styled-components";

export const InputLocation = ({ location, setLocation }) => {
    return (
        <InputWrapper data-icon={"("}>
            <StyledInput
                defaultValue={`${location?.municipality ?? ""}${
                    location?.state ? `,${location?.state}` : ""
                }`}
                onBlur={(evt) => {
                    const [municipality, state] = evt.target.value.split(",");
                    setLocation({ municipality, state });
                }}
            />
        </InputWrapper>
    );
};
const InputWrapper = styled.div`
    background-color: #ffffffca;
    display: flex;
    align-items: center;
    &:before {
        font-size: 9vh;
        height: 9vh;
        color: #8d8986;
        margin: 0 2vh;
    }
`;
const StyledInput = styled.input`
    width: calc(100% - 14vh);
    height: 100%;
    font-size: 5.5vh;
    border: none;
    background-color: transparent;
    color: #666;
`;
