import React from 'react';
import styled from 'styled-components';
import { MdArrowDropDown } from 'react-icons/md';

const Wrapper = styled.div`
    box-sizing: border-box;
    width: 200px;
    height: 40px;
    border: 0.75px solid #d4d6d9;
    border-radius: 2px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    justify-content: space-between;
    cursor: pointer;
`;

const IconWrapper = styled.div`
    border-left: 0.75px solid #d4d6d9;
    display: flex;
    height: 100%;
    align-items: center;
    padding: 0 10px;
`;

const Trigger = ({ triggerText, onClick }) => {
    return (
        <Wrapper onClick={onClick}>
            <div>{triggerText}</div>
            <IconWrapper>
                <MdArrowDropDown />
            </IconWrapper>
        </Wrapper>
    );
};

export default Trigger;
