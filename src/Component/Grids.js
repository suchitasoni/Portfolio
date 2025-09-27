import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../Context";
import { useTrail, a, useSprings, config } from "react-spring";
import { useTransition, animated } from 'react-spring';

const Grids = () => {
    const {mode, gridLayout} = useContext(UserContext);
    const [start, setStart] = useState(false);
    const springs = useSprings(gridLayout.length,
        gridLayout.map((item, index) => ({
            from: { opacity: 0, x: item.from.x, y: item.from.y},
            to: { opacity: start ? 1 : 0, x:0, y:0},
            delay: 1000, 
            config: {mass:1, tension: 200, friction: 22}
        }))
    )
    useEffect(() => {
        setStart(true);
    }, []);
    return(
        
        <div className="grid-container" data-theme={mode ? "light" : "dark"}>
                {springs.map((spring, index) => (
                    <animated.div key={gridLayout[index].id} className={gridLayout[index].className} style={{
                        opacity: spring.opacity,
                        transform: spring.x.to((x) => `translate(${x}px, ${spring.y.get()}px)`),
                    }}>
                        {gridLayout[index].component}
                    </animated.div>
                ))}
        </div>
    )
}
export default Grids;