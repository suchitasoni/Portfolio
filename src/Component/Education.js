import {useState} from 'react';
import Lordicon from 'react-lordicon';
const Education = ({iconSrc}) => {
    const [isHovering, setIsHovering] = useState(false);
    
    return(
        <div style={{textAlign: "center"}}>
            <div>Education</div>
            <div
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}>
                    <lord-icon
                        src={iconSrc.find(icon => icon.name === "education").lightSource}
                        trigger={isHovering ? 'hover' : 'in'} //morph
                        delay="150"
                        stroke="bold"
                        state={isHovering ? 'morph-open' : 'in-reveal'} //morph-open
                        style={{width: '130px', height: '130px'}}>
                    </lord-icon>
            </div>
        </div>
    )
}
export default Education;