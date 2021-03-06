import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Input } from '@uncommonui/input';
import { Checkbox } from '@uncommonui/checkbox';
import { Button } from '@uncommonui/button';

const propTypes = {
    /**
     * Data to be displayed
     */
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            name: PropTypes.string,
        })
    ).isRequired,
    /**
     * To update the data
     */
    setData: PropTypes.func.isRequired,
    /**
     * Accepts an event when cancel button is clicked
     */
    onCancel: PropTypes.func,
    /**
     * Accepts an event when submit button is clicked
     */
    onSubmit: PropTypes.func,
    /**
     * Accepts an event when clear button is clicked
     */
    onClear: PropTypes.func,
};

const Wrapper = styled.div`
    width: 100%;
`;

const Header = styled.div`
    height: 75px;
    display: flex;
    align-items: center;
    padding-left: 20px;
`;

const Content = styled.div`
  padding: 20px;
  height: 205px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  border-top: 1px solid #ededed;
  border-bottom: 1px solid #ededed;
  overflow-x: scroll;
  scrollbar-width: thin;

  &::-webkit-scrollbar-thumb {
    border-radius: 2.5px;
    background-color: #B3B3B3;
    width: 5px;
}
  }
`;

const Footer = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 20px;
`;

const ButtonWrapper = styled.div`
    padding-left: 10px;
`;

const CheckboxWrapper = styled.div`
    padding-bottom: 10px;
    padding-right: 10px;
`;

/**
 * "There is a time and a place for things. Sometimes one needs to put a filter on oneself. That can be a good thing." - Tori Amos
 */
export const TagFilter = ({
    data,
    setData,
    onCancel,
    onSubmit,
    onClear,
    className = '',
}) => {
    const [value, setValue] = useState('');
    const [filteredData, setFilteredData] = useState(data);

    const handleCheckboxChange = (e, id) => {
        let updatedData = [...data];
        updatedData[updatedData.findIndex(el => el.id === id)].isChecked =
            e.target.checked;
        setData(updatedData);
    };

    const onSearchChange = e => {
        setValue(e.target.value);
        let value = e.target.value;
        let filteredData = data.filter(el =>
            el.name.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredData(filteredData);
    };

    const onClearClick = () => {
        setFilteredData(data);
        setValue('');
    };

    return (
        <Wrapper className={`uu-tag-filter ${className}`}>
            <Header className="uu-tag-filter-header">
                <Input
                    type="text"
                    value={value}
                    onChange={onSearchChange}
                    icon="search"
                    width="300px"
                    className="tag-input" // To override input styles
                    iconClassName="tag-input-icon" // To override icon styles
                    placeholder="Search Tags"
                />
            </Header>
            <Content className="uu-tag-filter-content">
                {filteredData.map(({ name, id, isChecked }) => (
                    <CheckboxWrapper key={id}>
                        <Checkbox
                            checked={isChecked}
                            label={name}
                            onChange={e => handleCheckboxChange(e, id)}
                        />
                    </CheckboxWrapper>
                ))}
            </Content>
            <Footer className="uu-tag-filter-footer">
                <Button
                    className="uu-tag-filter-clearBtn"
                    onClick={onClear || onClearClick}
                    type="link"
                >
                    Clear All
                </Button>
                <ButtonWrapper>
                    <Button
                        onClick={onCancel}
                        type="primary"
                        className="uu-tag-filter-cancelBtn"
                    >
                        Cancel
                    </Button>
                </ButtonWrapper>
                <ButtonWrapper>
                    <Button
                        onClick={onSubmit}
                        type="secondary"
                        className="uu-tag-filter-submitBtn"
                    >
                        Submit
                    </Button>
                </ButtonWrapper>
            </Footer>
        </Wrapper>
    );
};

TagFilter.propTypes = propTypes;

export default TagFilter;
