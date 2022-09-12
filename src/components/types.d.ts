export interface ProgressState {
    readonly active: boolean;
    readonly value: number;
}
export interface ProgressComponentType {
    readonly progress: ProgressState;
}
