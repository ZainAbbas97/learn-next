// make type
export type ButtonSizes = "sm" | "lg";

export type ButtonType = {
    text: string;
    icon: IconType;
    link?: string;
    size: ButtonSizes;
};
