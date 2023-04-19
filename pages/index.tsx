import React from "react";
import { IconType } from "@/types/Icon.d";
import Homepage from "@/components/templates/Homepage";
import Testimonial from "@/components/templates/Testimonial";
import Services from "@/components/templates/Services";
import ContactUs from "@/components/templates/ContactUs";
import Footer from "@/components/templates/Footer";
import Portfolio from "@/components/templates/Portfolio";
import TypingText from "@/components/molecules/TypingText";

export default function Hero() {
  const scrollToProjects = () => {
    const projectsElement = document.getElementById("projects");
    if (projectsElement) {
      projectsElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Homepage />
      <div id="projects">
        <Portfolio />
      </div>
      <div id="services">
        <Services
          subtitle="My Services"
          title="Services Tailored to Boost Your Brand"
          content="From captivating brand design to engaging social media strategies, experience the personalized support and expertise you need to thrive. Let me be your catalyst for growth and transformation in the competitive digital landscape."
          points={[
            {
              icon: "",
              heading: "Brand Design",
              content:
                "Embrace a captivating identity that engages your audience and leaves a lasting impression. Elevate your game, make your mark, and outshine the competition. Get ready to shine!",
            },
            {
              icon: "",
              heading: "UI/UX Design",
              content:
                "Discover seamless, user-centric designs that elevate your experience, blending intuitive navigation and stunning visuals to create memorable digital journeys.",
            },
            {
              icon: "",
              heading: "Social Media & Marketing",
              content:
                "Amplify your brand's reach with dynamic social media and marketing strategies, engaging audiences and driving success in the digital landscape.",
            },
          ]}
        />
      </div>

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
      <div id="contactus">
        <ContactUs
          title="Book a Free Consultation Today!"
          subtitle="CONTACT US"
          items={[
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
          ]}
        />
      </div>
      <Footer />
    </>
  );
}
