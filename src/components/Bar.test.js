import React from 'react';
import { shallow } from 'enzyme';
import Bar from './Bar';

describe('Bar', () => {
  test('classnames for inactive', () => {
    const props = {
      progress: {
        active: false,
        value: 0
      }
    };
    const wrapper = shallow(<Bar {...props} />);
    expect(wrapper.find('div.reprogressbar').length).toBe(1);
    expect(wrapper.find('div.reprogressbar.reprogressbar--active').length).toBe(0);
    expect(wrapper.find('div.reprogressbar.reprogressbar--inactive').length).toBe(1);
    expect(wrapper.find('.reprogressbar_bar').length).toBe(0);
  });

  test('classnames for active', () => {
    const props = {
      progress: {
        active: true,
        value: 0
      }
    };
    const wrapper = shallow(<Bar {...props} />);
    expect(wrapper.find('div.reprogressbar').length).toBe(1);
    expect(wrapper.find('div.reprogressbar.reprogressbar--active').length).toBe(1);
    expect(wrapper.find('div.reprogressbar.reprogressbar--inactive').length).toBe(0);
    expect(wrapper.find('.reprogressbar_bar').length).toBe(1);
  });

  test('props passed to styles', () => {
    const props = {
      progress: {
        active: true,
        value: 50
      },
      color: 'red',
      height: '4px'
    };
    const wrapper = shallow(<Bar {...props} />);
    const bar = wrapper.find('.reprogressbar_bar').first();
    expect(wrapper.find('.reprogressbar_bar').length).toBe(1);
    expect(bar.props().style.width).toBe('50%');
    expect(bar.props().style.height).toBe('4px');
    expect(bar.props().style.backgroundColor).toBe('red');
    expect(bar.props().style.boxShadow).toBe('0 0 5px red');
  });
});
