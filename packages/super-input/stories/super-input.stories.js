import React, { useState } from 'react';
import styled from 'styled-components';
import { action } from '@storybook/addon-actions';
import SuperInput from '../src';
import ImageTile from '@uncommonui/image-tile';

const images = [
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80',
    'https://images.unsplash.com/photo-1595064642091-3b0e22d8de27?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80',
    'https://images.unsplash.com/photo-1594992029224-c7948d15c175?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80',
    'https://images.unsplash.com/photo-1594936702539-125edeb46186?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2855&q=80',
    'https://images.unsplash.com/photo-1595054607409-0f03050ec7c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2772&q=80',
    'https://images.unsplash.com/photo-1593642532973-d31b6557fa68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2900&q=80',
    'https://images.unsplash.com/photo-1594997756045-a359e2b54c4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2801&q=80',
];

export default {
    title: 'Forms/SuperInput',

    parameters: {
        component: SuperInput,
    },
};

const Wrapper = styled.div`
    width: 400px;
`;

export const SuperInputDefault = () => {
    const [value, setValue] = useState('');
    return (
        <Wrapper>
            <SuperInput
                value={value}
                onChange={e => setValue(e.target.value)}
                onUrlSubmit={url => console.log('Submitting url', url)}
                onUploadClick={action('Upload')}
            />
        </Wrapper>
    );
};

export const SuperInputWithPreview = () => {
    const [value, setValue] = useState('');
    return (
        <Wrapper>
            <SuperInput
                value={value}
                onChange={e => setValue(e.target.value)}
                onUploadClick={action('Upload')}
                onUrlSubmit={url => console.log('Submitting url', url)}
                preview={
                    <ImageTile
                        images={images}
                        width="80px"
                        height="80px"
                        count={4}
                        onMoreClick={action('Clicked')}
                        onImageClick={action('Clicked')}
                        onClose={action('Clicked')}
                        autoCount
                    />
                }
            />
        </Wrapper>
    );
};
