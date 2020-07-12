import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const getWidth = () => window.innerWidth;

const ArrowIcon = styled.i`
  font-size: 40px !important;
`;

const Arrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #979797;
  border: 1px solid #979797;
  border-radius: 50px;
`;

const LeftButton = styled(Arrow)`
  left: 25px;
`;

const RightButton = styled(Arrow)`
  right: 25px;
`;

const LeftArrow = ({ onClick }) => {
  return (
    <LeftButton onClick={onClick}>
      <ArrowIcon className="material-icons">chevron_left</ArrowIcon>
    </LeftButton>
  );
};

const RightArrow = ({ onClick }) => {
  return (
    <RightButton onClick={onClick}>
      <ArrowIcon className="material-icons">chevron_right</ArrowIcon>
    </RightButton>
  );
};

const SliderWrapper = styled.div`
  height: 400px;
  width: 800px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  white-space: nowrap;
`;

const SliderContent = styled.div`
  transform: translateX(-${props => props.translate}px);
  transition: transform ease-out ${props => props.transition}s;
  height: 100%;
  width: ${props => props.width}px;
  display: flex;
`;

const Slide = styled.div`
  height: 100%;
  width: 100%;
  background-image: url('${props => props.content}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

/**
 * "I know if I rest, I'll slide downhill fast." - Lee Kuan Yew
 */
const Slider = ({ slides, children, width }) => {
  const [state, setState] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.45
  });

  const { translate, transition, activeIndex } = state;

  const items = slides || children;

  const nextSlide = () => {
    setState({
      ...state,
      translate: translate + width,
      activeIndex: activeIndex === items.length - 1 ? 0 : activeIndex + 1
    });
  };

  const prevSlide = () => {
    setState({
      ...state,
      translate: 0,
      activeIndex: activeIndex === 0 ? items.length - 1 : activeIndex - 1
    });
  };

  return (
    <SliderWrapper>
      <SliderContent
        translate={translate}
        transition={transition}
        width={width * items.length}
      >
        {items.map((item, i) => (
          <Slide key={i}>{item}</Slide>
        ))}
      </SliderContent>
      <LeftArrow onClick={prevSlide} />
      <RightArrow onClick={nextSlide} />
    </SliderWrapper>
  );
};

Slider.propTypes = {
  /*
   * The width of the slider which the slides should also have
   */
  width: PropTypes.number,

  /*
   * Usually elements that will be the slides
   */
  children: PropTypes.node
};

export default Slider;
