import { Wrapper } from "./placeholder.styled.ts";
import type { IPlaceholderProps } from "./types.ts";

export const Placeholder = ({ height, aspectRatio, ...rest }: IPlaceholderProps) => (
  <Wrapper $height={height} $aspectRatio={aspectRatio} aria-hidden="true" {...rest} />
);
