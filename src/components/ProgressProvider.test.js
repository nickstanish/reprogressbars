/* eslint-disable react/prop-types */
import React from 'react';
import { mount } from 'enzyme';

import ProgressProvider from './ProgressProvider';

function Target(props) {
  return (
    <p>{props.progress.value}</p>
  );
}

function wait(timeMs) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), timeMs);
  });
}

describe('ProgressProvider', () => {
  test('inactive when not loading', () => {
    const wrapper = mount(<ProgressProvider><Target /></ProgressProvider>);
    expect(wrapper.state().value).toBe(0);
    expect(wrapper.state().active).toBe(false);
    expect(wrapper.find(Target).length).toBe(1);
    const target = wrapper.find(Target).first();
    expect(target.props().progress.value).toBe(0);
    expect(target.props().progress.active).toBe(false);
  });

  test('active when loading', () => {
    const wrapper = mount(<ProgressProvider isLoading><Target /></ProgressProvider>);
    expect(wrapper.state().active).toBe(true);
    expect(wrapper.find(Target).length).toBe(1);
    const target = wrapper.find(Target).first();
    expect(target.props().progress.active).toBe(true);
  });

  test('progress after loading', () => {
    const wrapper = mount(<ProgressProvider isLoading><Target /></ProgressProvider>);
    wrapper.setProps({ isLoading: false });
    expect(wrapper.state().active).toBe(true);

    return wait(800).then(() => {
      expect(wrapper.state().value).toBe(100);
      expect(wrapper.state().active).toBe(false);
    });
  });
});
