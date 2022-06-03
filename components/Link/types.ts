import { ChakraProps } from "@chakra-ui/react";

export type LinkProps = {
    href: string;
    external?: boolean;
    target?: "_blank" | "_self" | "_parent" | "_top" | string;
    children: React.ReactNode;
} & ChakraProps;
