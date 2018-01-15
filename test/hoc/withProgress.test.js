import test from 'ava';
import React from 'react';
import { mount } from 'enzyme';

import withProgress from '../../src/hoc/withProgress';
import ProgressProvider from '../../src/components/ProgressProvider';

function Target(props) {
  return (
    <p>{props.progress.value}</p>
  );
}

test('wraps progress provider', (t) => {
  const TargetWithProgress = withProgress(Target);
  const wrapper = mount(<TargetWithProgress />);
  t.is(wrapper.find(ProgressProvider).length, 1);
});
