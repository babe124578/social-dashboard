import React from 'react';
import Top10Accounts from "./top10accounts.js";
import { shallow } from 'enzyme';
import shallowRenderer from 'react-test-renderer/shallow'

it('shallow snapshot', () => {
    const renderer = new shallowRenderer()
    const snapshot = renderer.render(<Top10Accounts />)
    expect(snapshot).toMatchSnapshot()
});

it('should render without crashing', () => {
    shallow(<Top10Accounts />);
});