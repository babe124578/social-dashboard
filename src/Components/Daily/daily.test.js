import React from 'react';
import Daily from "./daily.js";
import { shallow } from 'enzyme';
import shallowRenderer from 'react-test-renderer/shallow'

it('should render without crashing', () => {
    shallow(<Daily />);
});

it('shallow snapshot', () => {
    const renderer = new shallowRenderer()
    const snapshot = renderer.render(<Daily />)
    expect(snapshot).toMatchSnapshot()
});


