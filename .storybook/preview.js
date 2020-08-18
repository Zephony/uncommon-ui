import React from "react";
import { addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import "../src/normalize.css";
import "../src/index.css";
import theme from "../src/utils/theme";

// addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);
