import Heading from "@/components/atoms/Heading";
import { Section } from "@/components/Page";
import { ButtonType } from "@/types/Button";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useWindowSize } from "usehooks-ts";
import Button from "../molecules/Button";
import { ProcessPoint } from "../atoms/Points";

// framer variatns for stagger using staggerChildren
const container = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

type Props = {
  subtitle: string;
  title: string;
  content: string;
  points: any[];
};

export default function ProcessPoints({
  subtitle,
  title,
  content,
  points,
}: Props) {
  // check if we're on a mobile device using usehook-ts
  const { width, height } = useWindowSize();

  // make ref for heading so we can get the height of the heading
  // and use that to set the height of the content div
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [headingHeight, setHeadingHeight] = useState(0);

  useEffect(() => {
    if (headingRef.current) {
      setHeadingHeight(headingRef.current.clientHeight);
    }
  }, [headingRef, width]);

  useEffect(() => {
    if (width > 1024) {
      setHeadingHeight(145);
    }
  }, [width]);

  // create a ref for each point so we can get the height of each point
  // and use that to set the height of the content div
  const pointRefs = useRef<HTMLDivElement[]>([]);
  const [pointHeights, setPointHeights] = useState<number[]>([]);

  useEffect(() => {
    if (pointRefs.current.length > 0) {
      const heights = pointRefs.current.map((ref) => ref.clientHeight);
      setPointHeights(heights);
    }
    console.log(pointRefs);
  }, [pointRefs, width]);

  // get longest point height
  const longestPointHeight = Math.max(...pointHeights);

  return (
    <Section>
      <div className={`flex flex-wrap md:flex-nowrap md:gap-16`}>
        <motion.div
          className={`w-full flex flex-col h-full gap-y-8 sticky top-24 lg:top-64 `}
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          ref={headingRef}
        >
          <Heading subTitle={subtitle} heading={title} />

          {content && content !== "" && (
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
              className="text-white"
              dangerouslySetInnerHTML={{
                __html: content,
              }}
            />
          )}
        </motion.div>

        {/* points */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          // className="grid w-full grid-cols-1 gap-y-8"
          className="flex flex-col w-full items-between"
        >
          {points.map((point, index) => (
            <motion.div
              className="sticky top-24 lg:top-64"
              style={width < 768 ? { top: headingHeight + 96 } : {}}
              variants={item}
              key={index + point.heading}
            >
              {point.icon && point.icon !== "none" ? (
                <ProcessPoint
                  key={index + point.heading}
                  heading={point.heading}
                  content={point.content}
                  icon={point.icon}
                  height={longestPointHeight}
                  innerRef={(el: HTMLDivElement) =>
                    (pointRefs.current[index] = el)
                  }
                />
              ) : (
                <ProcessPoint
                  key={index + point.heading}
                  heading={point.heading}
                  content={point.content}
                  index={index + 1}
                  height={longestPointHeight}
                  innerRef={(el: HTMLDivElement) =>
                    (pointRefs.current[index] = el)
                  }
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
