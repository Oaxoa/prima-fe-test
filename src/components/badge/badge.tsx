import React from "react";
import { Wrapper } from "./badge.styled.tsx";
import type { IBadgeProps } from "./types.ts";

export const Badge: React.FC<IBadgeProps & React.ComponentPropsWithoutRef<"div">> = ({
  className,
  label,
  variant = "neutral",
  ...rest
}) => (
  <Wrapper className={className} $variant={variant} role={"status"} aria-label={label} {...rest}>
    {label}
  </Wrapper>
);
