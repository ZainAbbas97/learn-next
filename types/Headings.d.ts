export type HeadingWContentType = {
    id?: number;
    heading?: HeadingType | null;
    content?: string;
    center?: boolean;
};

export type HeadingType = {
    id?: number;
    title?: string;
    subtitle?: string;
};
