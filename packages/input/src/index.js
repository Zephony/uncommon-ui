import React, { useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { useResize } from '@uncommonui/utils';

const propTypes = {
    /**
     * Value spassed to the input
     */
    value: PropTypes.string,
    /**
     * onChange handler
     */
    onChange: PropTypes.func,
    /**
     * Label for the input
     */
    label: PropTypes.string,
    /**
     * If an input is required or not
     */
    required: PropTypes.bool,
    /**
     * Any CSS width value
     */
    width: PropTypes.string,
    /**
     * Any CSS height value
     */
    height: PropTypes.string,
    /**
     * An error message that sets the input to error state
     */
    error: PropTypes.string,
    /**
     * Material icon name
     */
    icon: PropTypes.string,
    /**
     * To override icon styling
     */
    iconClassName: PropTypes.string,
    /**
     * Add any element to display as a CTA
     */
    cta: PropTypes.node,
    /**
     * Action to be taken when CTA is clicked
     */
    ctaAction: PropTypes.func,
    /**
     * Theme override
     */
    theme: PropTypes.object,
    /**
     * Automatically resizes textarea height as content overflows
     */
    autoResize: PropTypes.bool,
};

const Wrapper = styled.div`
    display: inline-block;
    position: relative;
    font-size: 1.25em;
    width: ${props => props.width};
`;

const Label = styled.label`
    display: block;
    font-size: 0.875em;
    color: ${props => props.theme.colors.secondary};
    font-weight: bold;
    line-height: 21px;
    margin-bottom: 5px;
`;

const StyledInput = styled.input`
    width: ${props => props.width};
    height: ${props => props.height};
    border-radius: 6px;
    border: solid 1px
        ${props => (props.error ? props.theme.colors.error : '#DADADA')};
    padding: 14px 10px;
    letter-spacing: 0;
    line-height: 22px;
    box-sizing: border-box;
    resize: none;
    
    &:focus {
        outline: none !important;
        border-color: ${props => props.theme.colors.primary};
    }

    &::placeholder {
        opacity: 0.5;
        color: ${props => props.theme.colors.secondary};
    }

    &:disabled {
        background-color: #f7f7f7;
    }

    ${props =>
        props.icon &&
        css`
            padding-left: 42px;
        `}
        
    ${props =>
        props.cta &&
        css`
            padding-right: ${props.ctaWidth + 20}px;
        `}

    ${props =>
        props.border &&
        css`
            border: ${props.border};
        `}

    ${props =>
        props.type === 'textarea' &&
        css`
            min-height: 80px;
        `}
`;

const HiddenDiv = styled(StyledInput)`
    display: none;
    white-space: pre-wrap;
    word-wrap: break-word;
`;

const Error = styled.div`
    color: ${props => props.theme.colors.error};
    font-size: 0.75em;
    letter-spacing: 0;
    line-height: 18px;
    height: 12px;
    position: absolute;
`;

const Icon = styled.i`
    font-size: 1.25em;
    color: rgba(0, 0, 0, 0.26);
    position: absolute;
    top: 16px;
    left: 12px;
`;

const CTAWrapper = styled.div`
    position: absolute;
    top: 0px;
    right: 12px;
    cursor: pointer;
    display: flex;
    align-items: center;
    height: 100%;
`;

/**
 * "You can much better have an influence on the debate when you sit at the bargaining table and you can give input." - Angela Merkel
 */
export const Input = ({
    type,
    value,
    label,
    width = '100%',
    height = '50px',
    error,
    icon,
    iconClassName,
    cta,
    required,
    border,
    autoResize,
    className = '',
    ...props
}) => {
    const ctaRef = useRef();
    const inputRef = useRef();
    const hiddenDivRef = useRef();
    const { width: ctaWidth } = useResize(ctaRef);

    useEffect(() => {
        if (autoResize) {
            let textarea = inputRef.current;
            let hiddenDiv = hiddenDivRef.current;
            textarea.style.resize = 'none';
            textarea.style.overflow = 'hidden';
            // Add the same content to the hidden div
            hiddenDiv.innerHTML = value;
            // Briefly make the hidden div block but invisible
            // This is in order to read the height
            hiddenDiv.style.visibility = 'hidden';
            hiddenDiv.style.display = 'block';
            textarea.style.height = hiddenDiv.offsetHeight + 'px';
            // Make the hidden div display:none again
            hiddenDiv.style.visibility = 'visible';
            hiddenDiv.style.display = 'none';
        }
    }, [value]);

    return (
        <div className={`uu-input ${className}`}>
            {label && (
                <Label className="uu-input-label">
                    {label}
                    {required && (
                        <span
                            style={{ color: '#c84242' }}
                            className="uu-input-label-required"
                        >
                            *
                        </span>
                    )}
                </Label>
            )}
            <Wrapper width={width} className="uu-input-wrapper">
                <StyledInput
                    className="uu-input-control"
                    // Dynamically render tag used
                    as={type === 'textarea' ? 'textarea' : 'input'}
                    value={value || (type === 'number' ? 0 : '')}
                    ref={inputRef}
                    error={error}
                    width={width}
                    height={height}
                    icon={icon}
                    cta={cta}
                    ctaWidth={ctaWidth}
                    type={type}
                    border={border}
                    {...props}
                />
                {/* Used for textarea autoresize - https://www.impressivewebs.com/textarea-auto-resize/ */}
                {autoResize && <HiddenDiv as="div" ref={hiddenDivRef} />}
                {icon && (
                    <Icon className={`${iconClassName} material-icons`}>
                        {icon}
                    </Icon>
                )}
                {cta && (
                    <CTAWrapper className="uu-input-cta" ref={ctaRef}>
                        {cta}
                    </CTAWrapper>
                )}
                {/* Accounting for the space that error takes up */}
                {error && <Error className="uu-input-error">{error}</Error>}
            </Wrapper>
        </div>
    );
};

Input.propTypes = propTypes;
