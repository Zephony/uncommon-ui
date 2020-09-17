import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import Input from '../src';
import theme from '@uncommon/utils/theme';

describe('Input', () => {
    const labelText = 'This is a label';
    const props = {
        type: 'text',
        label: labelText,
    };

    it('should render an input component', () => {
        const { container } = render(
            <ThemeProvider theme={theme}>
                <Input {...props} />
            </ThemeProvider>
        );
        expect(container.firstChild).toMatchSnapshot();
    });

    it('should contain a label', () => {
        const { getByText } = render(
            <ThemeProvider theme={theme}>
                <Input {...props} />
            </ThemeProvider>
        );
        expect(getByText(labelText)).toBeTruthy();
    });
});
