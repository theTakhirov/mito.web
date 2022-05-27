import { Styles } from "@chakra-ui/theme-tools";

const styles: Styles = {
    global: (props) => {
        return {
            // Change background color
            "html, body": {
                background:
                    props.colorMode === "dark" ? "dark.400" : "white.400",
            },

            // Disable default cursor
            "html, body, *:hover, *:disabled, a, a:hover": {
                cursor: "none !important",
            },
        };
    },
};

export default styles;
