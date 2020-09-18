import React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@uncommonui/theme';
import '../assets/css/main.css';

addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);
