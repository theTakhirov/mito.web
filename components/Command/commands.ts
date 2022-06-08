import Router from "next/router";
import { useRegisterActions } from "kbar";
import { useColorMode } from "@chakra-ui/system";

export const initialCommands = [{}];

export function useThemeActions() {
    const { setColorMode } = useColorMode();

    useRegisterActions([
        {
            id: "theme",
            name: "Change theme…",
            keywords: "interface color dark light",
            shortcut: ["t"],
        },
        {
            id: "darkTheme",
            name: "Dark",
            keywords: "dark theme",
            perform: () => {
                setColorMode("dark");
            },
            parent: "theme",
        },
        {
            id: "lightTheme",
            name: "Light",
            keywords: "light theme",
            perform: () => {
                setColorMode("light");
            },
            parent: "theme",
        },
    ]);
}

export const useNavigationMenu = () => {
    //

    useRegisterActions([
        {
            id: "navigation-home",
            name: "Home",
            keywords: "Home",
            shortcut: ["g", "h"],
            section: "Navigation",
            perform: () => {
                Router.push("/");
            },
        },
    ]);
};
