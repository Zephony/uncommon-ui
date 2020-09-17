import React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
// import '../assets/css/normalize.css';
import '../assets/css/main.css';
import theme from '@uncommonui/theme';

addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);
