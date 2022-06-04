import React, {
    createContext,
    memo,
    useEffect,
    useMemo,
    useState,
} from "react";
import {
    Box,
    Center,
    Container,
    FormLabel,
    Input,
    List,
    Text,
    useColorModeValue,
    VStack,
} from "@chakra-ui/react";
import {
    commandTransition,
    overlayTransition,
} from "@components/Command/transition";
import {
    CommandContainerProps,
    CommandContext as CommandContextType,
    CommandInputProps,
    CommandLabelProps,
    CommandListProps,
    CommandProps,
    KeymapProps,
    statusProps,
} from "@components/Command/types";
import { motion, Variants } from "framer-motion";
import tinykeys from "tinykeys";

const CommandContext = createContext<CommandContextType | null>(null);

const CommandProvider = memo<CommandProps>(({ children }) => {
    const [status, setStatus] = useState<statusProps>("close");

    const keymap = useMemo<KeymapProps>(() => {
        return {
            "$mod+k": (event) => {
                event?.preventDefault();
            },
        };
    }, []);

    useEffect(() => {
        tinykeys(window, keymap);
    }, [keymap]);

    return (
        <CommandContext.Provider value={{ keymap, status, setStatus }}>
            {children}
            <CommandContainer status={status}>
                <CommandInput />

                <CommandList label="Home">
                    <CommandItem />
                </CommandList>
            </CommandContainer>
        </CommandContext.Provider>
    );
});

const CommandContainer = ({ status, children }: CommandContainerProps) => {
    const overlay = useColorModeValue("#C6C8C64d", "#2525254d");
    const background = useColorModeValue("#F8FAF7e6", "#252525e6");

    const overlayVariants: Variants = {
        open: {
            opacity: 1,
            background: overlay,
            backdropFilter: "blur(6px)",
            transition: overlayTransition,
            transitionEnd: {
                visibility: "visible",
            },
        },
        close: {
            opacity: 0,
            background: "transparent",
            backdropFilter: "blur(0px)",
            transition: overlayTransition,
            transitionEnd: {
                visibility: "hidden",
            },
        },
    };

    const commandVariants: Variants = {
        open: {
            scale: 1,
            transition: commandTransition,
        },
        close: {
            scale: 0.85,
            transition: commandTransition,
        },
    };

    return (
        <Center
            as={motion.div}
            initial="close"
            animate={status}
            variants={overlayVariants}
            background={overlay}
            position="fixed"
            zIndex={9999}
            top={0}
            bottom={0}
            left={0}
            right={0}
        >
            <Container maxWidth="520px">
                <Box
                    as={motion.div}
                    initial="close"
                    animate={status}
                    variants={commandVariants}
                    borderWidth={2}
                    borderColor="white.400"
                    borderRadius={8}
                    background={background}
                    maxH={480}
                    pb={1.5}
                    overflowY="auto"
                    overflowX="hidden"
                    transition="height 0.3s ease-in-out"
                >
                    {children}
                </Box>
            </Container>
        </Center>
    );
};

const CommandInput = ({ placeholder = "Search" }: CommandInputProps) => {
    return (
        <FormLabel
            width="100%"
            height="100%"
            marginBottom={0}
            _focusWithin={{ outline: "none" }}
        >
            <Input
                placeholder={placeholder}
                fontFamily="TT Firs"
                fontWeight="light"
                borderWidth={0}
                borderBottomWidth={1}
                borderRadius={0}
                _active={{ shadow: "none" }}
                _hover={{ shadow: "none" }}
                _focus={{ shadow: "none" }}
            />
        </FormLabel>
    );
};

const CommandList = ({ label = null, children }: CommandListProps) => {
    return (
        <VStack alignItems="flex-start">
            <List width="100%">
                {label === null || <CommandLabel>{label}</CommandLabel>}
                {children}
            </List>
        </VStack>
    );
};

const CommandItem = () => {
    return <></>;
};

const CommandLabel = ({ children }: CommandLabelProps) => {
    const background = useColorModeValue("white.600", "dark.300");

    return (
        <Box px={4} py={1} background={background}>
            <Text fontSize={12} fontWeight="light">
                {children}
            </Text>
        </Box>
    );
};

CommandProvider.displayName = "CommandProvider";

export default CommandProvider;
