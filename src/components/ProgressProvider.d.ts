import { Component } from "react";
import { shifty, Tweenable } from "shifty";
import { ProgressState } from "./types";
interface RenderProps {
    readonly progress: ProgressState;
}
interface ProgressProviderProps {
    readonly isLoading: boolean;
    readonly render: (props: RenderProps) => JSX.Element;
}
export declare class ProgressProvider extends Component<ProgressProviderProps, ProgressState> {
    private _tweenable;
    constructor(props: ProgressProviderProps);
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: ProgressProviderProps): void;
    componentWillUnmount(): void;
    stop(): void;
    begin(): void;
    tween(config: shifty.tweenConfig): Tweenable;
    finish(): void;
    updateValue({ value }: {
        readonly value: number;
    }): void;
    render(): JSX.Element;
}
export {};
