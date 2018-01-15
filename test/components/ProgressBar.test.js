import test from 'ava';
import React from 'react';
import { mount } from 'enzyme';

import ProgressBar from '../../src/components/ProgressBar';
import ProgressProvider from '../../src/components/ProgressProvider';


test('wraps progress provider', (t) => {
  const wrapper = mount(<ProgressBar />);
  t.is(wrapper.find(ProgressProvider).length, 1);
});
