import { SVGProps } from "react";

const CompassIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg
            width={30}
            height={30}
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M15 0C6.715 0 0 6.715 0 15c0 8.284 6.715 15 15 15 8.284 0 15-6.716 15-15 0-8.285-6.716-15-15-15Zm0 26.25C8.796 26.25 3.75 21.204 3.75 15S8.796 3.75 15 3.75 26.25 8.796 26.25 15 21.204 26.25 15 26.25Zm-5.625-5.625 7.5-3.75 3.75-7.5-7.5 3.75-3.75 7.5Z"
                fill={props.fill}
            />
        </svg>
    );
};

export default CompassIcon;
