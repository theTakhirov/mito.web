import Router from "next/router";
import { useRegisterActions } from "kbar";
import { useColorMode, useColorModeValue } from "@chakra-ui/system";
import GithubIcon from "~/icons/social/github";
import InstagramIcon from "~/icons/social/instagram";
import DribbbleIcon from "~/icons/social/dribbble";
import TelegramIcon from "~/icons/social/telegram";
import HomeIcon from "~/icons/home";

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
    const color = useColorModeValue("#252525", "#F8FAF7");

    useRegisterActions([
        {
            id: "navigation-home",
            name: "Home",
            keywords: "Home",
            shortcut: ["g", "h"],
            section: "Navigation",
            icon: <HomeIcon fill={color} width={24} height={24} />,
            perform: () => {
                Router.push("/");
            },
        },
    ]);
};

export const useContactMenu = () => {
    const color = useColorModeValue("#252525", "#F8FAF7");

    useRegisterActions([
        {
            id: "social-github",
            name: "Github",
            keywords: "github",
            shortcut: ["c", "g"],
            section: "socials",
            icon: <GithubIcon fill={color} />,
            perform: () => {
                Router.push("https://github.com/thetakhirov");
            },
        },
        {
            id: "social-instagram",
            name: "Instagram",
            keywords: "instagram",
            shortcut: ["c", "i"],
            section: "socials",
            icon: <InstagramIcon fill={color} />,
            perform: () => {
                Router.push("https://instagram.com/thetakhirov");
            },
        },
        {
            id: "social-dribbble",
            name: "Dribbble",
            keywords: "dribbble",
            shortcut: ["c", "d"],
            section: "socials",
            icon: <DribbbleIcon fill={color} />,
            perform: () => {
                Router.push("https://dribbble.com/thetakhirov");
            },
        },
        {
            id: "social-telegram",
            name: "Telegram",
            keywords: "telegram",
            shortcut: ["c", "t"],
            section: "socials",
            icon: <TelegramIcon fill={color} />,
            perform: () => {
                Router.push("https://telegram.me/thetakhirov");
            },
        },
    ]);
};
