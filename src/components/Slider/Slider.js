import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Arrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  cursor: pointer;
`;

const LeftButton = styled(Arrow)`
  left: -40px;
`;

const RightButton = styled(Arrow)`
  right: -40px;
`;

const LeftArrow = ({ goToPrev }) => {
  return (
    <LeftButton onClick={goToPrev}>
      <i className="material-icons">chevron_left</i>
    </LeftButton>
  );
};

const RightArrow = ({ goToNext }) => {
  return (
    <RightButton onClick={goToNext}>
      <i className="material-icons">chevron_right</i>
    </RightButton>
  );
};

const Carousel = styled.div`
  border: 1px solid red;
  height: 600px;
  width: 80%;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  position: relative;
  ${"" /* overflow: hidden; */}
`;

const Slide = styled.div`
  border: 1px solid blue;
  min-width: 100%;
  height: 600px;
  transition: 0.5s;
  overflow: hidden;
`;

/**
 * "I know if I rest, I'll slide downhill fast." - Lee Kuan Yew
 */
const Slider = ({ children }) => {
  const [x, setX] = useState(0);
  console.log(children);

  const goToPrev = () => {
    console.log(x);
    setX(x + 100);
  };
  const goToNext = () => {
    console.log(x);
    setX(x - 100);
  };
  return (
    <Carousel>
      {children.map((slide, index) => {
        return (
          <Slide key={index} style={{ transform: `translateX(${x}%)` }}>
            {slide}
          </Slide>
        );
      })}
      <LeftArrow goToPrev={goToPrev} />
      <RightArrow goToNext={goToNext} />
    </Carousel>
  );
};

Slider.propTypes = {
  /*
   * Usually elements that will be the slides
   */
  children: PropTypes.node
};

export default Slider;
