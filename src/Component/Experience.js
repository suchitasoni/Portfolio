import {useState} from 'react';
import Lordicon from 'react-lordicon';

const Experience = ({iconSrc}) => {
    const [isHovering, setIsHovering] = useState(false);

    return(
        <div style={{textAlign: "center"}}>
            <h2 style={{fontFamily: 'cursive',
backgroundColor: 'moccasin',
borderRadius: '15px',
border: 'solid',
rotate: '345deg',
transition: 'rotate 2s'}}>Work Experience</h2>
            <div
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}>
                    <lord-icon
                        id="work-icon"
                        src={iconSrc.find(icon => icon.name === "work").lightSource}
                        trigger={isHovering ? 'hover' : 'in'} //morph
                        delay="150"
                        stroke="bold"
                        state={isHovering ? 'morph-open' : 'in-reveal'} //morph-open
                        colors="primary:#121331,secondary:#7166ee,tertiary:#ee66aa,quaternary:#ebe6ef"
                        style={{width: '130px', height: '130px'}}>
                    </lord-icon>
            </div>
        </div>
    )
}
export default Experience;