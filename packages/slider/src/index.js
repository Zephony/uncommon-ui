/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Arrow from './arrow';

const propTypes = {
    /**
     * The width of the slider which the slides should have
     */
    width: PropTypes.string,
    /**
     * The height of the slider which the slides should have
     */
    height: PropTypes.string,
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
    width: ${props => props.width};
    height: ${props => props.height};
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
`;

const Slide = styled.div`
    width: ${props => props.width};
    padding: 0 20px;
`;

const Dot = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #e2863d;
    opacity: ${props => (props.isActive ? 1 : 0.2)};
    cursor: pointer;
    margin: 0 5px;
    z-index: 1;
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
    width = '100%',
    height = '300px',
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
    });

    const { activeIndex } = state;

    const items = children;

    const nextSlide = () => {
        // At the last slide
        if (activeIndex === items.length - 1) {
            return setState({
                ...state,
                activeIndex: 0,
            });
        }

        setState({
            ...state,
            activeIndex: activeIndex + 1,
        });
    };

    const prevSlide = () => {
        // At the first slide
        if (activeIndex === 0) {
            return setState({
                ...state,
                activeIndex: items.length - 1,
            });
        }

        setState({
            ...state,
            activeIndex: activeIndex - 1,
        });
    };

    const handleDotClick = slideIndex => {
        setState({
            ...state,
            activeIndex: slideIndex,
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
        <div>
            <SliderWrapper
                width={width}
                height={height}
                ref={ref}
                className={`uu-slider ${className}`}
            >
                {arrows && (
                    <Arrow
                        onClick={prevSlide}
                        direction="left"
                        disabled={!infinite && activeIndex === 0}
                        className="uu-slider-arrow-left"
                    />
                )}
                <Slide>{items[activeIndex]}</Slide>
                {arrows && (
                    <Arrow
                        onClick={nextSlide}
                        direction="right"
                        disabled={!infinite && activeIndex === items.length - 1}
                        className="uu-slider-arrow-right"
                    />
                )}
            </SliderWrapper>

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
        </div>
    );
};

Slider.propTypes = propTypes;
