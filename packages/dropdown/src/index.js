/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Trigger from './trigger';

const Wrapper = styled.div`
    color: #98a2ae;
    font-size: 0.875em;
    color: #98a2ae;
    position: relative;
`;

const List = styled.div`
    width: 200px;
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 0px 0px 3px 3px;
    position: absolute;
    top: 40px;
`;

const Option = styled.div`
    padding-left: 10px;
    padding: 12px;
    display: flex;
    cursor: pointer;

    &:hover {
        background-color: #eee;
    }
`;

const Name = styled.div`
    margin-left: 10px;
`;

/**
 * "Writing a book of poetry is like dropping a rose petal down the Grand Canyon and waiting for the echo." - Don Marquis
 */
// To be merged with Button Type
const Dropdown = ({
    triggerText = 'Select an Option',
    options,
    dropdownOpen,
    onTriggerClick,
    setDropdownOpen,
    className = '',
}) => {
    const wrapperRef = useRef();

    const handleClick = e => {
        if (wrapperRef.current.contains(e.target)) {
            // inside click
            return;
        }
        // outside click
        setDropdownOpen(false);
    };

    useEffect(() => {
        // add when mounted
        document.addEventListener('mousedown', handleClick);
        // return function to be called when unmounted
        return () => {
            document.removeEventListener('mousedown', handleClick);
        };
    }, [handleClick]);

    return (
        <Wrapper ref={wrapperRef} className={`uu-dropdown ${className}`}>
            <Trigger
                triggerText={triggerText}
                onClick={onTriggerClick}
                className="uu-dropdown-trigger"
            />
            {dropdownOpen && (
                <List className="uu-dropdown-list">
                    {options.map(item => (
                        <Option
                            className="uu-dropdown-option"
                            key={item.id}
                            onClick={() => item.action(item)}
                        >
                            {item.icon && <div>{item.icon}</div>}
                            <Name>{item.name}</Name>
                        </Option>
                    ))}
                </List>
            )}
        </Wrapper>
    );
};

Dropdown.propTypes = {
    /**
     * Dropdown options
     */
    options: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            name: PropTypes.string,
            icon: PropTypes.node,
            action: PropTypes.func,
        })
    ).isRequired,
    /**
     * Text to display for trigger
     */
    triggerText: PropTypes.string,
    /**
     * Dropdown open or closed
     */
    dropdownOpen: PropTypes.bool.isRequired,
    /**
     * Function to show/hide the dropdown options
     */
    setDropdownOpen: PropTypes.func.isRequired,
    /**
     * Function called when trigger is clicked
     */
    onTriggerClick: PropTypes.func.isRequired,
};

export default Dropdown;
