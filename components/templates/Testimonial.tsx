import { TextTestimonialData } from "@/types/Testimonial";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Button from "@/components/molecules/Button";
import { HeadingWContent } from "../atoms/Heading";
import SingleTestimonial from "../molecules/SingleTestimonial";
import { Section } from "../Page";

const renderArrowPrev = (
  clickHandler: () => void,
  hasNext: boolean,
  label: string
) => {
  return (
    <Button
      type="slider"
      className=" absolute z-20 scale-0 rotate-90 top-1/2 -left-12 md:-left-24 md:scale-150"
      onClick={clickHandler}
      disabled={!hasNext}
      icon="arrow-down"
    />
  );
};

const renderArrowNext = (
  clickHandler: () => void,
  hasNext: boolean,
  label: string
) => {
  return (
    <Button
      type="slider"
      className="absolute z-20 scale-0 -rotate-90 top-1/2 -right-12 md:-right-24 md:scale-150"
      onClick={clickHandler}
      disabled={!hasNext}
      icon="arrow-down"
    />
  );
};

type Props = {
  data: {
    content: string;
    profileImageUrl: string;   
    profileName: string;
    profileDesignation: string;
  }[];
};

export default function TextTestimonials({data }: Props) {
  return (
    <div id="testimonials">
      <Section className="!-mt-32 text-white">
        <Carousel
          className="w-5/6 md:w-[72vw] mx-auto mt-24 children:!overflow-visible"
          renderArrowPrev={renderArrowPrev}
          renderArrowNext={renderArrowNext}
          infiniteLoop
          showIndicators={false}
          showThumbs={false}
          showStatus={false}
        >
          {data.map((testimonial, index: number) => {
            const currTest = testimonial;
            const image = currTest.profileImageUrl;

            return (
              <SingleTestimonial
                name={currTest.profileName || ""}
                designation={currTest.profileDesignation || ""}
                image={image}
                review={currTest.content}
                key={index}
              />
            );
          })}
        </Carousel>
      </Section>
    </div>
  );
}
