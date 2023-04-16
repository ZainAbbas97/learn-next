import React from "react";
import Icon from "@/components/atoms/Icon";
import { IconType } from "@/types/Icon.d";
import Homepage from "@/components/templates/Homepage";
import Testimonial from "@/components/templates/Testimonial";

export default function Hero() {
  return (
    <>
      <Homepage />
      <Testimonial
        data={[
          {
            content:
              "I have been working with Atoro for the past year and have been consistently impressed with the quality of their work. They have a keen eye for great practices and always deliver projects on time. I highly recommend them to anyone in need of a specialist.",
            profileImageUrl: "/images/HomepageImage.png",
            profileName: "Zain Abbas",
            profileDesignation: "Lead Designer at Atoro",
          },
          {
            content:
              "I have been working with Atoro for the past year and have been consistently impressed with the quality of their work. They have a keen eye for great practices and always deliver projects on time. I highly recommend them to anyone in need of a specialist.",
            profileImageUrl: "/images/HomepageImage.png",
            profileName: "Zain Abbas",
            profileDesignation: "Lead Designer at Atoro",
          },
          {
            content:
              "I have been working with Atoro for the past year and have been consistently impressed with the quality of their work. They have a keen eye for great practices and always deliver projects on time. I highly recommend them to anyone in need of a specialist.",
            profileImageUrl: "/images/HomepageImage.png",
            profileName: "Zain Abbas",
            profileDesignation: "Lead Designer at Atoro",
          },
        ]}
      />
    </>
  );
}
