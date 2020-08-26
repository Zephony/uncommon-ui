import React, { useState } from 'react';
import styled from 'styled-components';
import { action } from '@storybook/addon-actions';
import SuperInput from './';
import ImageTile from '../ImageTile';
import { images } from '../../utils/helpers';

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
