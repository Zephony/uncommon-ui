/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Arrow from './arrow';

const propTypes = {
    /**
     * The width of the slider which the slides should have
     */
    width: PropTypes.number,
    /**
     * Initial index to start
     */
    initial: PropTypes.number,
    /**
     * Slider has no start or end
     */
    infinite: PropTypes.bool,
    /**
     * Slider changes automatically
     */
    autoplay: PropTypes.bool,
    /**
     * Speed for autoplay in ms
     */
    autoplaySpeed: PropTypes.number,
    /**
     * Usually elements that will be the slides
     */
    children: PropTypes.node,
};

const SliderWrapper = styled.div`
    height: auto;
    width: ${props => props.width}px;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    white-space: nowrap;
`;

const SliderContent = styled.div`
    transform: translateX(-${props => props.translate}px);
    transition: transform ease-out ${props => props.transition}s;
    height: 100%;
    width: ${props => props.width}px;
    display: flex;
    align-items: center;
`;

const Slide = styled.div`
  height: 100%;
  width: 100%;
  background-image: url('${props => props.content}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const Dot = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #e2863d;
    opacity: ${props => (props.isActive ? 1 : 0.2)};
    cursor: pointer;
    margin: 0 5px;
`;

const Dots = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 32px;
`;

/**
 * "I know if I rest, I'll slide downhill fast." - Lee Kuan Yew
 */
export const Slider = ({
    children,
    width = 800,
    infinite,
    initial = 0,
    autoplay,
    autoplaySpeed = 3000,
    className = '',
    dots = true,
    arrows = true,
}) => {
    const ref = useRef();
    const [state, setState] = useState({
        activeIndex: initial,
        translate: initial * width,
        transition: 0.45,
    });

    const { translate, transition, activeIndex } = state;

    const items = children;

    const nextSlide = () => {
        // At the last slide
        if (activeIndex === items.length - 1) {
            return setState({
                ...state,
                translate: 0,
                activeIndex: 0,
            });
        }

        setState({
            ...state,
            activeIndex: activeIndex + 1,
            translate: (activeIndex + 1) * width,
        });
    };

    const prevSlide = () => {
        // At the first slide
        if (activeIndex === 0) {
            return setState({
                ...state,
                translate: (items.length - 1) * width,
                activeIndex: items.length - 1,
            });
        }

        setState({
            ...state,
            activeIndex: activeIndex - 1,
            translate: (activeIndex - 1) * width,
        });
    };

    const handleDotClick = slideIndex => {
        console.log(slideIndex);
        setState({
            ...state,
            activeIndex: slideIndex,
            translate: slideIndex * width,
        });
    };

    useEffect(() => {
        if (autoplay) {
            let id = setInterval(() => {
                nextSlide();
            }, autoplaySpeed);
            return () => clearInterval(id);
        }
    });

    return (
        <SliderWrapper
            width={width}
            ref={ref}
            className={`uu-slider ${className}`}
        >
            <SliderContent
                translate={translate}
                transition={transition}
                width={width * items.length}
                className="uu-slider-content"
            >
                {items.map((item, i) => (
                    <Slide key={i}>{item}</Slide>
                ))}
            </SliderContent>
            {arrows && (
                <React.Fragment>
                    <Arrow
                        onClick={prevSlide}
                        direction="left"
                        disabled={!infinite && activeIndex === 0}
                        className="uu-slider-arrow-left"
                    />
                    <Arrow
                        onClick={nextSlide}
                        direction="right"
                        disabled={!infinite && activeIndex === items.length - 1}
                        className="uu-slider-arrow-right"
                    />
                </React.Fragment>
            )}

            {/* Dots */}
            {dots && (
                <Dots>
                    {[...Array(items.length)].map((_, i) => (
                        <Dot
                            isActive={i === activeIndex}
                            onClick={() => handleDotClick(i)}
                        />
                    ))}
                </Dots>
            )}
        </SliderWrapper>
    );
};

Slider.propTypes = propTypes;
