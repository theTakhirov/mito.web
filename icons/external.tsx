import React from "react";

const ExternalIcon = ({
    fill,
    width,
    height
}: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg
            width={width ?? 24}
            height={height ?? 24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M5.6138 21L3 18.378L14.6657 6.70866H8.02369V3H21V15.9803H17.2925V9.33254L5.6138 21Z"
                fill={fill ?? "#252525"}
            />
        </svg>
    );
};

export default ExternalIcon;
