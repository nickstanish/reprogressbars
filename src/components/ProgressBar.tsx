import { Bar, BarProps } from "./Bar";
import { withProgress, WithProgressProps } from "../hoc/withProgress";

export const ProgressBar = withProgress<BarProps & WithProgressProps>(Bar);
