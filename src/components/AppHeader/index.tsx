import { FormEvent, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Icon from "components/Icon";
import useGeolocation from "hooks/useGeolocation";
import useGeocode, { AppCoordinatesType } from "hooks/useGeocode";

const AppHeaderBase = styled.div`
    background-color: rgba(255, 255, 255, 0.9);
    color: #212121;
    display: flex;
    padding: 8px;
    gap: 8px;
    align-items: center;
    color: #8d8987;

    &:focus-within {
        background-color: rgba(255, 255, 255, 1);
    }
`;

const Input = styled.input`
    border: none;
    padding: 8px;
    display: flex;
    flex-grow: 1;
    border: none;
    color: inherit;
    background-color: transparent;
`;

export type AppHeaderType = {
    onChange: (coords: AppCoordinatesType) => void;
};

const AppHeader = ({ onChange }: AppHeaderType) => {
    const { translate, result } = useGeocode();
    const searchInputRef = useRef<HTMLInputElement>(null);
    const [query, setQuery] = useState<string>("");
    const { coords } = useGeolocation();
    const handleOnChange = (event: FormEvent<HTMLInputElement>) => {
        setQuery(event.currentTarget.value);
    };

    useEffect(() => {
        if (!result?.latitude || !result?.longitude) {
            return;
        }
        onChange({
            latitude: result.latitude,
            longitude: result.longitude,
        });
    }, [result]);

    useEffect(() => {
        if (!coords?.latitude || !coords?.longitude) {
            return;
        }
        translate({
            search: {
                latitude: coords.latitude,
                longitude: coords.longitude,
            },
        });
    }, [coords]);

    useEffect(() => {
        if (query.length > 2) {
            translate({ search: query });
        }
    }, [query]);

    return (
        <AppHeaderBase role="search">
            <Icon name="compass" size="large" />
            <Input
                type="text"
                ref={searchInputRef}
                placeholder="Buscar um lugar..."
                value={query}
                onChange={handleOnChange}
            />
        </AppHeaderBase>
    );
};

export default AppHeader;
