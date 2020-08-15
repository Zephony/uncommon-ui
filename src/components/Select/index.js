import React from "react";
import styled from "styled-components";
import ReactSelect from "react-select";
import theme from "../../utils/theme";

const Label = styled.label`
  display: block;
  font-size: 14px;
  color: ${(props) => props.theme.colors.secondary};
  font-weight: bold;
  line-height: 21px;
  margin-bottom: 5px;
`;

const commonTextStyle = {
  color: "#585858",
  fontSize: "15px",
  letterSpacing: "0",
};

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    ...commonTextStyle,
    color: state.isSelected ? "#fff" : "#585858",
    backgroundColor: state.isSelected ? theme.colors.primary : "#fff",
    ":hover": {
      ...provided[":hover"],
      color: "#fff",
      backgroundColor: theme.colors.hoverPrimary,
    },
  }),
  menu: (provided, state) => ({
    ...provided,
    zIndex: 10,
  }),
  control: (provided, state) => ({
    ...provided,
    height: "50px",
    border: state.isFocused
      ? `1px solid ${theme.colors.primary}`
      : "1px solid #DADADA",
    // This line disable the blue border
    boxShadow: state.isFocused && 0,
    borderRadius: "6px",
    backgroundColor: "#FFFFFF",
    borderColor: state.isFocused ? theme.colors.primary : "#DADADA",
    "&:hover": {
      borderColor: state.isFocused ? theme.colors.primary : "#DADADA",
    },
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  placeholder: (provided, state) => ({
    ...provided,
    ...commonTextStyle,
  }),
  singleValue: (provided, state) => ({
    ...provided,
    ...commonTextStyle,
  }),
};

const customFilter = (option, rawInput) => {
  const words = rawInput.split(" ");

  if (option.data.searchString) {
    return words.reduce(
      (acc, cur) =>
        acc &&
        option.data.searchString.toLowerCase().includes(cur.toLowerCase()),
      true
    );
  }

  if (typeof option.label === "string") {
    return words.reduce(
      (acc, cur) =>
        acc && option.label.toLowerCase().includes(cur.toLowerCase()),
      true
    );
  }

  if (!rawInput) {
    return true;
  }

  return false;
};

const Select = ({ label, ...props }) => {
  return (
    <div>
      {label && <Label>{label}</Label>}
      <ReactSelect
        {...props}
        closeMenuOnSelect={!props.isMulti}
        styles={customStyles}
        filterOption={customFilter}
      />
    </div>
  );
};

export default Select;
