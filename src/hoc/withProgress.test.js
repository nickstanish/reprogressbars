/* eslint-disable react/prop-types */
import React from 'react';
import { mount } from 'enzyme';

import withProgress from './withProgress';

function Target(props) {
  return (
    <p>{props.progress.value}</p>
  );
}

describe('withProgress', () => {
  test('wraps progress provider', () => {
    const TargetWithProgress = withProgress(Target);
    expect(mount(<TargetWithProgress />)).toMatchSnapshot();
  });
});

