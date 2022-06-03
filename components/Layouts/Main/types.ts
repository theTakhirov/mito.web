export interface MetaType {
    name: string;
    content: string;
}

export type LayoutProps = {
    title?: string | false;
    meta?: MetaType[] | null;
    children: React.ReactNode;
};
