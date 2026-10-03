import type React from "react";
import { noop } from "../../utils/function.ts";
import { Content, StyledBadge, Text, Underline, Wrapper } from "./button.styled";
import type { IButtonProps } from "./types";

export const Button: React.FC<IButtonProps & React.ComponentPropsWithoutRef<"button">> = ({
  className,
  variant = "pill",
  text,
  selected,
  badgeLabel,
  badgeVariant,
  badgeA11yLabel,
  onClick = noop,
  ...rest
}) => {
  // only a toggle when `selected` is used and no other role is given
  const ariaPressed = selected !== undefined && rest.role === undefined ? selected : undefined;

  return (
    <Wrapper
      type="button"
      className={className}
      $variant={variant}
      $selected={selected ?? false}
      aria-pressed={ariaPressed}
      onClick={onClick}
      {...rest}
    >
      <Content>
        <Text>{text}</Text>
        {badgeLabel && (
          <StyledBadge label={badgeLabel} a11yLabel={badgeA11yLabel} variant={badgeVariant} />
        )}
      </Content>
      {variant === "underline" && <Underline />}
    </Wrapper>
  );
};
