import React from 'react';
import {create} from 'react-test-renderer';
import Container from './';

describe('Container', () => {
    it('renders correctly without className', () => {
        const component = create(
            <Container>
                <p>Children</p>
            </Container>,
        );
        expect(component).toMatchSnapshot();
    });

    it('renders correctly with className', () => {
        const component = create(
            <Container className="pb-1">
                <p>Children</p>
            </Container>,
        );
        expect(component).toMatchSnapshot();
    });
});
