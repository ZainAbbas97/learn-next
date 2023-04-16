import React from "react";
import { IconType } from "@/types/Icon.d";
import Icon from "@/components/atoms/Icon";
import Link from "next/link";

interface Props {
  label?: string;
  type?: "primary" | "secondary" | "slider";
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
  size?: "sm" | "lg";
  icon?: IconType;
  href?: string;
}

export default function Button({
  onClick,
  label = "",
  type = "primary",
  disabled = false,
  className = "",
  size = "lg",
  icon = "none",
  href = "",
}: Props) {
  // If size is lg return lg button, else return sm button
  if (href === "") {
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={`w-fit font-primary body font-medium flex justify-center items-center cursor-pointer rounded-lg capitalize text-center bg-yellow text-white hover:bg-white hover:text-black disabled:bg-gray disabled:border-gray disabled:text-white active:bg-yellow disabled:cursor-not-allowed transition-all duration-200 ease-in-out

            ${
              type === "primary"
                ? "bg-yellow text-white hover:bg-white"
                : type === "secondary"
                ? "bg-white text-gray hover:text-white hover:bg-yellow"
                : "bg-transparent text-white hover:bg-transparent hover:text-yellow active:bg-transparent"
            } 

            ${
              size === "lg"
                ? "h6 px-8 py-4 md:py-4"
                : "body-bold rounded-md px-5 py-3 md:py-2"
            } 
            
            ${className}

            `}
      >
        {label && (
          <span className={`${icon && icon !== "none" && "mr-2"}`}>
            {label}
          </span>
        )}

        {/* if icon, show icon */}
        {icon && icon !== "none" && (
          <Icon name={icon} className={`${size === "lg" ? "" : "scale-75"}`} />
        )}
      </button>
    );
  }

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`w-fit font-primary body font-medium flex justify-center items-center cursor-pointer rounded-lg capitalize text-center bg-yellow text-white hover:bg-white hover:text-black disabled:bg-gray disabled:border-gray disabled:text-white active:bg-yellow disabled:cursor-not-allowed transition-all duration-200 ease-in-out


            ${
              type === "primary"
                ? "bg-yellow text-white hover:bg-white"
                : type === "secondary"
                ? "bg-white text-gray hover:text-white hover:bg-yellow"
                : "bg-transparent text-white hover:bg-transparent hover:text-yellow active:bg-transparent"
            } 

            ${
              size === "lg"
                ? "text-h6 px-8 py-4 md:py-4"
                : "body-bold rounded-md px-5 py-1 md:py-2"
            } 
            
            ${className}

            `}
    >
      {label && (
        <span className={`${icon && icon !== "none" && "mr-2"}`}>{label}</span>
      )}

      {/* if icon, show icon */}
      {icon && icon !== "none" && (
        <Icon name={icon} className={`${size === "lg" ? "" : "scale-75"}`} />
      )}
    </Link>
  );
}
