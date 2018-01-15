import test from 'ava';
import React from 'react';
import { shallow, mount } from 'enzyme';

import Bar from '../../src/components/Bar';

test('classnames for inactive', (t) => {
  const props = {
    progress: {
      active: false,
      value: 0
    }
  };
  const wrapper = shallow(<Bar {...props} />);
  t.is(wrapper.find('div.reprogressbar').length, 1);
  t.is(wrapper.find('div.reprogressbar.reprogressbar--active').length, 0);
  t.is(wrapper.find('div.reprogressbar.reprogressbar--inactive').length, 1);
  t.is(wrapper.find('.reprogressbar_bar').length, 0);
});

test('classnames for active', (t) => {
  const props = {
    progress: {
      active: true,
      value: 0
    }
  };
  const wrapper = shallow(<Bar {...props} />);
  t.is(wrapper.find('div.reprogressbar').length, 1);
  t.is(wrapper.find('div.reprogressbar.reprogressbar--active').length, 1);
  t.is(wrapper.find('div.reprogressbar.reprogressbar--inactive').length, 0);
  t.is(wrapper.find('.reprogressbar_bar').length, 1);
});


test('props passed to styles', (t) => {
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
  t.is(wrapper.find('.reprogressbar_bar').length, 1);
  t.is(bar.props().style.width, '50%');
  t.is(bar.props().style.height, '4px');
  t.is(bar.props().style.backgroundColor, 'red');
  t.is(bar.props().style.boxShadow, '0 0 5px red');
});
