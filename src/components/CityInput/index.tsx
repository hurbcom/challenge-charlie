import React from 'react';
import { BiCompass } from 'react-icons/bi';
import * as S from './style';

const index = () => {
    return (
        <S.InputHolder>
            <S.IconWrapper>
                <BiCompass color="8d8986" size="50px" />
            </S.IconWrapper>
            <S.InputWrapper>
                <S.CustomInput placeholder="Rio de Janeiro, BR" />
            </S.InputWrapper>
        </S.InputHolder>
    );
};

export default index;
