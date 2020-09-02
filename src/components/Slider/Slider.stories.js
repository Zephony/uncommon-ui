import React from 'react';
import styled from 'styled-components';
import Slider from './';
import Arrow from './Arrow';

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Item = styled.div`
    height: 100%;
    color: black;
    font-size: 2.25em;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
`;

const Random = styled.div`
    width: 600px;
    height: 300px;
    background: #5f9ea0;
`;

export default {
    title: 'Slider',
    parameters: {
        component: Slider,
        subcomponents: { Arrow },
    },
};

export const defaultSlider = () => {
    const settings = {
        width: 800, // Slider width
    };
    return (
        <Wrapper>
            <Slider {...settings}>
                <Item>Slide Content</Item>
                <img
                    width={800}
                    src="https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
                    alt="A bridge"
                />
                <Item>
                    <Random width="600px" height="300px" />
                </Item>
            </Slider>
        </Wrapper>
    );
};

export const infiniteSlider = () => {
    const settings = {
        width: 800, // Slider width
        infinite: true,
    };
    return (
        <Wrapper>
            <Slider {...settings}>
                <Item>Slide Content</Item>
                <img
                    width={800}
                    src="https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
                    alt="A bridge"
                />
                <Item>
                    <Random width="600px" height="300px" />
                </Item>
            </Slider>
        </Wrapper>
    );
};

export const initialIndex = () => {
    const settings = {
        width: 800, // Slider width
        infinite: true,
        initial: 1,
    };
    return (
        <Wrapper>
            <Slider {...settings}>
                <Item>Slide Content</Item>
                <img
                    width={800}
                    src="https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
                    alt="A bridge"
                />
                <Item>
                    <Random width="600px" height="300px" />
                </Item>
            </Slider>
        </Wrapper>
    );
};

export const autoplay = () => {
    const settings = {
        width: 800, // Slider width
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
    };
    return (
        <Wrapper>
            <Slider {...settings}>
                <Item>Slide Content</Item>
                <img
                    width={800}
                    src="https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
                    alt="A bridge"
                />
                <Item>
                    <Random width="600px" height="300px" />
                </Item>
            </Slider>
        </Wrapper>
    );
};
