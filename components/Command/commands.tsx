import Router from "next/router";
import { useRegisterActions } from "kbar";
import { useColorMode, useColorModeValue } from "@chakra-ui/system";
import GithubIcon from "~/icons/social/github";
import DribbbleIcon from "~/icons/social/dribbble";
import TelegramIcon from "~/icons/social/telegram";
import HomeIcon from "~/icons/home";
import MailIcon from "~/icons/mail";

export function useThemeActions() {
    const { setColorMode } = useColorMode();

    useRegisterActions([
        {
            id: "theme",
            name: "Change theme…",
            keywords: "interface color dark light",
            shortcut: ["t"]
        },
        {
            id: "darkTheme",
            name: "Dark",
            keywords: "dark theme",
            perform: () => {
                setColorMode("dark");
            },
            parent: "theme"
        },
        {
            id: "lightTheme",
            name: "Light",
            keywords: "light theme",
            perform: () => {
                setColorMode("light");
            },
            parent: "theme"
        }
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
                Router.push("/").then();
            }
        }
    ]);
};

export const useContactMenu = () => {
    const color = useColorModeValue("#252525", "#F8FAF7");

    useRegisterActions([
        {
            id: "social-github",
            name: "Github",
            keywords: "github",
            shortcut: ["s", "g"],
            section: "socials || platforms",
            icon: <GithubIcon fill={color} />,
            perform: () => {
                Router.push("https://github.com/thetakhirov").then();
            }
        },
        {
            id: "social-dribbble",
            name: "Dribbble",
            keywords: "dribbble",
            shortcut: ["s", "d"],
            section: "socials || platforms",
            icon: <DribbbleIcon fill={color} />,
            perform: () => {
                Router.push("https://dribbble.com/thetakhirov").then();
            }
        },
        {
            id: "contact-mail",
            name: "Mail",
            keywords: "mail",
            shortcut: ["c", "g"],
            section: "contact",
            icon: <MailIcon fill={color} />,
            perform: () => {
                Router.push("mailto:milly@mally.moe").then();
            }
        },
        {
            id: "contact-telegram",
            name: "Telegram",
            keywords: "telegram",
            shortcut: ["c", "t"],
            section: "contact",
            icon: <TelegramIcon fill={color} />,
            perform: () => {
                Router.push("https://telegram.me/thetakhirov").then();
            }
        }
    ]);
};
