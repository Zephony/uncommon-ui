import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import ReactSelect from 'react-select';
import defaultTheme from '../../utils/theme';

const Label = styled.label`
    display: block;
    font-size: 14px;
    color: ${props => props.theme.colors.secondary};
    font-weight: bold;
    line-height: 21px;
    margin-bottom: 5px;
`;

const commonTextStyle = {
    color: '#585858',
    fontSize: '15px',
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
    font-size: 12px;
    letter-spacing: 0;
    line-height: 18px;
    height: 12px;
`;

/**
 * Wrapper over ReactSelect
 */
const Select = ({
    label,
    error,
    className = '',
    value,
    options,
    isMulti,
    theme = defaultTheme, // Uses the theme by default
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

    let selectedOption =
        typeof value === 'object' || value === null
            ? value
            : mapSelectedOptionValue();
    return (
        <ThemeProvider theme={theme}>
            <div className={`uu-select ${className}`}>
                {label && <Label>{label}</Label>}
                <ReactSelect
                    closeMenuOnSelect={!isMulti}
                    styles={customStyles}
                    error={error}
                    filterOption={customFilter}
                    value={selectedOption}
                    options={options}
                    isMulti={isMulti}
                    {...props}
                />
                {/* Accounting for the space that error takes up */}
                {error ? <Error>{error}</Error> : <Error />}
            </div>
        </ThemeProvider>
    );
};

Select.propTypes = {
    /**
     * Label for the select
     */
    label: PropTypes.string,
    /**
     * An error message that sets the input to error state
     */
    error: PropTypes.string,
    /**
     * Any react-select supported prop
     */
    props: PropTypes.object,
};

export default Select;
