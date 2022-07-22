import React from "react";
import {
    KBarProvider,
    KBarResults,
    KBarPortal,
    useMatches,
    ActionId
} from "kbar";
import {
    ChakraPositioner,
    ChakraAnimator,
    ChakraSearch
} from "@components/Command/styled";
import {
    ResultItemProps,
    withChildren,
    withItem
} from "@components/Command/types";
import { keyframes, useColorModeValue } from "@chakra-ui/system";
import { Box, Kbd, Text } from "@chakra-ui/layout";
import RegisterMenu from "@components/Command/register";

const CommandProvider = ({ children }: withChildren) => {
    return (
        <KBarProvider>
            <RegisterMenu />

            <KBarPortal>
                <CommandPositioner>
                    <CommandAnimator>
                        <CommandSearch />

                        <RenderResult />
                    </CommandAnimator>
                </CommandPositioner>
            </KBarPortal>

            {children}
        </KBarProvider>
    );
};

const CommandPositioner = ({ children }: withChildren) => {
    const overlayFrom = useColorModeValue("#c6c8c600", "#25252500");
    const overlayTo = useColorModeValue("#c6c8c64d", "#2525254d");
    const keyframe = keyframes`
      from {
        background: ${overlayFrom};
      }
      to {
        background: ${overlayTo};
      }
    `;

    return (
        <ChakraPositioner
            zIndex={9999}
            background={overlayTo}
            padding="0 20px !important"
            alignItems="center !important"
            animation={`${keyframe} .22s ease`}
        >
            {children}
        </ChakraPositioner>
    );
};

const CommandAnimator = ({ children }: withChildren) => {
    const color = useColorModeValue("dark.900", "white.400");
    const background = useColorModeValue("#f8faf7", "#252525");

    return (
        <ChakraAnimator
            background={background}
            maxWidth="520px"
            width="full"
            outline="none"
            borderWidth={2}
            borderColor={color}
            borderRadius="8px"
            overflowY="hidden"
            boxSizing="content-box"
        >
            {children}
        </ChakraAnimator>
    );
};

const CommandSearch = () => {
    const color = useColorModeValue("dark.600", "#F8FAF74d");

    return (
        <ChakraSearch
            defaultPlaceholder="Search..."
            background={"transparent"}
            width="full"
            paddingX={4}
            paddingY={3}
            borderBottomWidth={1}
            borderBottomColor={color}
            _focus={{ outline: "none", shadow: "none" }}
            _focusWithin={{ outline: "none", shadow: "none" }}
        />
    );
};

const RenderResult = () => {
    const { results, rootActionId } = useMatches();

    return (
        <KBarResults
            items={results}
            maxHeight={350}
            onRender={({ item, active }) =>
                typeof item === "string" ? (
                    <ResultLabel item={item} />
                ) : (
                    <ResultItem
                        item={item}
                        active={active}
                        currentRootActionId={rootActionId as ActionId}
                    />
                )
            }
        />
    );
};

const ResultLabel = React.forwardRef(
    ({ item }: withItem, ref: React.Ref<HTMLDivElement>) => {
        const background = useColorModeValue("white.600", "dark.300");
        const opacity = useColorModeValue("0.65", "0.5");

        return (
            <Box
                ref={ref}
                display="block"
                width="full"
                background={background}
                opacity={opacity}
                paddingX={4}
                paddingY={1}
                fontSize={10}
                textTransform="uppercase"
            >
                {item}
            </Box>
        );
    }
);

const ResultItem = React.forwardRef(
    (
        { item, active, currentRootActionId }: ResultItemProps,
        ref: React.Ref<HTMLDivElement>
    ) => {
        const background = useColorModeValue("#DFE1DE", "#303030");
        const ancestors = React.useMemo(() => {
            if (!currentRootActionId) return item.ancestors;

            const index = item.ancestors.findIndex(
                (ancestor) => ancestor.id === currentRootActionId
            );

            return item.ancestors.slice(index + 1);
        }, [item.ancestors, currentRootActionId]);

        return (
            <Box
                ref={ref}
                width="full"
                paddingX={4}
                paddingY={3}
                background={active ? background : "transparent"}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
            >
                <Box display="flex" gap={2} alignItems="center" fontSize={14}>
                    {item.icon && item.icon}
                    <Box display="flex" flexDirection="row">
                        <Box display="flex" flexDirection="row">
                            {ancestors.length > 0 &&
                                ancestors.map((ancestor) => (
                                    <React.Fragment key={ancestor.id}>
                                        <Box opacity={0.5} marginRight="8px">
                                            {ancestor.name}
                                        </Box>
                                        <Box marginRight="8px">&rsaquo;</Box>
                                    </React.Fragment>
                                ))}
                            <Text>{item.name}</Text>
                        </Box>
                        {item.subtitle && (
                            <Text fontSize={12} opacity={0.75}>
                                {item.subtitle}
                            </Text>
                        )}
                    </Box>
                </Box>
                {item.shortcut?.length ? (
                    <Box
                        aria-hidden
                        display="grid"
                        gridAutoFlow="column"
                        gap="5px"
                    >
                        {item.shortcut.map((key) => (
                            <Kbd
                                key={key}
                                verticalAlign="middle"
                                fontSize={12}
                                paddingX={2}
                                paddingY={1}
                            >
                                {key}
                            </Kbd>
                        ))}
                    </Box>
                ) : null}
            </Box>
        );
    }
);

ResultItem.displayName = "ResultItem";
ResultLabel.displayName = "ResultLabel";

export default CommandProvider;
