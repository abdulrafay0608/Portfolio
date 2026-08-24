import type { ReactNode } from "react";

type PageContainerProps = {
  children: ReactNode;
  className?: string;
};

export default function PageContainer({ children, className = "" }: PageContainerProps) {
  return <div className={`mx-auto max-w-7xl px-5 pb-20 pt-20 sm:px-8 lg:pt-24 ${className}`}>{children}</div>;
}
