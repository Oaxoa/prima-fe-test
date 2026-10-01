import type React from "react";

import { Wrapper } from "./sample-component.styled";
import type { ISampleComponentProps } from "./types";

export const SampleComponent: React.FC<
  ISampleComponentProps & React.ComponentPropsWithoutRef<"div">
> = ({ className, spacing = "xs", variant = "primary", ...rest }) => (
  <Wrapper className={className} $spacing={spacing} $variant={variant} {...rest}>
    Hello, world!
  </Wrapper>
);
