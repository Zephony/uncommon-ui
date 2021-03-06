import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import ReactSelect, {components} from 'react-select';
import { theme as defaultTheme } from '@uncommonui/theme';

const propTypes = {
    /**
     * Label for the select
     */
    label: PropTypes.string,
    /**
     * Label for the values in case of counts
     */
    valueLabel: PropTypes.string,
    /**
     * Add own styles that react-select accepts
     */
    styles: PropTypes.string,
    /**
     * An error message that sets the input to error state
     */
    error: PropTypes.string,
    /**
     * Any react-select supported prop
     */
    props: PropTypes.object,
};

const Label = styled.label`
    display: block;
    font-size: 0.875em;
    color: ${props => props.theme.colors.secondary};
    font-weight: bold;
    line-height: 21px;
    margin-bottom: 5px;
`;

const commonTextStyle = {
    color: '#585858',
    fontSize: '0.9375em',
    letterSpacing: '0',
};

const customStyles = {
    option: (provided, state) => ({
        ...provided,
        ...commonTextStyle,
        color: state.isSelected ? '#fff' : '#585858',
        backgroundColor: state.isSelected
            ? defaultTheme.colors.primary
            : '#fff',
        ':hover': {
            ...provided[':hover'],
            color: '#fff',
            backgroundColor: defaultTheme.colors.hoverPrimary,
        },
    }),
    menu: (provided, state) => ({
        ...provided,
        zIndex: 10,
    }),
    control: (provided, state) => ({
        ...provided,
        height: '50px',
        border: state.isFocused
            ? `1px solid ${defaultTheme.colors.primary}`
            : '1px solid #DADADA',
        // This line disable the blue border
        boxShadow: state.isFocused && 0,
        borderRadius: '6px',
        backgroundColor: '#FFFFFF',
        borderColor: state.isFocused ? defaultTheme.colors.primary : '#DADADA',
        '&:hover': {
            borderColor: state.isFocused
                ? defaultTheme.colors.primary
                : '#DADADA',
        },
        ...(state.selectProps.error && {
            border: `1px solid ${defaultTheme.colors.error}`,
            '&:hover': {
                borderColor: defaultTheme.colors.error,
            },
        }),
    }),
    indicatorSeparator: () => ({
        display: 'none',
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

// Wraps the react-select to use a better filter method, current one relies on indexOf which isn't great for searching large lists
// New custom search matches if all words in box are found anywhere in the option.label, case in-sensitive
const customFilter = (option, rawInput) => {
    const words = rawInput.split(' ');

    if (option.data.searchString) {
        return words.reduce(
            (acc, cur) =>
                acc &&
                option.data.searchString
                    .toLowerCase()
                    .includes(cur.toLowerCase()),
            true
        );
    }

    if (typeof option.label === 'string') {
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

const Error = styled.div`
    color: ${props => props.theme.colors.error};
    font-size: 0.75em;
    letter-spacing: 0;
    line-height: 18px;
    height: 12px;
`;

const CustomValueContainer: React.FC = (props) => {
  {/* <components.ValueContainer {...props} /> */}
  console.log(props.children, props);
  let [values, input] = props.children;

  if (Array.isArray(values) && values.length > 1) {
    values = `${props.selectProps.valueLabel || 'Selected'} (${values.length})`;
  } else if (Array.isArray(values) && values.length ==  1) {
    values = values[0].props.children;
  }

  return (
    <components.ValueContainer {...props}>
      {values}
      {input}
    </components.ValueContainer>
  );
};

/**
 * Wrapper over ReactSelect
 */
export const Select = ({
    label,
    valueLabel,
    error,
    className = '',
    value,
    options,
    isMulti,
    showCount,
    styles = {},
    ...props
}) => {
    // Needs refactoring but for time constraints
    const mapSelectedOptionValue = () => {
        let selectedOption;
        if (isMulti) {
            // For grouped options
            if (options && options.length > 0 && options[0].options) {
                options.map(parentOption => {
                    let selectedOptionsInsideGroup = parentOption.options.filter(
                        option =>
                            value !== null
                                ? value.includes(option.value)
                                : false
                    );

                    if (!selectedOption) {
                        selectedOption = [];
                    }

                    selectedOption = selectedOption.concat(
                        selectedOptionsInsideGroup
                    );
                });
            } else {
                // For non-grouped options
                selectedOption = options.filter(option =>
                    value !== null ? value.includes(option.value) : false
                );
            }
        } else {
            // For grouped options
            if (options && options.length > 0 && options[0].options) {
                options.map(parentOption => {
                    selectedOption =
                        parentOption.options.find(option => {
                            return option.value === value;
                        }) || selectedOption;
                });
            } else {
                // For non-grouped options
                selectedOption = options.find(option => {
                    return option.value === value;
                });
            }
        }
        return selectedOption;
    };

    const getSelectedOption = () => {
        if (typeof value === 'object' || value === null) {
            if (
                Array.isArray(value) &&
                value.length > 0 &&
                (typeof value[0] === 'string' || typeof value[0] === 'number')
            ) {
                return mapSelectedOptionValue();
            } else {
                return value;
            }
        } else {
            return mapSelectedOptionValue();
        }
    };

    let selectedOption = getSelectedOption();

    return (
        <div className={`uu-select ${className}`}>
            {label && <Label>{label}</Label>}
            <ReactSelect
                closeMenuOnSelect={!isMulti}
                styles={{ ...customStyles, ...styles }}
                error={error}
                filterOption={customFilter}
                value={selectedOption}
                options={options}
                isMulti={isMulti}
                components={{
                  ValueContainer: CustomValueContainer
                  // ValueContainer: ({ children, ...props }) => {
                  //   let [values, input] = children;

                  //   if (Array.isArray(values) && values.length > 1) {
                  //     values = `${valueLabel || 'Selected'} (${values.length})`;
                  //   } else if (Array.isArray(values) && values.length ==  1) {
                  //     values = values[0].props.children;
                  //   }

                  //   return (
                  //     <components.ValueContainer {...props}>
                  //       {values}
                  //       {input}
                  //     </components.ValueContainer>
                  //   );
                  // }
                }}
                {...props}
            />
            {/* Accounting for the space that error takes up */}
            {error ? <Error>{error}</Error> : <Error />}
        </div>
    );
};

Select.propTypes = propTypes;
