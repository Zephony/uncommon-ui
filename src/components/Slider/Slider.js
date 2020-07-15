/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Arrow from "./Arrow";

const SliderWrapper = styled.div`
  height: ${props => props.height}px;
  width: ${props => props.width}px;
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
const Slider = ({
  children,
  width,
  height,
  infinite,
  initial,
  autoplay,
  autoplaySpeed
}) => {
  const ref = useRef();
  const [state, setState] = useState({
    activeIndex: initial,
    translate: initial * width,
    transition: 0.45
  });

  const { translate, transition, activeIndex } = state;

  const items = children;

  const nextSlide = () => {
    // At the last slide
    if (activeIndex === items.length - 1) {
      return setState({
        ...state,
        translate: 0,
        activeIndex: 0
      });
    }

    setState({
      ...state,
      activeIndex: activeIndex + 1,
      translate: (activeIndex + 1) * width
    });
  };

  const prevSlide = () => {
    // At the first slide
    if (activeIndex === 0) {
      return setState({
        ...state,
        translate: (items.length - 1) * width,
        activeIndex: items.length - 1
      });
    }

    setState({
      ...state,
      activeIndex: activeIndex - 1,
      translate: (activeIndex - 1) * width
    });
  };

  useEffect(() => {
    if (autoplay) {
      let id = setInterval(() => {
        nextSlide();
      }, autoplaySpeed);
      return () => clearInterval(id);
    }
  });

  return (
    <SliderWrapper width={width} height={height} ref={ref}>
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
        disabled={!infinite && activeIndex === 0}
      />
      <Arrow
        onClick={nextSlide}
        direction="right"
        disabled={!infinite && activeIndex === items.length - 1}
      />
    </SliderWrapper>
  );
};

Slider.defaultProps = {
  width: 800,
  height: 400,
  initial: 0,
  autoplaySpeed: 3000
};

Slider.propTypes = {
  /*
   * The width of the slider which the slides should also have
   */
  width: PropTypes.number,
  /*
   * The height of the slider which the slides should also have
   */
  height: PropTypes.number,
  /*
   * Slider has no start or end
   */
  infinite: PropTypes.bool,
  /*
   * Slider changes automatically
   */
  autoplay: PropTypes.bool,
  /*
   * Speed for autoplay in ms
   */
  autoplaySpeed: PropTypes.number,
  /*
   * Usually elements that will be the slides
   */
  children: PropTypes.node
};

export default Slider;
