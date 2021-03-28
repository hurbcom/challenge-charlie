import React from "react"
import styled from "styled-components";
import { CgSpinner } from 'react-icons/cg'
import { DropdownItem, StyledDropdown } from "./styled";

interface BaseOption {
    id: string | number;
    value: string;
};


interface IProps<T> {
    loading: boolean
    data: T[]
    onClickOption: (option: T) => void;
}

function DropDownMenu<T extends BaseOption>({ data, loading, onClickOption, ...rest }: IProps<T>, ref: React.ForwardedRef<HTMLDivElement>) {
    function getDropdownOptions() {
        if (data.length) {
            return (
                data.length && data.map((option) => (
                    <DropdownItem
                        selectable
                        key={option.id}
                        onClick={() => {
                            if (onClickOption) {
                                return onClickOption(option)
                            }
                        }}>
                        {option.value}
                    </DropdownItem>
                ))
            )
        } else if (!loading) {
            return (
                <DropdownItem >
                    No Results
                </DropdownItem>
            )
        }
    }
    return (
        <StyledDropdown ref={ref} {...rest}>
            {loading && <Spinner />}
            {getDropdownOptions()}
        </StyledDropdown >
    )
}

export default React.forwardRef(DropDownMenu) as <T extends BaseOption>(props: IProps<T> & { ref?: React.ForwardedRef<HTMLDivElement> }) => JSX.Element;

const Spinner = styled(CgSpinner)`
    animation: spin infinite 2s linear;
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 24px;

    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`