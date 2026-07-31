import { twMerge } from "tailwind-merge"

export default function Pointer(props: { name: string; color?: 'red' | 'blue' }) {
  const { name, color } = props;
  return (
    <div className="relative animate-float transition-transform duration-300 hover:scale-110">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-mouse-pointer text-white size-5 drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]"
      >
        <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path>
        <path d="M13 13l6 6"></path>
      </svg>
      <div className="absolute top-full left-full">
        <div className={twMerge(
          "inline-flex rounded-full font-bold text-sm bg-blue-500 px-2 rounded-tl-none shadow-lg",
          color === "red" && "bg-red-500"
        )}>
          {name}
        </div>
      </div>
    </div>
  );
}