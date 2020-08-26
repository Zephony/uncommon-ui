import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import ReactSelect from 'react-select';
import defaultTheme from '../../utils/theme';

const Label = styled.label`
    display: block;
    font-size: 14px;
    color: ${(props) => props.theme.colors.secondary};
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
    color: ${(props) => props.theme.colors.error};
    font-size: 12px;
    letter-spacing: 0;
    line-height: 18px;
    height: 12px;
`;

const Select = ({
    label,
    error,
    className,
    theme = defaultTheme, // Uses the theme by default
    ...props
}) => {
    return (
        <ThemeProvider theme={theme}>
            <div className={className || 'uu-select'}>
                {label && <Label>{label}</Label>}
                <ReactSelect
                    {...props}
                    closeMenuOnSelect={!props.isMulti}
                    styles={customStyles}
                    error={error}
                    filterOption={customFilter}
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
