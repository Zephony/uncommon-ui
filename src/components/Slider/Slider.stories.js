import React from "react";
import styled from "styled-components";
import Slider from "./Slider";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Item = styled.h3`
  background: #5f9ea0;
  color: #fff;
  font-size: 36px;
  line-height: 100px;
  margin: 10px;
  padding: 2%;
  position: relative;
  text-align: center;
`;

export default {
  title: "Slider",

  parameters: {
    component: Slider
  }
};

export const defaultSlider = () => {
  const settings = {};
  return (
    <Wrapper>
      <Slider {...settings}>
        <Item>1</Item>
        <Item>2</Item>
      </Slider>
    </Wrapper>
  );
};
