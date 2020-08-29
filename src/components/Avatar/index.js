import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import BlankImage from './blank.png';

const propTypes = {
    /**
     * Becomes the width and height of the avatar in px
     */
    size: PropTypes.string,
    /**
     * Image URL for avatar, fallsback to empty avatar
     */
    src: PropTypes.string,
    /**
     * To indicate avatar is active
     */
    isActive: PropTypes.bool,
    /**
     * Change color of active indicator
     */
    activeColor: PropTypes.string,
};

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

const Avatar = ({
    src = BlankImage,
    size = '40px',
    isActive,
    activeColor = '#e2863d',
    className = '',
    ...props
}) => {
    return (
        <Wrapper {...props} className={`uu-avatar ${className}`}>
            <Image size={size} src={src} className="uu-avatar-image" />
            {isActive && (
                <Active color={activeColor} className="uu-avatar-active" />
            )}
        </Wrapper>
    );
};

Avatar.propTypes = propTypes;

export default Avatar;
