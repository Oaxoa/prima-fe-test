import type { IStyleable } from "../types.ts";

export interface ITabProps extends IStyleable {
  value: string;
  children: string;
}

export type TabsContextValue = {
  value: string;
  select: (value: string) => void;
  baseId: string;
};
