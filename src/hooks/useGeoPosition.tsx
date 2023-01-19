import { useEffect, useReducer } from "react";

type State = {
    isLoading: boolean;
    position: GeolocationPosition | null;
    coords: null | {
        latitude: number;
        longitude: number;
    };
    error: GeolocationPositionError | string | null;
};

type Action =
    | { type: "success"; position: GeolocationPosition }
    | { type: "error"; error: GeolocationPositionError | string | null }
    | { type: ErrorConstructor };

function reducer(state: State, action: Action) {
    switch (action.type) {
        case "error": {
            return {
                ...state,
                isLoading: false,
                error: action.error,
            };
        }
        case "success": {
            return {
                ...state,
                isLoading: false,
                position: action.position,
                coords: {
                    latitude: action.position.coords.latitude,
                    longitude: action.position.coords.longitude,
                },
            };
        }
        default:
            throw new Error(`Error on action: ${action.type}`);
    }
}

export default function useGeoPosition() {
    const [state, dispatch] = useReducer(reducer, {
        isLoading: true,
        position: null,
        coords: null,
        error: null,
    });

    useEffect(() => {
        if (!navigator.geolocation) {
            dispatch({
                type: "error",
                error: "Geolocation is not supported by this browser.",
            });
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => dispatch({ type: "success", position }),
            (error) => dispatch({ type: "error", error })
        );
    }, []);

    return state;
}
