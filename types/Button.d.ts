// make type
export type ButtonSizes = "sm" | "lg";

export type ButtonType = {
    text: string;
    use: string | null;
    icon: IconType;
    link?: string;
    size: ButtonSizes;
};
