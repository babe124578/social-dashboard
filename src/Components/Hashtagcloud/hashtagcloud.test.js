import React from 'react';
import Hashtagclouds from "./hashtagclouds.js";
import { shallow } from 'enzyme';
import shallowRenderer from 'react-test-renderer/shallow'

it('shallow snapshot', () => {
    const renderer = new shallowRenderer()
    const snapshot = renderer.render(<Hashtagclouds />)
    expect(snapshot).toMatchSnapshot()
});

it('should render without crashing', () => {
    shallow(<Hashtagclouds />);
});

