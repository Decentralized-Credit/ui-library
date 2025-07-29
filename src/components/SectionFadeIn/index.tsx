import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { SectionFadeInProps } from "@/types";

export const SectionFadeIn = ({
  children,
  className,
  delay = 0,
  rootMargin = "0px 0px -100px 0px",
  threshold = 0.1,
}: SectionFadeInProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("opacity-100");
        entry.target.classList.remove("opacity-0", "translate-y-10");
      },
      { threshold, rootMargin },
    );

    if (!sectionRef.current) return;
    observer.observe(sectionRef.current);

    return () => {
      if (!sectionRef.current) return;
      observer.unobserve(sectionRef.current);
    };
  }, [threshold, rootMargin]);

  return (
    <div
      ref={sectionRef}
      style={delay ? { transitionDelay: `${delay}ms` } : {}}
      className={cn(
        "relative z-10 w-full translate-y-10 opacity-0 transition-all duration-700",
        className,
      )}
    >
      {children}
    </div>
  );
};
