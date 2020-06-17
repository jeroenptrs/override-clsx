declare type OrString<T> = T extends string ? T : string;
export declare type ClassValue<T> = ClassValue<OrString<T>>[] | {
    [key in OrString<T>]?: boolean;
} | T | number | null | boolean | undefined;
export declare type OverrideClsx<T = string> = (...classes: ClassValue<T>[]) => string;
export declare const createOverride: <T = string>() => OverrideClsx<T>;
declare const overrideClsx: <T = string>(...classes: ClassValue<T>[]) => string;
export default overrideClsx;
