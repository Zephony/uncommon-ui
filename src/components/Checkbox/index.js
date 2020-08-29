import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import CheckIcon from '@material-ui/icons/Check';
import defaultTheme from '../../utils/theme';

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox', hidden: true })`
    ${'' /* Hide checkbox visually but remain accessible to screen readers. */}
    ${'' /* Source: https://polished.js.org/docs/#hidevisually */}
`;

const LabelWrapper = styled.label`
    display: inline-flex;
    align-items: center;
`;

const Icon = styled(CheckIcon)`
    display: flex !important;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    color: white;
    font-size: 14px !important;
    cursor: ${props => (props.disabled ? 'default' : 'pointer')};
    background: ${props =>
        props.checked ? props.theme.colors.primary : 'white'};
    border-radius: 3px;
    transition: ease 100ms;
    border: 1px solid
        ${props => (props.checked ? props.theme.colors.primary : '#CACACA')};
    opacity: ${props => (props.disabled && props.checked ? '0.3' : '1')};
`;

const CheckboxContainer = styled.div`
    display: inline-block;
    vertical-align: text-text-bottom;
`;

const Label = styled.span`
    margin-left: 10px;
    font-size: 14px;
    color: #585858;
`;

/**
 * "If you don't keep hatred in check it will breed destruction." - Daryl Davis
 */
const Checkbox = ({
    checked = false,
    onChange,
    labelText,
    disabled = false,
    className = '',
    theme = defaultTheme,
    ...props
}) => (
    <ThemeProvider theme={theme}>
        <LabelWrapper className={`uu-checkbox ${className}`}>
            <CheckboxContainer>
                <HiddenCheckbox
                    checked={checked}
                    onChange={disabled ? () => {} : onChange}
                    {...props}
                />
                <Icon disabled={disabled} checked={checked} />
            </CheckboxContainer>
            {labelText && <Label>{labelText}</Label>}
        </LabelWrapper>
    </ThemeProvider>
);

Checkbox.defaultProps = {
    theme: {
        colors: {
            primary: '#e2863d',
        },
    },
};

Checkbox.propTypes = {
    /**
     * If checkbox is checked or not
     */
    checked: PropTypes.bool,
    /**
     * Disables the checkbox
     */
    disabled: PropTypes.bool,
    /**
     * Text to display for label
     */
    labelText: PropTypes.string,
    /**
     * Accepts an onChange event
     */
    onChange: PropTypes.func,
    /**
     * Theme override
     */
    theme: PropTypes.object,
};

export default Checkbox;
