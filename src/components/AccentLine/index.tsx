import { cn } from "@/lib/utils";

export default function AccentLine({ accentWidth = 32, className = "" }) {
  return (
    <div
      className={cn(
        "max-w-page-lg mx-auto flex w-full py-8 md:py-12",
        className,
      )}
    >
      <div
        className="bg-accent mr-1 h-[4px] skew-x-[-20deg]"
        style={{ width: `${accentWidth}px` }}
      ></div>
      <div className="my-[1px] h-[1px] w-[12vw] bg-gray-700"></div>
      <div className="mx-[-1px] mt-[3px] h-[1px] w-[10px] rotate-[30deg] bg-gray-700"></div>
      <div className="mt-[5px] h-[1px] flex-1 bg-gray-700"></div>
    </div>
  );
}
