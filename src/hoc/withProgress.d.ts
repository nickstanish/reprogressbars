import React from "react";
import { ProgressState } from "../components/types";
export interface WithProgressProps {
    isLoading: boolean;
}
interface InjectedProps {
    readonly progress: ProgressState;
}
export declare function withProgress<ComponentProps>(WrappedComponent: React.ComponentType<ComponentProps & InjectedProps>): React.ComponentType<ComponentProps & WithProgressProps>;
export {};
