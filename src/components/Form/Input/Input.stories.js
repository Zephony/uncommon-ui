import React, { useState } from "react";
import styled from "styled-components";
import Input from "./";

export default {
  title: "Forms/Input",

  parameters: {
    component: Input
  }
};

export const InputDefault = () => {
  const [value, setValue] = useState("");

  return (
    <Input type="text" value={value} onChange={e => setValue(e.target.value)} />
  );
};

export const InputWithLabel = () => {
  return <Input type="text" label="This is a label" />;
};

export const InputRequired = () => {
  return <Input type="text" label="This is required" required />;
};

export const InputDisabled = () => {
  return <Input type="text" label="This is disabled" disabled />;
};

export const InputVariableWidth = () => {
  return (
    <Input type="text" width="280px" placeholder="Enter message here..." />
  );
};

export const InputWithError = () => {
  return (
    <Input
      type="text"
      width="380px"
      placeholder="Enter message here..."
      error="This is an error"
    />
  );
};

export const InputWithIcon = () => {
  return (
    <Input
      type="text"
      width="380px"
      placeholder="Enter message here..."
      icon="search"
    />
  );
};

export const InputWithCTA = () => {
  const CTA = styled.div`
    color: #3577ec;
    letter-spacing: 0;
    line-height: 22px;

    &:hover {
      color: rgba(53, 119, 236, 0.8);
    }
  `;
  return (
    <Input
      type="text"
      width="380px"
      placeholder="Enter message here..."
      cta={<CTA>Verify</CTA>}
      ctaAction={() => console.log("Ma I've been clicked!")}
    />
  );
};

export const OverrideInputStyles = () => {
  return (
    <Input
      type="text"
      icon="search"
      className="tag-input" // To override input styles
      iconClassName="tag-input-icon" // To override icon styles
      placeholder="Search Tags"
    />
  );
};
