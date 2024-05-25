import { cn } from "@/lib/utils";
import React from "react";

interface IWrapper {
  children: React.ReactNode;
  className?: string;
}

const Wrapper = ({ children, className }: IWrapper) => {
  return (
    <div className={cn("max-w-screen-xl mx-auto px-3 md:px-6", className)}>
      {children}
    </div>
  );
};

export default Wrapper;
