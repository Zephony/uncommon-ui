import React, { useState } from "react";
import styled from "styled-components";
import Select from "./";

const Wrapper = styled.div`
  width: 400px;
  padding: 20px;
`;

export default {
  title: "Forms/Select",

  parameters: {
    component: Select,
  },
};

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export const BasicSelect = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <Wrapper>
      <Select
        value={selectedOption}
        onChange={(option) => setSelectedOption(option)}
        options={options}
        label="Ice Cream"
      />
    </Wrapper>
  );
};

export const ErrorState = () => {
  return (
    <Wrapper>
      <Select options={options} label="Ice Cream" error="This is an error" />
    </Wrapper>
  );
};
