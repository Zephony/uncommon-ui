import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaCameraRetro, FaGlobe, FaRegTimesCircle } from 'react-icons/fa';
import { Input } from '@uncommonui/input';
import { useKeyPress } from '@uncommonui/utils';

const propTypes = {
    /**
     * Renders whatever element is passed into the input like a preview
     */
    preview: PropTypes.node,
    /**
     * Accepts an event when url is submitted (Enter keypress)
     */
    onUrlSubmit: PropTypes.func,
    /**
     * Accepts an event when upload icon is clicked
     */
    onUploadClick: PropTypes.func,
};

const Wrapper = styled.div`
    box-sizing: border-box;
    height: auto;
    width: 100%;
    border: 1px solid #dadada;
    border-radius: 6px;
    background-color: #ffffff;
`;

const TopBar = styled.div`
    border-bottom: 1px solid rgba(135, 135, 135, 0.3);
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Title = styled.p`
    padding-left: 15px;
    font-size: 0.875em;
    color: #0f0f0f;
`;

const Options = styled.div`
    display: flex;
    color: ${props => props.theme.colors.primary};

    svg {
        padding-right: 15px;
        cursor: pointer;
    }
`;
const Preview = styled.div`
    padding: 14px;
`;

const ActionSection = styled.div`
    transition: all 0.5s;
    border-top: 1px solid rgba(135, 135, 135, 0.3);
`;

const CTA = styled(FaRegTimesCircle)`
    color: #b3b3b3;
`;

export const SuperInput = ({
    preview,
    onUrlSubmit,
    onUploadClick,
    className = '',
    ...props
}) => {
    const [showActionInput, setShowActionInput] = useState(false);
    const [url, setUrl] = useState('');
    const enterPress = useKeyPress('Enter');

    useEffect(() => {
        if (url) {
            onUrlSubmit(url);
        }
    }, [enterPress]);

    return (
        <Wrapper className={`uu-super-input ${className}`}>
            <TopBar className="uu-super-input-topbar">
                <Title className="uu-super-input-title">Enter Question</Title>
                <Options className="uu-super-input-topbar-options">
                    <FaCameraRetro onClick={onUploadClick} />
                    <FaGlobe
                        onClick={() => setShowActionInput(!showActionInput)}
                    />
                </Options>
            </TopBar>
            <Input type="textarea" border="none" {...props} />
            {preview && (
                <Preview className="uu-super-input-preview">{preview}</Preview>
            )}
            {showActionInput && (
                <ActionSection className="uu-super-input-action">
                    <Input
                        type="text"
                        icon="insert_link"
                        placeholder="Add URL"
                        border="none"
                        value={url}
                        onChange={e => setUrl(e.target.value)}
                        cta={<CTA onClick={() => setShowActionInput(false)} />}
                    />
                </ActionSection>
            )}
        </Wrapper>
    );
};

SuperInput.propTypes = propTypes;
