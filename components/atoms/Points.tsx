import { IconType } from "@/types/Icon";
import { motion } from "framer-motion";
import Icon from "./Icon";

type BenefitPointProps = {
  heading: string;
  content: string;
  index: number;
};

export function BenefitPoint({ heading, content, index }: BenefitPointProps) {
  const indexNumber = index < 10 ? `0${index}` : index;

  return (
    <motion.div
      whileInView={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={`border-b border-white py-5 pr-3 sm:pr-6 bg-gray`}
    >
      {/* text */}
      <div className="flex items-start w-full mb-5 space-x-3">
        <h5 className="font-thin h5">{indexNumber}</h5>
        <h5 className="h5">{heading}</h5>
      </div>

      {/* content */}
      <p className="body">{content}</p>
    </motion.div>
  );
}

type ProcessPointProps = {
  heading: string;
  content: string;
  icon?: IconType;
  index?: number;
  innerRef?: any;
  height: number;
};

export function ProcessPoint({
  heading,
  content,
  icon,
  index,
  innerRef,
  height,
}: ProcessPointProps) {
  return (
    <div
      className={`bg-gray text=white sticky`}
      ref={innerRef}
      style={{ height: height !== Infinity ? height + 20 : "100%" }}
    >
      <motion.div
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className={`border-b border-white py-5 pr-3 sm:pr-6 bg-gray text=white`}
      >
        {/* text */}
        <div className="flex items-center w-full mb-5 space-x-5">
          {index && (
            <h4 className="h3 font-medium text-yellow opacity-80">
              {index < 10 ? `0${index}` : index}
            </h4>
          )}

          {icon && icon !== "none" && <Icon name={icon} />}
          <p className="h4 text-white">{heading}</p>
        </div>

        {/* content */}
        <p className="sm:body-large text=white">{content}</p>
      </motion.div>
    </div>
  );
}