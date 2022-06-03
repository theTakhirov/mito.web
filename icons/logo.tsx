import React from "react";

const LogoIcon = ({ fill, width, height }: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg
            width={width ?? 50}
            height={height ?? 50}
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.875 19.6602L0.625 22.7108V38.9608H10.875V19.6602ZM10.8915 19.6553L11.125 19.7918V19.5858L10.8915 19.6553Z"
                fill={fill ?? "#252525"}
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M38.875 39.0208H49.375V22.7708L38.875 19.6458V39.0208Z"
                fill={fill ?? "#252525"}
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.7323 24.7959L19.75 24.8265V39.0207H30V24.8528L38.934 19.6947L33.8601 10.9065L24.9221 16.0669L15.9295 10.875L10.8523 19.6691L19.7323 24.7959Z"
                fill={fill ?? "#252525"}
            />
        </svg>
    );
};

export default LogoIcon;
