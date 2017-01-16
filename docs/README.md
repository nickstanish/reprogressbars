# ProgressBar

PropTypes:
- isLoading: boolean
- color: string, e.g. "#eee"
- height: string, e.g. "4px"
- className: string
- useBoxShadow: boolean


```jsx
import { ProgressBar } from 'reprogressbars';


<ProgressBar isLoading={this.state.isLoading} />
```


# withProgress
This is a higher-order component to provide the progress value to custom or third-party
progress bar libraries and still have the simplicity of only having to pass `isLoading`.

PropTypes:
- isLoading: boolean

It will pass a `progress` prop that contains
- value: number between 0 and 1 inclusive
- active: boolean

Here's an example using it with redux.

```jsx
import { withProgress } from 'reprogressbars';
import { connect } from 'react-redux';


@connect((state, props) => {
  return {
    isLoading: state.app.loadingCount > 0
  };
})
@withProgress
export default class CustomProgressBar extends Component {
  render() {
    return (
      <MyBar percentage={this.props.progress.value} />
    );
  }
}
```
