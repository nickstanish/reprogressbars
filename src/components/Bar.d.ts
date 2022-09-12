/// <reference types="react" />
import { ProgressComponentType } from "./types";
export interface BarProps {
    readonly color?: string;
    readonly height?: string;
    readonly className?: string;
    readonly useBoxShadow?: boolean;
}
export declare function Bar(props: BarProps & ProgressComponentType): JSX.Element;
