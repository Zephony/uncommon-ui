import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

// Styles for a primary button
const primary = css`
  background-color: ${props => props.theme?.colors?.primary ?? "#e2863d"};
  color: #fff;
  border: 1px solid ${props => props.theme?.colors?.primary ?? "#e2863d"};
  &:hover:enabled,
  &:focus:enabled {
    background-color: #fff;
    color: ${props => props.theme?.colors?.primary ?? "#e2863d"};
    border: 1px solid ${props => props.theme?.colors?.primary ?? "#e2863d"};
  }
`;

// Styles for a secondary button
const secondary = css`
  background-color: #fff;
  color: ${props => props.theme?.colors?.primary ?? "#e2863d"};
  border: 1px solid ${props => props.theme?.colors?.primary ?? "#e2863d"};
  &:hover:enabled,
  &:focus:enabled {
    background-color: ${props => props.theme?.colors?.primary ?? "#e2863d"};
    color: #fff;
  }
`;

const link = css`
  background: transparent;
  color: ${props => props.theme?.colors?.primary ?? "#e2863d"};
  padding: 8px;
`;

const StyledButton = styled.button`
  outline: none;
  min-width: ${props => props.width};
  width: auto;
  height: 40px;
  padding: 8px 35px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
  ${props => (props.type === "primary" ? primary : undefined)};
  ${props => (props.type === "secondary" ? secondary : undefined)};
  ${props => (props.type === "link" ? link : undefined)};

  &:disabled {
    opacity: 0.3;
    cursor: initial;
  }
`;

/**
 * "A poet can write about a man slaying a dragon, but not about a man pushing a button that releases a bomb." - W. H. Auden
 */
const Button = ({
  type = "primary",
  children,
  onClick,
  disabled = false,
  className,
  width = "121px",
  ...props
}) => {
  return (
    <StyledButton
      className={className}
      type={type}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  /**
   * Type of the button
   */
  type: PropTypes.oneOf(["primary", "secondary", "link"]),
  /**
   * Disables the button
   */
  disabled: PropTypes.bool,
  /**
   * Accepts an onClick event
   */
  onClick: PropTypes.func,
  /*
   * Text of button
   */
  children: PropTypes.node
};

export default Button;
