import { Styles } from "@chakra-ui/theme-tools";

const styles: Styles = {
    global: (props) => {
        return {
            // Variables
            ":root": {
                "--progress-bg":
                    props.colorMode === "dark" ? "#F8FAF7" : "#131313"
            },

            // Change selection color
            "::selection": {
                background: props.colorMode === "dark" ? "#F8FAF7" : "#131313",
                color: props.colorMode === "dark" ? "#131313" : "#F8FAF7"
            },

            // Scrollbar
            "::-webkit-scrollbar": {
                width: "4px",
                background: props.colorMode === "dark" ? "#252525" : "#DFE1DE"
            },
            "::-webkit-scrollbar-track": {
                background: props.colorMode === "dark" ? "#252525" : "#DFE1DE"
            },
            "::-webkit-scrollbar-thumb": {
                background: props.colorMode === "dark" ? "#C6C8C6" : "#202020"
            },

            // Change background color
            "html, body": {
                background:
                    props.colorMode === "dark" ? "dark.900" : "white.300"
            },

            // Disable default cursor
            "html, body, *:hover, *:disabled, a, a:hover": {
                cursor: "none !important"
            }
        };
    }
};

export default styles;
