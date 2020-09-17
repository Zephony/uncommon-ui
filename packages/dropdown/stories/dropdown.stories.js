import React, { useState } from 'react';
import { MdPictureAsPdf } from 'react-icons/md';
import Dropdown from '../src';
import XLSIcon from './xls.svg';

export default {
    title: 'Forms/Dropdown',

    parameters: {
        component: Dropdown,
    },
};

export const BasicDropdown = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const options = [
        {
            id: 1,
            name: 'Export PDF Expanded',
            icon: <MdPictureAsPdf style={{ fontSize: '13px' }} />,
            action: currentItem => console.log('Exporting PDF', currentItem),
        },
        {
            id: 2,
            name: 'Export Excel Expanded',
            icon: <img src={XLSIcon} width="13" alt="export-icon" />,
            action: () => console.log('Exporting Excel'),
        },
    ];
    return (
        <Dropdown
            triggerText="Export Options"
            options={options}
            dropdownOpen={dropdownOpen}
            onTriggerClick={() => setDropdownOpen(!dropdownOpen)}
            setDropdownOpen={setDropdownOpen}
        />
    );
};
