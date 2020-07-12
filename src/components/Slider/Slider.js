import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Arrow from "./Arrow";

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
const Slider = ({ children, width }) => {
  const [state, setState] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.45
  });

  const { translate, transition, activeIndex } = state;

  const items = children;

  const nextSlide = () => {
    // At the end of slides
    if (activeIndex === items.length - 1) {
    }
    setState({
      ...state,
      translate: translate + width,
      activeIndex: activeIndex === items.length - 1 ? 0 : activeIndex + 1
    });
  };

  const prevSlide = () => {
    // At the start of slides
    if (activeIndex === 0) {
    }
    setState({
      ...state,
      translate: translate - width,
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
      <Arrow
        onClick={prevSlide}
        direction="left"
        disabled={activeIndex === 0}
      />
      <Arrow
        onClick={nextSlide}
        direction="right"
        disabled={activeIndex === items.length - 1}
      />
    </SliderWrapper>
  );
};

Slider.defaultProps = {
  width: 800
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
