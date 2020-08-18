import React, { useRef } from "react";
import styled, { ThemeProvider, css } from "styled-components";
import PropTypes from "prop-types";
import defaultTheme from "../../../utils/theme";
import { useResize } from "../../../utils/helpers";

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  font-size: 15px;
  width: 100%;
`;

const Label = styled.label`
  display: block;
  font-size: 14px;
  color: ${(props) => props.theme.colors.secondary};
  font-weight: bold;
  line-height: 21px;
`;

const StyledInput = styled.input`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 6px;
  border: solid 1px
    ${(props) => (props.error ? props.theme.colors.error : "#DADADA")};
  padding: 14px 10px;
  letter-spacing: 0;
  line-height: 22px;
  box-sizing: border-box;
  margin: 5px 0;
  ${(props) =>
    props.icon &&
    css`
      padding-left: 42px;
    `}
  ${(props) =>
    props.cta &&
    css`
      padding-right: ${props.ctaWidth + 20}px;
    `}

  &:focus {
    outline: none !important;
    border-color: ${(props) => props.theme.colors.primary};
  }

  &::placeholder {
    opacity: 0.5;
    color: ${(props) => props.theme.colors.secondary};
  }

  &:disabled {
    background-color: #f7f7f7;
  }
`;

const Error = styled.div`
  color: ${(props) => props.theme.colors.error};
  font-size: 12px;
  letter-spacing: 0;
  line-height: 18px;
  height: 12px;
`;

const Icon = styled.i`
  font-size: 20px;
  color: rgba(0, 0, 0, 0.26);
  position: absolute;
  top: 21px;
  left: 12px;
`;

const CTAWrapper = styled.div`
  position: absolute;
  top: 19px;
  right: 12px;
  cursor: pointer;
`;

/**
 * "You can much better have an influence on the debate when you sit at the bargaining table and you can give input." - Angela Merkel
 */
const Input = ({
  label,
  width = "100%",
  height = "50px",
  error,
  icon,
  iconClassName,
  cta,
  ctaAction,
  required,
  theme = defaultTheme, // Uses the theme by default
  ...props
}) => {
  const ctaRef = useRef();
  const { width: ctaWidth } = useResize(ctaRef);
  return (
    <ThemeProvider theme={theme}>
      <div className="uu-input">
        {label && (
          <Label>
            {label}
            {required && <span style={{ color: "#c84242" }}>*</span>}
          </Label>
        )}
        <Wrapper>
          <StyledInput
            error={error}
            width={width}
            height={height}
            icon={icon}
            cta={cta}
            ctaWidth={ctaWidth}
            {...props}
          />
          {icon && (
            <Icon className={`${iconClassName} material-icons`}>{icon}</Icon>
          )}
          {cta && (
            <CTAWrapper ref={ctaRef} onClick={ctaAction}>
              {cta}
            </CTAWrapper>
          )}
          {/* Accounting for the space that error takes up */}
          {error ? <Error>{error}</Error> : <Error />}
        </Wrapper>
      </div>
    </ThemeProvider>
  );
};

Input.propTypes = {
  /**
   * Value passed to the input
   */
  value: PropTypes.string,
  /**
   * onChange handler
   */
  onChange: PropTypes.func,
  /**
   * Label for the input
   */
  label: PropTypes.string,
  /**
   * If an input is required or not
   */
  required: PropTypes.bool,
  /**
   * Any CSS width value
   */
  width: PropTypes.string,
  /**
   * Any CSS height value
   */
  height: PropTypes.string,
  /**
   * An error message that sets the input to error state
   */
  error: PropTypes.string,
  /**
   * Material icon name
   */
  icon: PropTypes.string,
  /**
   * To override icon styling
   */
  iconClassName: PropTypes.string,
  /**
   * Add any element to display as a CTA
   */
  cta: PropTypes.node,
  /**
   * Action to be taken when CTA is clicked
   */
  ctaAction: PropTypes.func,
  /**
   * Theme override
   */
  theme: PropTypes.object,
};

export default Input;
