/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';

// Custom Hook for resize
export const useResize = myRef => {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (myRef.current) {
            setWidth(myRef.current.offsetWidth);
            setHeight(myRef.current.offsetHeight);
        }
        const handleResize = () => {
            setWidth(myRef.current.offsetWidth);
            setHeight(myRef.current.offsetHeight);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [myRef]);

    return { width, height };
};

// Custom hook for detecting keypress
// https://usehooks.com/useKeyPress/
export const useKeyPress = targetKey => {
    // State for keeping track of whether key is pressed
    const [keyPressed, setKeyPressed] = useState(false);

    // If pressed key is our target key then set to true
    function downHandler({ key }) {
        if (key === targetKey) {
            setKeyPressed(true);
        }
    }

    // If released key is our target key then set to false
    const upHandler = ({ key }) => {
        if (key === targetKey) {
            setKeyPressed(false);
        }
    };

    // Add event listeners
    useEffect(() => {
        window.addEventListener('keydown', downHandler);
        window.addEventListener('keyup', upHandler);
        // Remove event listeners on cleanup
        return () => {
            window.removeEventListener('keydown', downHandler);
            window.removeEventListener('keyup', upHandler);
        };
    }, []); // Empty array ensures that effect is only run on mount and unmount

    return keyPressed;
};
