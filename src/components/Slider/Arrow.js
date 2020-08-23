import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  display: flex;
  align-items: center;
  color: ${(props) => (props.disabled ? "rgba(0,0,0,0.2)" : props.color)};
  border: ${(props) =>
    props.disabled ? "1px solid #eee" : "1px solid rgba(0,0,0,0.2)"};
  border-radius: 50px;
  ${(props) =>
    props.direction === "left"
      ? css`
          left: 10px;
        `
      : css`
          right: 10px;
        `};
  ${(props) =>
    props.hideBorder &&
    css`
      border: none;
    `}
`;

const Arrow = ({
  direction,
  onClick,
  disabled,
  color = "#000",
  fontSize = 40,
  hideBorder,
}) => {
  return (
    <Wrapper
      onClick={disabled ? () => {} : onClick}
      direction={direction}
      disabled={disabled}
      color={color}
      hideBorder={hideBorder}
    >
      {direction === "left" ? (
        <ChevronLeftIcon style={{ fontSize }} />
      ) : (
        <ChevronRightIcon style={{ fontSize }} />
      )}
    </Wrapper>
  );
};

Arrow.propTypes = {
  /**
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
  disabled: PropTypes.bool,
  /**
   * Size of the arrow
   */
  fontSize: PropTypes.number,
};

export default Arrow;
