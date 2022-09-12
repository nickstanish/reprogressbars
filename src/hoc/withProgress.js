import { jsx as _jsx } from "react/jsx-runtime";
import { ProgressProvider } from "../components/ProgressProvider";
export function withProgress(WrappedComponent) {
    const WrappedProgressBar = (props) => {
        return (_jsx(ProgressProvider, { isLoading: props.isLoading, render: ({ progress }) => {
                return _jsx(WrappedComponent, Object.assign({}, props, { progress: progress }));
            } }));
    };
    return WrappedProgressBar;
}
//# sourceMappingURL=withProgress.js.map