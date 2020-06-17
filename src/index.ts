import clsx from "clsx";

type OrString<T> = T extends string ? T : string;

export type ClassValue<T> =
  | ClassValue<OrString<T>>[]
  | { [key in OrString<T>]?: boolean }
  | T
  | number
  | null
  | boolean
  | undefined;

export type OverrideClsx<T = string> = (...classes: ClassValue<T>[]) => string;

export const createOverride = <T = string>(): OverrideClsx<T> => clsx;

const overrideClsx = <T = string>(...classes: ClassValue<T>[]) => clsx(classes);

export default overrideClsx;
