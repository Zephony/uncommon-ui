import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SearchSuggest from "./";

export default {
  title: "Search Suggestions",

  parameters: {
    component: SearchSuggest
  }
};

const sampleSuggestions = [
  {
    id: 1,
    category: "Topics",
    name: "Physics"
  },
  {
    id: 2,
    category: "Exam",
    name: "Physics"
  },
  {
    id: 3,
    category: "Forum",
    name: "Physics"
  },
  {
    id: 4,
    category: "Board",
    name: "Physics"
  }
];

const Wrapper = styled.div`
  width: 400px;
`;

export const FormattedSuggestion = () => {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (value) {
      setSuggestions(
        sampleSuggestions.filter(
          item =>
            item.category.toLowerCase().includes(value.toLowerCase()) ||
            item.name.toLowerCase().includes(value.toLowerCase())
        )
      );
    } else {
      setSuggestions([]);
    }
  }, [value]);

  return (
    <Wrapper>
      <SearchSuggest
        value={value}
        setValue={setValue}
        suggestions={suggestions}
        formatSuggestion={item => (
          <span>
            {item.category}:{" "}
            <span style={{ fontWeight: "bold" }}>{item.name}</span>
          </span>
        )}
        onSuggestionClick={item => console.log("Do something with me", item)}
        onSearch={value => console.log("Searching with value", value)}
      />
    </Wrapper>
  );
};
