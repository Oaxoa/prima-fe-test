import { TSpacingKey } from '../../tokens/spacing';


export type TSampleComponentVariant = 'primary' | 'secondary';
export interface ISampleComponentProps {
  className?: string;
  variant?: TSampleComponentVariant;
  spacing?: TSpacingKey;
}
