import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  width: 100%;
`;

const Label = styled.label`
  display: block;
  font-size: 14px;
  color: ${props => props.theme.colors.secondary};
  font-weight: 500;
  line-height: 21px;
`;

const StyledInput = styled.input`
  width: ${props => props.width || "400px"};
  height: 50px;
  border-radius: 6px;
  border: solid 1px
    ${props => (props.error ? props.theme.colors.error : "#DADADA")};
  padding: 14px 10px;
  font-size: 15px;
  letter-spacing: 0;
  line-height: 22px;
  box-sizing: border-box;
  margin: 5px 0;

  &:focus {
    outline: none !important;
    border-color: ${props => props.theme.colors.primary};
  }

  &::placeholder {
    opacity: 0.5;
    color: ${props => props.theme.colors.secondary};
  }
`;

const Error = styled.div`
  color: ${props => props.theme.colors.error};
  font-size: 12px;
  letter-spacing: 0;
  line-height: 18px;
`;

/**
 * "You can much better have an influence on the debate when you sit at the bargaining table and you can give input." - Angela Merkel
 */
const Input = ({ label, width, error, ...props }) => (
  <div>
    {label && <Label>{label}</Label>}
    <Wrapper>
      <StyledInput error={error} width={width} {...props} />
      {error && <Error>{error}</Error>}
    </Wrapper>
  </div>
);

Input.propTypes = {
  label: PropTypes.string,
  /**
   * Any CSS width value
   */
  width: PropTypes.string,
  /**
   * An error message that sets the input to error state
   */
  error: PropTypes.string
};

export default Input;
