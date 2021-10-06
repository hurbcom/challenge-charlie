import React, { useMemo, useCallback, useState } from 'react';
import { BiCompass } from 'react-icons/bi';
import GeoLocationService from 'services/GeoLocationService';
import * as S from './style';

type CityInputProps = {
    state: string;
    city: string;
    // eslint-disable-next-line no-unused-vars
    onChangeCity: (location: any) => void;
};

// usado para fazer o controle do debounce
let timeoutControl: any;

const CityInput = ({
    state = 'Rio de Janeiro',
    city = 'Rio de Janeiro',
    onChangeCity
}: CityInputProps) => {
    const [inputWarning, setInputWarning] = useState(false);
    const cityPlaceHolder = useMemo(() => {
        if (state && city) return `${state}, ${city}`;
        return '';
    }, [city, state]);

    const handleChange = useCallback(
        async event => {
            if (timeoutControl) clearTimeout(timeoutControl);
            timeoutControl = setTimeout(async () => {
                const { value } = event.target;
                if (value.length > 0) {
                    try {
                        const response =
                            await GeoLocationService.getPositionByCityName(
                                value
                            );
                        if (response) {
                            setInputWarning(false);
                            onChangeCity(response);
                        } else {
                            setInputWarning(true);
                        }
                    } catch (error) {
                        setInputWarning(true);
                        console.error(error);
                    }
                }
            }, 1000);
        },
        [onChangeCity]
    );

    return (
        <S.InputHolder data-testid="city-input-holder" border={inputWarning}>
            <S.IconWrapper>
                <BiCompass color="8d8986" size="50px" />
            </S.IconWrapper>
            <S.InputWrapper>
                <S.CustomInput
                    type="text"
                    data-testid="city-input"
                    onChange={handleChange}
                    placeholder={cityPlaceHolder}
                />
            </S.InputWrapper>
        </S.InputHolder>
    );
};

export default CityInput;
