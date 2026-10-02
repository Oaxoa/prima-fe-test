import type React from "react";
import { noop } from "../../utils/function.ts";
import { Badge } from "../badge";
import { Text, Underline, Wrapper } from "./button.styled";
import type { IButtonProps } from "./types";

export const Button: React.FC<IButtonProps & React.ComponentPropsWithoutRef<"button">> = ({
  className,
  variant = "pill",
  text,
  badgeLabel,
  badgeVariant,
  onClick = noop,
  ...rest
}) => {
  return (
    <Wrapper className={className} $variant={variant} onClick={onClick} {...rest}>
      <Text>{text}</Text>
      {badgeLabel && <Badge label={badgeLabel} variant={badgeVariant} />}
      {variant === "underline" && <Underline />}
    </Wrapper>
  );
};
