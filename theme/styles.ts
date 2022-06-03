import { Styles } from "@chakra-ui/theme-tools";

const styles: Styles = {
    global: (props) => {
        return {
            // Variables
            ":root": {
                "--progress-bg":
                    props.colorMode === "dark" ? "#F8FAF7" : "#131313",
            },

            // Change background color
            "html, body": {
                background:
                    props.colorMode === "dark" ? "dark.900" : "white.300",
            },

            // Disable default cursor
            "html, body, *:hover, *:disabled, a, a:hover": {
                cursor: "none !important",
            },
        };
    },
};

export default styles;
