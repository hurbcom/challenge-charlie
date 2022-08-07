import { FC } from "react";

const CompassIcon: FC<{
    color?: string;
    size?: string;
}> = ({ color = "#001219", size = "45" }) => {
    return (
        <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width={size}
            height={size}
            viewBox="0 0 512 512"
            enableBackground="new 0 0 512 512"
            xmlSpace="preserve"
        >
            <g>
                <g>
                    <path
                        fill={color}
                        d="M256,0C114.604,0,0,114.604,0,256c0,141.375,114.604,256,256,256c141.375,0,256-114.625,256-256
			C512,114.604,397.375,0,256,0z M256,448c-105.875,0-192-86.125-192-192S150.125,64,256,64s192,86.125,192,192S361.875,448,256,448
			z M160,352l128-64l64-128l-128,64L160,352z"
                    />
                </g>
            </g>
        </svg>
    );
};

export default CompassIcon;
