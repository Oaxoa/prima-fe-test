import type React from "react";
import { VisuallyHidden, Wrapper } from "./badge.styled.tsx";
import type { IBadgeProps } from "./types.ts";

/**
 * Not a live region by default: pass `role="status"` for a value that changes
 * while the user is on the page and should be announced.
 */
export const Badge: React.FC<IBadgeProps & React.ComponentPropsWithoutRef<"span">> = ({
  className,
  label,
  a11yLabel,
  variant = "neutral",
  ...rest
}) => (
  <Wrapper className={className} $variant={variant} {...rest}>
    {a11yLabel ? (
      <>
        <span aria-hidden="true">{label}</span>
        {/* leading space keeps it a separate word in an enclosing accessible name */}
        <VisuallyHidden> {a11yLabel}</VisuallyHidden>
      </>
    ) : (
      label
    )}
  </Wrapper>
);
