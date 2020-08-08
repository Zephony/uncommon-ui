import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import BlankImage from "./blank.png";

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const Active = styled.div`
  position: absolute;
  width: 8px;
  height: 8px;
  background-color: ${props => props.color};
  border: 2px solid #fff;
  top: 0px;
  right: 0px;
  border-radius: 50%;
`;

const Image = styled.div`
  width: ${props => props.size};
  height: ${props => props.size};
  border-radius: 50%;
  background-image: url('${props => props.src}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

/**
 * "Life happens wherever you are, whether you make it or not.” - Iroh, Avatar the Last Airbender Episode 2.14”
 */
const Avatar = ({
  src = BlankImage,
  size = "40px",
  isActive,
  activeColor = "#e2863d"
}) => {
  return (
    <Wrapper>
      <Image size={size} src={src} />
      {isActive && <Active color={activeColor} />}
    </Wrapper>
  );
};

Avatar.propTypes = {
  /**
   * Becomes the width and height of the avatar in px
   */
  size: PropTypes.string,
  /**
   * Image URL for avatar, fallbacks to empty avatar
   */
  src: PropTypes.string,
  /**
   * To indicate avatar is active
   */
  isActive: PropTypes.bool,
  /**
   * Change color of active indicator
   */
  activeColor: PropTypes.string
};

export default Avatar;
