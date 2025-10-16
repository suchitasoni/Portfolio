import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

export const DynamicTyping = ({text, speed, style}) =>{

      const [displayed, setDisplayed] = useState("");
  const timerRef = useRef(null);
  const mountedRef = useRef(true);

  useEffect(() => {
    // keep track of mounted state so timers don't run after unmount
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
      clearTimeout(timerRef.current);
    };
  }, []);

  useEffect(() => {
    setDisplayed("");

    let i = 0;
    const tick = () => {
      if (!mountedRef.current) return; // safety
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i += 1;
        timerRef.current = setTimeout(tick, speed);
      } else {
      }
    };

    // start typing
    timerRef.current = setTimeout(tick, speed);

    // cleanup if text or component changes
    return () => clearTimeout(timerRef.current);
  }, [text, speed]);

    return ( 
        <>
            <span style={style}>{displayed}</span>
            {displayed !== text ? <span className='blinker'></span> : ''}
        </>
    )

};

DynamicTyping.propTypes = {
    text: PropTypes.string.isRequired,
    speed: PropTypes.number.isRequired,
    style: PropTypes.object
};
