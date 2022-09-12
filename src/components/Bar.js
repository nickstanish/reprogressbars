import { jsx as _jsx } from "react/jsx-runtime";
import classNames from "classnames";
export function Bar(props) {
    const { useBoxShadow = true, height = "2px", color = "#29d", className, progress: { active, value }, } = props;
    const barStyles = {
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
    return (_jsx("div", Object.assign({ className: wrapperClassNames }, { children: active && _jsx("div", { className: "reprogressbar_bar", style: barStyles }) })));
}
//# sourceMappingURL=Bar.js.map