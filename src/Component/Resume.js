import { useState, useContext} from 'react';
import 'lord-icon-element';
import { UserContext } from '../Context';

const Resume = () => {
        const [isHovering, setIsHovering] = useState(false);
            const {iconSrc, mode} = useContext(UserContext);

    return(
        <div style={{textAlign: "center",cursor:'pointer'}}>
            <div
                role="button"
                tabIndex={0}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                onClick={() => document.getElementById('resumelink').click()}
                onKeyDown={e => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        document.getElementById('resumelink').click();
                    }
                }}
                aria-pressed="false"
                style={{outline: 'none'}}
            >
                    <a id='resumelink' href='Suchita_Resume.pdf' download style={{position: 'absolute', left: '-9999px'}}>
                        Download Resume
                    </a>
                    <lord-icon
                        src={mode ? iconSrc.find(icon => icon.name === "resume").lightSource : iconSrc.find(icon => icon.name === "resume").darkSource}
                        trigger={isHovering ? 'hover' : 'in'} //morph
                        delay="150"
                        stroke="bold"
                        state={isHovering ? 'hover' : 'in-reveal'} //morph-open
                        style={{width: '130px', height: '130px'}}>
                    </lord-icon>
                    <h2 className="heading" style={{fontWeight:'400',fontSize:'20px'}}>Get my</h2>
                    <h2 className="heading" style={{fontWeight:'600',fontStyle:'italic'}}>Resume</h2>
            </div>
        </div>
    )
}
export default Resume;