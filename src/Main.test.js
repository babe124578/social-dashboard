import React from 'react';
import Main from './Main';
import { shallow } from 'enzyme';

it('should render without crashing', () => {
    shallow(<Main />);
})