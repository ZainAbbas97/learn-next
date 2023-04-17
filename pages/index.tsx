import React from "react";
import Icon from "@/components/atoms/Icon";
import { IconType } from "@/types/Icon.d";
import Homepage from "@/components/templates/Homepage";
import Testimonial from "@/components/templates/Testimonial";
import Services from "@/components/templates/Services";
import ContactUs from "@/components/templates/ContactUs";
import Footer from "@/components/templates/Footer";
// import Projects from "@/components/templates/Projects";
import Portfolio from "@/components/templates/Portfolio";

export default function Hero() {
  return (
    <>
      <Homepage />
      <Portfolio />
      <Services
        subtitle="Our Services"
        title="We are a full-service digital agency"
        content="We are a full-service digital agency that offers a wide range of services to help you grow your business online. We are a full-service digital agency that offers a wide range of services to help you grow your business online."
        points={[
          {
            icon: "",
            heading: "Brand Design",
            content:
              "We are a full-service digital agency that offers a wide range of services to help you grow your business online. We are a full-service digital agency that offers a wide range of services to help you grow your business online.",
          },
          {
            icon: "",
            heading: "UI/UX Design",
            content:
              "We are a full-service digital agency that offers a wide range of services to help you grow your business online. We are a full-service digital agency that offers a wide range of services to help you grow your business online.",
          },
          {
            icon: "",
            heading: "Social Media & Marketing",
            content:
              "We are a full-service digital agency that offers a wide range of services to help you grow your business online. We are a full-service digital agency that offers a wide range of services to help you grow your business online.",
          },
        ]}
      />

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

      <ContactUs
        title="Book a Free Consultation Today!"
        subtitle="CONTACT US"
        items={[
          {
            icon: "location-pin" as IconType,
            text: "Europe",
          },

          {
            icon: "phone" as IconType,
            text: "+1 234 567 890",
          },

          {
            icon: "email" as IconType,
            text: "xyz@about.com",
          },
        ]}
      />

      <Footer />
    </>
  );
}
