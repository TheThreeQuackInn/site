import React from 'react';
import {create} from 'react-test-renderer';
import Separator from './';

describe('Checkbox', () => {
    it('renders correctly without className', () => {
        const component = create(<Separator />);
        expect(component).toMatchSnapshot();
    });

    it('renders correctly with className', () => {
        const component = create(<Separator className="w-1/2" />);
        expect(component).toMatchSnapshot();
    });
});
