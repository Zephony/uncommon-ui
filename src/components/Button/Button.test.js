import React from "react";
import { ThemeProvider } from "styled-components";
import { shallow, mount } from "enzyme";
import { Button } from "./";
import theme from "utils/theme";

const Wrapper = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

// hack to provide 'ThemeProvider'
// ref: https://github.com/styled-components/jest-styled-components/issues/191#issuecomment-508752557
const shallowWithTheme = component => {
  return shallow(component, {
    wrappingComponent: Wrapper,
  });
};

const mountWithTheme = component => {
  return mount(component, {
    wrappingComponent: Wrapper,
  });
};

describe("Common Button test cases ", () => {
  test("Should be enabled by default", () => {
    const wrapper = shallowWithTheme(<Button />);
    expect(wrapper.prop("disabled")).toBeFalsy();
  });
  test("Should be disabled with 'disabled' prop", () => {
    const wrapper = shallowWithTheme(<Button disabled />);
    expect(wrapper.prop("disabled")).toBeTruthy();
  });
  test("should take button text as 'data-context' when context not passed", () => {
    const btn_text = "hello";
    const wrapper = shallowWithTheme(<Button>{btn_text}</Button>);
    expect(wrapper.prop("data-context")).toEqual(btn_text);
  });
  test("should take 'dataContext' as 'data-context' if passed", () => {
    const btn_context = "hello context";
    const wrapper = shallowWithTheme(
      <Button dataContext={btn_context}>{"hello"}</Button>
    );
    expect(wrapper.prop("data-context")).toEqual(btn_context);
  });
  test("data context should be null if anything other than string is passed as children and when no 'dataContext' is present", () => {
    const wrapper = shallowWithTheme(
      <Button>
        <span>hello</span>
      </Button>
    );
    expect(wrapper.prop("data-context")).toEqual(null);
  });
  test("disabled state onClick should not fire", () => {
    const onClick = jest.fn();
    // enzyme fails to respect 'disabled' attribute on click with 'shallow'
    // ref: https://github.com/airbnb/enzyme/issues/386
    const wrapper = mountWithTheme(
      <Button onClick={onClick} disabled>
        <span>hello</span>
      </Button>
    );
    // trigger click
    wrapper.simulate("click");
    expect(onClick).toHaveBeenCalledTimes(0);
  });
  test("onClick handler triggering", () => {
    const onClick = jest.fn();
    const wrapper = shallowWithTheme(
      <Button onClick={onClick}>
        <span>hello</span>
      </Button>
    );
    // trigger click
    wrapper.simulate("click");
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
