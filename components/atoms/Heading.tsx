import { HeadingWContentType } from "@/types/Headings";
import { motion } from "framer-motion";
import SlidingText from "./SlidingText";

type Props = {
  subTitle?: string;
  heading?: string;
  className?: string;
  headingClassName?: string;
  subtitleClassName?: string;
};

export default function Heading({
  subTitle,
  heading,
  className,
  headingClassName,
  subtitleClassName,
}: Props) {
  return (
    <div className={className}>
      {subTitle && (
        <SlidingText
          text={subTitle}
          animDuration={3}
          className={`mb-2 uppercase h6-ils text-yellow ${subtitleClassName}`}
        />
      )}

      {heading && (
        <SlidingText
          text={heading}
          className={`h3 sm:h2 ${headingClassName}`}
        />
      )}
    </div>
  );
}

type HeadingWContentProps = {
  className?: string;
  contentClassName?: string;
  headingClassName?: string;
} & HeadingWContentType;

export function HeadingWContent({
  heading,
  content,
  className,
  contentClassName,
  headingClassName,
  center = false,
}: HeadingWContentProps) {
  const subtitle = heading?.subtitle || "";
  const title = heading?.title || "";

  return (
    <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={`w-4/5 mt-10 lg:mt-0 ${
        !!center && "text-center mx-auto"
      } ${className}`}
    >
      <Heading
        headingClassName={headingClassName}
        subTitle={subtitle}
        heading={title}
      />

      {content && (
        <motion.p
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          initial={{
            opacity: 0,
            y: -20,
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          className={`text-white p ${contentClassName}`}
          dangerouslySetInnerHTML={{ __html: content }}
        ></motion.p>
      )}
    </motion.div>
  );
}
