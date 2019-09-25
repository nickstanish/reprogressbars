import React from 'react';
import { mount } from 'enzyme';

import ProgressBar from './ProgressBar';

describe('ProgressBar', () => {
  test('renders', () => {
    expect(mount(<ProgressBar />)).toMatchSnapshot();
  });
});
