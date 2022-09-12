import React from "react";
import classNames from "classnames";
import { ProgressComponentType } from "./types";

export interface BarProps {
  readonly color?: string;
  readonly height?: string;
  readonly className?: string;
  readonly useBoxShadow?: boolean;
}

export function Bar(props: BarProps & ProgressComponentType) {
  const {
    useBoxShadow = true,
    height = "2px",
    color = "#29d",
    className,
    progress: { active, value },
  } = props;

  const barStyles: React.CSSProperties = {
    width: value + "%",
    height,
    backgroundColor: color,
  };

  if (useBoxShadow) {
    barStyles.boxShadow = `0 0 5px ${color}`;
  }

  const wrapperClassNames = classNames("reprogressbar", className, {
    "reprogressbar--active": active,
    "reprogressbar--inactive": !active,
  });

  return (
    <div className={wrapperClassNames}>
      {active && <div className="reprogressbar_bar" style={barStyles} />}
    </div>
  );
}
