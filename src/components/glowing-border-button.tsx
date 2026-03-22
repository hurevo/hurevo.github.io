"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface GlowingBorderButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}

const GlowingBorderButton = ({
  className,
  children = "Book a Call",
  ...props
}: GlowingBorderButtonProps) => {
  return (
    <button
      className={cn(
        "glowing-border-button group relative h-14 md:h-16 px-6 cursor-pointer border-0 bg-transparent p-0 text-base md:text-lg font-semibold outline-none tracking-wide",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "relative h-full w-full overflow-hidden rounded-2xl p-[2px] transition-all duration-300 ease-in-out",
          "bg-gradient-to-r from-zinc-300 via-zinc-200 to-zinc-300",
          "dark:from-zinc-700 dark:via-zinc-800 dark:to-zinc-700"
        )}
      >
        {/* Rotating Border Beam */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl">
          <div
            className={cn(
              "absolute left-1/2 top-1/2 h-[500%] w-[100px] -translate-x-1/2 -translate-y-1/2 animate-[spin_3s_linear_infinite]",
              "bg-gradient-to-r from-transparent via-primary to-transparent",
              "blur-[2px]"
            )}
          ></div>
        </div>

        {/* Inner Content */}
        <div
          className={cn(
            "content relative z-10 flex h-full w-full items-center justify-center gap-3 rounded-[14px] transition-all duration-300 ease-in-out",
            "bg-background px-8"
          )}
        >
          <span className="text-foreground transition-colors duration-300 whitespace-nowrap">
            {children}
          </span>
        </div>
      </div>
    </button>
  );
};

export default GlowingBorderButton;
