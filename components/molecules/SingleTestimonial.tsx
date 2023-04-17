import textTypes from "@/types/Testimonial";
import Image from "next/image";
import Balancer from "react-wrap-balancer";

type Props = {
  review: string;
  name: string;
  designation: string;
  image: string;
};

export default function SingleTestimonial({
  name,
  designation,
  image,
  review,
}: Props) {
  return (
    <div>
      <figure className="mx-auto text-center">
        <svg
          aria-hidden="true"
          className="text-yellow opacity-80 w-20 h-20 mx-auto mb-3 "
          viewBox="0 0 24 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
            fill="currentColor"
          />
        </svg>
        <blockquote>
          <h5 className="my-6 font-medium text-white h5">
            <Balancer>{review}</Balancer>
          </h5>
        </blockquote>
        <figcaption className="flex items-center justify-center mt-6 space-x-3">
          {image && !image.includes("undefined") && (
            <Image
              className="!w-14 h-14 rounded-full"
              width={50}
              height={50}
              src={image}
              alt={image || "Testimonial Profile Picture"}
            />
          )}

          <div className="grid text-left place-items-start">
            {name && <cite className="font-medium text-white">{name}</cite>}

            {designation && (
              <cite className="text-sm text-gray-300">{designation}</cite>
            )}
          </div>
        </figcaption>
      </figure>
    </div>
  );
}
