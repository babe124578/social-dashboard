import React from 'react';
import Wordclouds from "./wordclouds.js";
import { shallow } from 'enzyme';
import shallowRenderer from 'react-test-renderer/shallow'

it('shallow snapshot', () => {
    const renderer = new shallowRenderer()
    const snapshot = renderer.render(<Wordclouds />)
    expect(snapshot).toMatchSnapshot()
});

it('should render without crashing', () => {
    shallow(<Wordclouds />);
});