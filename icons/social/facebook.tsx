import React from "react";

const FacebookIcon = ({
    fill,
    width,
    height,
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
                d="M9.198 21.5H13.198V13.49H16.802L17.198 9.51H13.198V7.5C13.198 7.23478 13.3034 6.98043 13.4909 6.79289C13.6784 6.60536 13.9328 6.5 14.198 6.5H17.198V2.5H14.198C12.8719 2.5 11.6001 3.02678 10.6625 3.96447C9.72478 4.90215 9.198 6.17392 9.198 7.5V9.51H7.198L6.802 13.49H9.198V21.5Z"
                fill={fill ?? "#252525"}
            />
        </svg>
    );
};

export default FacebookIcon;
