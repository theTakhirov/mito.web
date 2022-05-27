import { color, ThemeComponents } from "@chakra-ui/react";

const components: ThemeComponents = {
    Container: {
        baseStyle: {
            maxWidth: "1132px",
            cursor: "none",
        },
    },

    Heading: {
        baseStyle: (props) => {
            return {
                lineHeight: "inherit",
                color: props.colorMode === "dark" ? "white.400" : "dark.400",
            };
        },
        variants: {
            handwrite: {
                fontFamily: "handWriting",
            },
        },
    },

    Text: {
        baseStyle: (props) => {
            return {
                color: props.colorMode === "dark" ? "white.400" : "dark.400",
            };
        },
        variants: {
            handwrite: {
                fontFamily: "handWriting",
            },
        },
    },

    Button: {
        baseStyle: (props) => {
            return {
                borderWidth: 1,
                borderRadius: 0,
                fontWeight: "normal",
                lineHeight: "inherit",
                color: props.colorMode === "dark" ? "white.400" : "dark.400",
                borderColor:
                    props.colorMode === "dark" ? "white.400" : "dark.400",

                _focus: {
                    shadow: "none",
                },
            };
        },
    },

    Link: {
        baseStyle: {
            cursor: "none",

            _focus: {
                shadow: "none",
            },
        },
        variants: {
            active: (props) => {
                return {
                    color:
                        props.colorMode === "dark" ? "yellow.400" : "blue.400",
                };
            },
            nonActive: (props) => {
                return {
                    color:
                        props.colorMode === "dark" ? "white.400" : "dark.400",
                };
            },
        },
        defaultProps: {
            variant: "nonActive",
        },
    },
};

export default components;
