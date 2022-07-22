import { ChakraTheme, extendTheme, ThemeConfig } from "@chakra-ui/react";
import colors from "@theme/colors";
import components from "@theme/components";
import fonts from "@theme/fonts";
import styles from "@theme/styles";

const config: ThemeConfig = {
    cssVarPrefix: "mito",
    initialColorMode: "dark",
    useSystemColorMode: true,
    disableTransitionOnChange: false
};

export default extendTheme({
    config,
    colors,
    styles,
    components,
    fonts
}) as ChakraTheme;
