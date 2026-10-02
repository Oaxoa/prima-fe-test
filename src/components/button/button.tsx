import type React from "react";
import { noop } from "../../utils/function.ts";
import { Content, StyledBadge, Text, Underline, Wrapper } from "./button.styled";
import type { IButtonProps } from "./types";

export const Button: React.FC<IButtonProps & React.ComponentPropsWithoutRef<"button">> = ({
  className,
  variant = "pill",
  text,
  selected = false,
  badgeLabel,
  badgeVariant,
  onClick = noop,
  ...rest
}) => {
  return (
    <Wrapper
      type="button"
      className={className}
      $variant={variant}
      $selected={selected}
      onClick={onClick}
      {...rest}
    >
      <Content>
        <Text>{text}</Text>
        {badgeLabel && <StyledBadge label={badgeLabel} variant={badgeVariant} />}
      </Content>
      {variant === "underline" && <Underline />}
    </Wrapper>
  );
};
