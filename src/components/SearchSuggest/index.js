/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import Input from "../Input";
import { useKeyPress } from "../../utils/helpers";

const Wrapper = styled.div`
  position: relative;
  ${"" /* display: inline-block; */}
  width: 100%;
`;

const List = styled.div`
  box-sizing: border-box;
  padding: 0 4px;
  position: absolute;
  border: 1px solid transparent;
  width: 100%;
  ${(props) =>
    props.showList &&
    css`
      border: 1px solid #ededed;
      border-radius: 20px;
      background-color: #ffffff;
      box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.14);
    `}
`;

const Results = styled.div`
  padding-left: 42px;
  font-size: 14px;
  max-height: 500px;
  overflow: auto;

  & > div {
    &:hover {
      color: #3577ec;
    }
  }
`;

const Item = styled.div`
  padding: 10px 0;
  cursor: pointer;
  color: ${(props) => props.highlighted && "#3577ec"};
`;

/**
 * "I do not want to suggest that you have to be religious to be moral.” - Jonathan Sacks
 */
const SearchSuggest = ({
  value,
  setValue,
  suggestions,
  formatSuggestion,
  onSuggestionClick,
  onSearch,
  className,
}) => {
  const [highlighted, setHighlighted] = useState(null);
  const upPress = useKeyPress("ArrowUp");
  const downPress = useKeyPress("ArrowDown");
  const enterPress = useKeyPress("Enter");

  useEffect(() => {
    // Reset whenever value changes
    setHighlighted(null);
  }, [value]);

  useEffect(() => {
    if (highlighted !== null) {
      if (upPress) {
        if (highlighted === 0) {
          setHighlighted(suggestions.length - 1);
        } else {
          setHighlighted(highlighted - 1);
        }
      } else if (downPress) {
        if (highlighted === suggestions.length - 1) {
          setHighlighted(0);
        } else {
          setHighlighted(highlighted + 1);
        }
      }
    } else {
      setHighlighted(0);
    }
  }, [upPress, downPress]);

  useEffect(() => {
    // If a value is highlighted
    if (suggestions[highlighted]) {
      onSuggestionClick(suggestions[highlighted]);
    } else {
      // Search with just the search term
      onSearch(value);
    }
  }, [enterPress]);

  return (
    <Wrapper className={className || "uu-search-suggest"}>
      <List showList={value.length > 0}>
        <Input
          type="text"
          icon="search"
          className="uu-search-input" // To override input styles
          iconClassName="uu-search-input-icon" // To override icon styles
          placeholder="Search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Results>
          {formatSuggestion
            ? suggestions.map((item, i) => (
                <Item
                  highlighted={highlighted === i}
                  onClick={() => onSuggestionClick(item)}
                  key={item.id}
                >
                  {formatSuggestion(item)}
                </Item>
              ))
            : suggestions.map((item, i) => (
                <Item
                  highlighted={highlighted === i}
                  onClick={() => onSuggestionClick(item)}
                  key={item.id}
                >
                  {item.category}: {item.name}
                </Item>
              ))}
        </Results>
      </List>
    </Wrapper>
  );
};

SearchSuggest.propTypes = {
  /**
   * Value of the search input
   */
  value: PropTypes.string,
  /**
   * To set the value of the search input
   */
  setValue: PropTypes.func,
  /**
   * Array of suggestions
   */
  suggestions: PropTypes.array,
  /**
   * To override styling or display for each suggestion
   */
  formatSuggestion: PropTypes.func,
  /**
   * Action when suggestion is clicked
   */
  onSuggestionClick: PropTypes.func,
  /**
   * Action when search with the term is triggered
   */
  onSearch: PropTypes.func,
};

export default SearchSuggest;
