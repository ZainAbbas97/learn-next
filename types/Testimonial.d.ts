import { HeadingWContentType } from "./Headings";

export type TextTestimonialData = {
    id: number;
    __component: string;
    heading: HeadingWContentType | null;
    testimonials: TestimonialContainer;
};

export type TestimonialContainer = {
    data: Testimonials[];
};

export type Testimonials = {
    id: number;
    attributes: TestimonialsAttributes;
};

export type TestimonialsAttributes = {
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    name: string;
    designation: string;
    content: string;
    image: Image;
};

export type Image = {
    data: ImageData;
};

export type ImageData = {
    id: number;
    attributes: ImageDataAttributes;
};

export type ImageDataAttributes = {
    name: string;
    alternativeText: null | string;
    caption: null;
    width: number;
    height: number;
    formats: Formats;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: null;
    provider: string;
    provider_metadata: ProviderMetadata;
    createdAt: Date;
    updatedAt: Date;
};

export type Formats = {
    thumbnail: Thumbnail;
};

export type Thumbnail = {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    path: null;
    width: number;
    height: number;
    size: number;
    url: string;
    provider_metadata: ProviderMetadata;
};

export type ProviderMetadata = {
    public_id: string;
    resource_type: ResourceType;
};

export enum ResourceType {
    Image = "image",
}
