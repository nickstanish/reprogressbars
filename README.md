# Reprogressbars

[![npm version](https://badge.fury.io/js/reprogressbars.svg)](http://badge.fury.io/js/reprogressbars)
[![npm downloads](https://img.shields.io/npm/dm/reprogressbars.svg?style=flat-square)](https://www.npmjs.com/package/reprogressbars)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](https://github.com/nickstanish/reprogressbars/raw/master/LICENSE)
[![Build Status](https://travis-ci.org/nickstanish/reprogressbars.svg?branch=master)](https://travis-ci.org/nickstanish/reprogressbars)

## Intro

Reprogressbars is a progress bar library built on React.

The main purpose of this library is to simplify displaying progress from ajax requests so that you can just specify when you are and are not loading, and Reprogressbars can animate automatically in between.

## Examples

```jsx
import { ProgressBar } from 'reprogressbars';

<ProgressBar isLoading={this.state.isLoading} />
```


For a progress bar fixed to the top of your page:

```jsx
<ProgressBar isLoading={this.state.isLoading} className="fixed-progress-bar" />
```

```css
.fixed-progress-bar {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
}
```

The `isLoading` prop makes for simple integration with [Redux](https://github.com/nickstanish/reprogressbars/wiki/Redux-Usage).

You can also change the height or color:

```jsx
<ProgressBar isLoading={this.state.isLoading} height="4px" color="#B71C1C" />
```

## API

See [docs](https://github.com/nickstanish/reprogressbars/tree/master/docs)


## Contribution

Please create an issue for issues or bugs. Pull requests welcome.

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2017-2018 Nick Stanish
