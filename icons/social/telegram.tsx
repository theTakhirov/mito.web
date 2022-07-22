import React from "react";

const TelegramIcon = ({
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
                d="M22.4393 4.62225L19.2705 19.566C19.0313 20.6205 18.408 20.883 17.5223 20.3865L12.6938 16.8285L10.3643 19.0695C10.1063 19.3275 9.891 19.5428 9.39375 19.5428L9.741 14.6258L18.6893 6.54C19.0785 6.1935 18.6045 6.00075 18.0848 6.348L7.02225 13.314L2.25975 11.823C1.224 11.4998 1.20525 10.7873 2.47575 10.29L21.1035 3.11325C21.966 2.79 22.7205 3.30525 22.4393 4.623V4.62225Z"
                fill={fill ?? "#252525"}
            />
        </svg>
    );
};

export default TelegramIcon;
