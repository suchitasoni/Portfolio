import { useEffect, useState } from "react";
import PropTypes from "prop-types";

export const DynamicTyping = ({text, speed, style}) =>{

    const[formedText, setFormedText] = useState('');

    useEffect(() => {
        let index=0;
        const interval = setInterval(() => {
            setFormedText(prev=> prev + text.charAt(index));   
            setTimeout(()=> index++, 15);     
        }, speed);
        if(index >= text.length){
            clearInterval(interval);
            console.log("cleared");
        }
        return () => {
            setFormedText("");
            clearInterval(interval);
        }
    }, [text, speed]);

    return ( 
        <>
            <span style={style}>{formedText}</span>
            {formedText !== text ? <span className='blinker'></span> : ''}
        </>
    )

};

DynamicTyping.propTypes = {
    text: PropTypes.string.isRequired,
    speed: PropTypes.number.isRequired,
    style: PropTypes.object
};
