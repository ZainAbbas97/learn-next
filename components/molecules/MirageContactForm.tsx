import Button from "@/components/molecules/Button";
import React from "react";
import Dropdown from "../atoms/Dropdown";
import TextInput from "../atoms/TextInput";

type Props = {
  className?: string;
  activeTag?: string;
};

export default function MirageContactForm({ className, activeTag }: Props) {
  const [formState, setFormState] = React.useState({
    name: "",
    email: "",
    option: "",
    message: "",
  });

  const [isLoading, setIsLoading] = React.useState(false);
  const [buttonMessage, setButtonMessage] = React.useState("Submit Message");
  const [buttonType, setButtonType] = React.useState<"primary" | "secondary">(
    "primary"
  );

  const tagMap = [
    {
      tag: "Homepage",
      tag_id: 1,
    },
    {
      tag: "About page",
      tag_id: 2,
    },
    {
      tag: "Lead Magnet Form",
      tag_id: 3,
    },
    {
      tag: "Whitepapers",
      tag_id: 4,
    },
    {
      tag: "Blog",
      tag_id: 5,
    },
    {
      tag: "Service page.",
      tag_id: 6,
    },
  ];

  const tagId = tagMap.find((tag) => tag.tag === activeTag)?.tag_id;
  console.log("activeTag:", activeTag, tagId);

  // React.useEffect(() => {
  //     //get the slug of the current page
  //     const slug = window.location.pathname.split("/")[1];
  //     console.log("slug:", slug);
  // }, []);

  React.useEffect(() => {
    if (isLoading) {
      setButtonMessage("Sending...");
      // setButtonType("secondary");
    }
  }, [isLoading]);

  return (
    <form
      className={`w-full h-2/3 flex flex-col ${className}`}
      onSubmit={(e) => {
        e.preventDefault();
        setIsLoading(true);
        fetch(
          "https://us-central1-atoro-api.cloudfunctions.net/api/atoro-contact",
          // "http://127.0.0.1:5001/atoro-api/us-central1/api/atoro-contact",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            //we can send in json format, but stringpy gives unexpected token error, why?-> because the data is not in json format
            body: JSON.stringify({
              name: formState.name,
              email: formState.email,
              option: formState.option,
              message: formState.message,
              tagId: tagId,
            }),
          }
        )
          .then((res) => res.json())
          .then((result) => {
            setIsLoading(false);
            setButtonType("secondary");
            setButtonMessage(result.message);
            console.log(result);
            setTimeout(() => {
              setFormState({
                name: "",
                email: "",
                option: "",
                message: "",
              });
            }, 1);
          });
      }}
    >
      <div className="flex flex-col w-full gap-4 my-3 lg:flex-row lg:gap-10">
        <TextInput
          label="Name"
          placeholder="Enter your name"
          value={formState.name}
          required
          onChange={(e) => {
            setFormState({ ...formState, name: e.target.value });
          }}
        />
        <TextInput
          label="Email"
          type="email"
          placeholder="example@service.com"
          value={formState.email}
          required
          onChange={(e) => {
            setFormState({ ...formState, email: e.target.value });
          }}
        />
      </div>

      <div className="my-3">
        <Dropdown
          options={["General", "Services", "Media"]}
          value={formState.option}
          required
          label="Project Type"
          placeholder="Select the type of Project"
          onChange={(e) => {
            setFormState({ ...formState, option: e.target.value });
          }}
        />
      </div>

      <div className="my-3">
        <TextInput
          label="Message"
          placeholder="Tell us more about your project (optional)"
          value={formState.message}
          onChange={(e) => {
            setFormState({ ...formState, message: e.target.value });
          }}
          textArea={true}
        />

        <Button
          label={buttonMessage}
          type={buttonType}
          disabled={false}
          className="w-full mt-6"
        />
      </div>
    </form>
  );
}
