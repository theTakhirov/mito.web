import {
    useContactMenu,
    useNavigationMenu,
    useThemeActions,
} from "@components/Command/commands";

const RegisterMenu = () => {
    useThemeActions();
    useNavigationMenu();
    useContactMenu();

    return <></>;
};

export default RegisterMenu;
