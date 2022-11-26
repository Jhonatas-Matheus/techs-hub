import React from "react";
import { iErrorRequest } from "../../hooks/useRequests";
interface iTipography {
  tag: string;
  children: React.ReactNode;
  className?: string;
  typography?: string;
}
const BaseTitle = ({ tag, children, className }: iTipography) => {
  return (
    <>
      {tag === "h1" && <h1 className={className}>{children}</h1>}
      {tag === "h2" && <h2 className={className}>{children}</h2>}
      {tag === "h3" && <h3 className={className}>{children}</h3>}
      {tag === "h4" && <h4 className={className}>{children}</h4>}
    </>
  );
};

export default BaseTitle;
