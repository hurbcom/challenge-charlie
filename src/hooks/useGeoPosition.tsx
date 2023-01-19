import { useEffect, useReducer } from "react";

enum ActionType {
    ERROR,
    SUCCESS,
    START,
}

enum Status {
    IDLE = "idle",
    SUCCESS = "resolved",
    ERROR = "rejected",
    START = "pending",
}

type LocationError = GeolocationPositionError | string | null;

type Action =
    | { type: ActionType.START }
    | { type: ErrorConstructor }
    | { type: ActionType.ERROR; error: LocationError }
    | { type: ActionType.SUCCESS; position: GeolocationPosition };

type State = {
    status: Status;
    position: GeolocationPosition | null;
    error: LocationError;
};

function reducer(state: State, action: Action) {
    switch (action.type) {
        case ActionType.ERROR: {
            return {
                ...state,
                error: action.error,
                status: Status.ERROR,
            };
        }
        case ActionType.SUCCESS: {
            return {
                ...state,
                position: action.position,
                status: Status.SUCCESS,
            };
        }
        case ActionType.START: {
            return {
                ...state,
                status: Status.START,
            };
        }
        default:
            throw new Error(`Error on action: ${action.type}`);
    }
}

export default function useGeoPosition() {
    const [state, dispatch] = useReducer(reducer, {
        status: Status.IDLE,
        position: null,
        error: null,
    });

    useEffect(() => {
        if (!navigator.geolocation) {
            dispatch({
                type: ActionType.ERROR,
                error: "Geolocation is not supported by this browser.",
            });
        }

        dispatch({ type: ActionType.START });
        navigator.geolocation.getCurrentPosition(
            (position) => dispatch({ type: ActionType.SUCCESS, position }),
            (error) => dispatch({ type: ActionType.ERROR, error })
        );
    }, []);

    const { status } = state;

    return {
        isLoading: status === "idle" || status === "pending",
        isResolved: status === "resolved",
        isRejected: status === "rejected",
        ...state,
    };
}
