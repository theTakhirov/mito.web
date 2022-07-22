import { ThemeComponents } from "@chakra-ui/react";

const components: ThemeComponents = {
    Container: {
        baseStyle: {
            maxWidth: "720px",
            cursor: "none"
        }
    },

    Heading: {
        baseStyle: (props) => {
            return {
                lineHeight: "inherit",
                color: props.colorMode === "dark" ? "white.400" : "dark.400"
            };
        },
        variants: {
            handwrite: {
                fontFamily: "handWriting"
            },
            mono: {
                fontFamily: "mono"
            }
        }
    },

    Text: {
        baseStyle: (props) => {
            return {
                color: props.colorMode === "dark" ? "white.400" : "dark.400"
            };
        },
        variants: {
            handwrite: {
                fontFamily: "handWriting"
            },
            mono: {
                fontFamily: "mono"
            }
        }
    },

    Button: {
        baseStyle: (props) => {
            return {
                borderRadius: "4px",
                fontWeight: "normal",
                lineHeight: "inherit",
                color: props.colorMode === "dark" ? "white.400" : "dark.400",

                _focus: {
                    shadow: "none"
                }
            };
        }
    },

    Link: {
        baseStyle: {
            cursor: "none",

            _focus: {
                shadow: "none"
            }
        },
        variants: {
            active: (props) => {
                return {
                    color:
                        props.colorMode === "dark" ? "yellow.400" : "blue.400"
                };
            },
            nonActive: (props) => {
                return {
                    color: props.colorMode === "dark" ? "white.400" : "dark.400"
                };
            }
        },
        defaultProps: {
            variant: "nonActive"
        }
    }
};

export default components;
