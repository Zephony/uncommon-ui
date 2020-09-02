import React, { useState } from 'react';
import Checkbox from './';

export default {
    title: 'Forms/Checkbox',

    parameters: {
        component: Checkbox,
    },
};

export const CheckboxDefault = () => {
    const [checked, setChecked] = useState(false);

    const handleCheckboxChange = e => setChecked(e.target.checked);

    return (
        <Checkbox
            checked={checked}
            label="Label Text"
            onChange={handleCheckboxChange}
        />
    );
};

export const Checked = () => <Checkbox checked={true} />;

export const Unchecked = () => <Checkbox checked={false} />;

export const DisabledChecked = () => <Checkbox checked={true} disabled />;

export const DisabledUnchecked = () => <Checkbox checked={false} disabled />;
