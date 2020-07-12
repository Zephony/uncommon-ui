import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const ArrowIcon = styled.i`
  font-size: 40px !important;
`;

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  cursor: ${props => (props.disabled ? "default" : "pointer")};
  display: flex;
  align-items: center;
  color: ${props => (props.disabled ? "#eee" : "#000")};
  border: ${props => (props.disabled ? "1px solid #eee" : "1px solid #000")};
  border-radius: 50px;
  ${props =>
    props.direction === "left"
      ? css`
          left: 25px;
        `
      : css`
          right: 25px;
        `};
`;

const Arrow = ({ direction, onClick, disabled }) => {
  return (
    <Wrapper
      onClick={disabled ? () => {} : onClick}
      direction={direction}
      disabled={disabled}
    >
      <ArrowIcon className="material-icons">
        {direction === "left" ? "chevron_left" : "chevron_right"}
      </ArrowIcon>
    </Wrapper>
  );
};

Arrow.propTypes = {
  /*
   * The direction of the arrow
   */
  direction: PropTypes.oneOf(["left", "right"]),
  /**
   * Accepts an onClick event
   */
  onClick: PropTypes.func,
  /**
   * Disables the arrow
   */
  disabled: PropTypes.bool
};

export default Arrow;
