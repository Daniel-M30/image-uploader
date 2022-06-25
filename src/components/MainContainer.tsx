import React, { ReactNode } from "react";
import "../styles/components/MainContainer.css";

interface MainContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function MainContainer({
  children,
  className,
  ...rest
}: MainContainerProps) {
  return (
    <div className={`mainContainer ${className}`} {...rest}>
      {children}
    </div>
  );
}
