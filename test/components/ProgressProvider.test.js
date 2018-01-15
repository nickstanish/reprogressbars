import test from 'ava';
import React from 'react';
import { mount } from 'enzyme';

import ProgressProvider from '../../src/components/ProgressProvider';

function Target(props) {
  return (
    <p>{props.progress.value}</p>
  );
}

function wait(timeMs) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), timeMs);
  });
}

test('inactive when not loading', (t) => {
  const wrapper = mount(<ProgressProvider><Target /></ProgressProvider>);
  t.is(wrapper.state().value, 0);
  t.is(wrapper.state().active, false);
  t.is(wrapper.find(Target).length, 1);
  const target = wrapper.find(Target).first();
  t.is(target.props().progress.value, 0);
  t.is(target.props().progress.active, false);
});

test('active when loading', (t) => {
  const wrapper = mount(<ProgressProvider isLoading><Target /></ProgressProvider>);
  t.is(wrapper.state().active, true);
  t.is(wrapper.find(Target).length, 1);
  const target = wrapper.find(Target).first();
  t.is(target.props().progress.active, true);
});

test('progress after loading', (t) => {
  t.plan(3);
  const wrapper = mount(<ProgressProvider isLoading><Target /></ProgressProvider>);
  wrapper.setProps({ isLoading: false });
  t.is(wrapper.state().active, true);

  return wait(800).then(() => {
    t.is(wrapper.state().value, 100);
    t.is(wrapper.state().active, false);
  });
});
