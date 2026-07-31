import { ButtonHTMLAttributes } from "react";
import { cva } from "class-variance-authority";
import clsx from "clsx";

const classes = cva(
  "border h-10 rounded-full px-6 transition-colors duration-200",
  {
    variants: {
      variant: {
        primary: "bg-lime-400 text-neutral-950 border-lime-400",
        secondary: "bg-transparent text-white border-white",
      },
      size :{
        sm:"h-10"
      }
    },
    defaultVariants: {
      variant: "primary",
    },
  } 
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
  size?:'sm'
};

const Button = ({
  variant,
  className,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(classes({ variant }), className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;