"use client";

import { cn } from "@/lib/utils";
import DotPattern from "@/components/magicui/dot-pattern";

export function DotsBackground() {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-background md:shadow-xl">
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
        )}
      />
    </div>
  );
}
