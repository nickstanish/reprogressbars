import React from "react";
import { ProgressProvider } from "../components/ProgressProvider";
import { ProgressState } from "../components/types";

export interface WithProgressProps {
  isLoading: boolean;
}

interface InjectedProps {
  readonly progress: ProgressState;
}

export function withProgress<ComponentProps>(
  WrappedComponent: React.ComponentType<ComponentProps & InjectedProps>
): React.ComponentType<ComponentProps & WithProgressProps> {
  const WrappedProgressBar: React.FunctionComponent<
    ComponentProps & WithProgressProps
  > = (props) => {
    return (
      <ProgressProvider
        isLoading={props.isLoading}
        render={({ progress }) => {
          return <WrappedComponent {...props} progress={progress} />;
        }}
      />
    );
  };
  return WrappedProgressBar;
}
