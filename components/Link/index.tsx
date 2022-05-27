import React from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { ChakraProps, Link as ChakraLink } from "@chakra-ui/react";

type LinkProps = {
    href: string;
    external?: boolean;
    target?: "_blank" | "_self" | "_parent" | "_top" | string;
    children: React.ReactNode;
} & ChakraProps;

const Link = ({
    href,
    children,
    external = false,
    target = "_self",
    ...props
}: LinkProps) => {
    const router = useRouter();
    const variant: "active" | "nonActive" =
        router.pathname === href || router.asPath === href
            ? "active"
            : "nonActive";

    if (external) {
        return (
            <ChakraLink
                variant={variant}
                href={href}
                target={target}
                {...props}
            >
                {children}
            </ChakraLink>
        );
    }

    return (
        <NextLink href={href}>
            <ChakraLink variant={variant} href={href} {...props}>
                {children}
            </ChakraLink>
        </NextLink>
    );
};

export default Link;
