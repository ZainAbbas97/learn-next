import React from "react";
import { IconType } from "../../types/Icon";
import Heading from "../atoms/Heading";
import Icon from "../atoms/Icon";
import MirageContactForm from "../molecules/MirageContactForm";
import { Section } from "../Page";

type Props = {
  title?: string;
  subtitle?: string;

  items?: {
    icon: IconType;
    text: string;
  }[];
  activeTag?: string;
};

export default function ContactUs({
  title = "Book a Free Today!",
  subtitle = "CONTACT US",
  items = [
    {
      icon: "location-pin",
      text: "Islamabad, Pakistan",
    },
    {
      icon: "phone",
      text: "+92 317 5099 577",
    },
    {
      icon: "email",
      text: "zain4abbas7@gmail.com",
    },
  ],
  activeTag,
}: Props) {
  return (
    <Section id="contact">
      <div className="flex flex-row flex-wrap justify-between w-full md:flex-nowrap">
        <div className="w-full md:w-1/2">
          <Heading heading={title} subTitle={subtitle} />
          <div className="flex flex-col gap-5 mt-5">
            {items.map((detail, index) => (
              <div key={index} className="flex items-center gap-3">
                <Icon name={detail.icon} />
                <p>{detail.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full mt-8 md:w-1/2 md:my-0">
          <MirageContactForm activeTag={activeTag} />
        </div>
      </div>
    </Section>
  );
}
