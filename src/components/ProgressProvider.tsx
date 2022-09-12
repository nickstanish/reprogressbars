import { Component } from "react";
import { shifty, Tweenable } from "shifty";
import { ProgressState } from "./types";

interface StepConfig {
  initial: shifty.tweenConfig;
  slow: shifty.tweenConfig;
  finish: shifty.tweenConfig;
}

const stepsConfig: StepConfig = {
  initial: {
    to: { value: 45 },
    duration: 2000,
    easing: "easeOutQuad",
  },
  slow: {
    to: { value: 80 },
    duration: 20000,
    easing: "easeOutQuad",
  },
  finish: {
    to: { value: 100 },
    duration: 200,
    easing: "easeOutQuad",
  },
};

const noOp = () => {};

interface RenderProps {
  readonly progress: ProgressState;
}

interface ProgressProviderProps {
  readonly isLoading: boolean;
  readonly render: (props: RenderProps) => JSX.Element;
}

export class ProgressProvider extends Component<
  ProgressProviderProps,
  ProgressState
> {
  private _tweenable: InstanceType<typeof Tweenable> | null;

  constructor(props: ProgressProviderProps) {
    super(props);
    this.state = {
      active: false,
      value: 0,
    };
    this._tweenable = null;
  }

  componentDidMount() {
    this._tweenable = new Tweenable();

    if (this.props.isLoading) {
      this.begin();
    }
  }

  componentWillReceiveProps(nextProps: ProgressProviderProps) {
    if (!this.props.isLoading && nextProps.isLoading) {
      this.begin();
    } else if (this.props.isLoading && !nextProps.isLoading) {
      this.finish();
    }
  }

  componentWillUnmount() {
    this.stop();
    if (this._tweenable) {
      this._tweenable.dispose();
      this._tweenable = null;
    }
  }

  stop() {
    if (!this._tweenable) {
      throw new Error("called stop when tweenable is not initialized");
    }
    if (this._tweenable.isPlaying()) {
      this._tweenable.stop();
    }
  }

  begin() {
    this.stop();
    this.setState({
      active: true,
      value: 0,
    });

    const fromValue = {
      from: { value: 0 },
    };

    this.tween({ ...stepsConfig.initial, ...fromValue })
      .then(() => this.tween(stepsConfig.slow), noOp)
      .catch(noOp);
  }
  tween(config: shifty.tweenConfig) {
    if (!this._tweenable) {
      throw new Error("called tween when tweenable is not initialized");
    }
    this._tweenable.setConfig({
      ...config,
      render: (state) => this.updateValue({ value: state.value }),
    });
    return this._tweenable.tween();
  }
  finish() {
    if (!this._tweenable) {
      throw new Error("called finish when tweenable is not initialized");
    }
    this.stop();
    this.tween(stepsConfig.finish)
      .then(() => {
        this.setState({
          value: this._tweenable ? this._tweenable.get().value : 0,
          active: false,
        });
      }, noOp)
      .catch(noOp);
  }

  updateValue({ value }: { readonly value: number }) {
    this.setState({
      ...this.state,
      value,
    });
  }
  render() {
    const { render } = this.props;
    const { active, value } = this.state;
    return render({ progress: { active, value } });
  }
}
