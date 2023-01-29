import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

import CompassIcon from "../icons/compass";
import useGeoPosition from "@/hooks/useGeoPosition";
import { CoordsProps, LocationInfo, OpenCageResponse } from "@/types";

import * as S from "./styles";

const url = `https://api.opencagedata.com/geocode/v1/json?key=${process.env.NEXT_PUBLIC_OPEN_CAGE_KEY}&language=en`;

type Props = {
    setLocationCoords: ({ latitude, longitude }: CoordsProps) => void;
};

export default function LocationInput({ setLocationCoords }: Props) {
    const [value, setValue] = useState("");
    const [locationLoading, setLocationLoading] = useState(true);
    const [data, setData] = useState<OpenCageResponse | null>(null);
    const [isListOpen, setIsListOpen] = useState(false);

    const { position, status, error } = useGeoPosition();

    useEffect(() => {
        if (error)
            toast.error("Your location is not available", {
                id: "geoposition",
            });
    }, [error]);

    useEffect(() => {
        if (position?.coords) {
            fetch(
                `${url}&q=${position.coords.latitude},${position.coords.longitude}`
            )
                .then((res) => res.json())
                .then((data: OpenCageResponse) => {
                    const { formatted, geometry } = data.results[0];
                    setValue(formatted);
                    setLocationCoords({
                        latitude: geometry.lat,
                        longitude: geometry.lng,
                    });
                })
                .finally(() => setLocationLoading(false))
                .catch(() =>
                    toast.error("Error searching for your location", {
                        id: "first-location",
                    })
                );
        }
    }, [position, setLocationCoords]);

    function handleInputChange(input: string) {
        setValue(input);

        if (input.length > 3) {
            setIsListOpen(true);
            fetch(`${url}&q=${value}`)
                .then((res) => res.json())
                .then((data: OpenCageResponse) => setData(data))
                .catch(() =>
                    toast.error("Error searching for your location", {
                        id: "search-location",
                    })
                );
        } else {
            setData(null);
        }
    }

    function handleListItemClick(item: LocationInfo) {
        setIsListOpen(false);
        setValue(item.formatted);
        setLocationCoords({
            latitude: item.geometry.lat,
            longitude: item.geometry.lng,
        });
    }

    return (
        <S.Wrapper>
            <S.InputWrapper>
                <S.IconWrapper>
                    <CompassIcon width={30} height={30} />
                </S.IconWrapper>
                {!error && (status === "pending" || locationLoading) ? (
                    <S.LoadingMessage>
                        Getting your location...
                    </S.LoadingMessage>
                ) : (
                    <S.Input
                        placeholder="Type the location name"
                        value={value}
                        onFocus={(e) => e.target.select()}
                        onChange={(e) =>
                            handleInputChange(e.currentTarget.value)
                        }
                    />
                )}
            </S.InputWrapper>
            {isListOpen && (
                <S.List>
                    {data?.results.length ? (
                        data?.results.map((item) => (
                            <S.ListItem
                                key={item.annotations.MGRS}
                                onClick={() => handleListItemClick(item)}
                            >
                                {item.formatted}
                            </S.ListItem>
                        ))
                    ) : (
                        <S.ListItem className="empty-state">
                            No matches found!
                        </S.ListItem>
                    )}
                </S.List>
            )}
        </S.Wrapper>
    );
}
