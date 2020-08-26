import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider, css } from 'styled-components';
import { FaCameraRetro, FaGlobe, FaRegTimesCircle } from 'react-icons/fa';
import PropTypes from 'prop-types';
import defaultTheme from '../../utils/theme';
import { useKeyPress } from '../../utils/helpers';
import Input from '../Input';

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
    font-size: 14px;
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

const SuperInput = ({
    theme = defaultTheme,
    preview,
    onUrlSubmit,
    onUploadClick,
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
        <ThemeProvider theme={theme}>
            <Wrapper>
                <TopBar>
                    <Title>Enter Question</Title>
                    <Options>
                        <FaCameraRetro onClick={onUploadClick} />
                        <FaGlobe
                            onClick={() => setShowActionInput(!showActionInput)}
                        />
                    </Options>
                </TopBar>
                <Input type="textarea" border="none" {...props} />
                {preview && <Preview>{preview}</Preview>}
                {showActionInput && (
                    <ActionSection>
                        <Input
                            type="text"
                            icon="insert_link"
                            placeholder="Add URL"
                            border="none"
                            value={url}
                            onChange={e => setUrl(e.target.value)}
                            cta={
                                <CTA
                                    onClick={() => setShowActionInput(false)}
                                />
                            }
                        />
                    </ActionSection>
                )}
            </Wrapper>
        </ThemeProvider>
    );
};

export default SuperInput;
