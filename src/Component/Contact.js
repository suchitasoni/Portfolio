import { useState } from 'react';
import Lordicon from 'react-lordicon';
const Contact = ({iconSrc}) => {
    const [isHoveringInsta, setIsHoveringInsta] = useState(false);
    const [isHoveringGit, setIsHoveringGit] = useState(false);
    const [isHoveringMail, setIsHoveringMail] = useState(false);

    return(
        <div style={{textAlign: "center"}}>
            <div>Contact</div>
            <div
                onMouseEnter={() => setIsHoveringInsta(true)}
                onMouseLeave={() => setIsHoveringInsta(false)}>
                    <lord-icon
                        src={iconSrc.find(icon => icon.name === "linkedIn").lightSource}
                        trigger={isHoveringInsta ? 'hover' : 'in'} //morph
                        delay="150"
                        stroke="bold"
                        state={isHoveringInsta ? 'hover' : 'in-reveal'} //morph-open
                        style={{width: '60px', height: '60px'}}>
                    </lord-icon>
            </div>
            <div
                onMouseEnter={() => setIsHoveringGit(true)}
                onMouseLeave={() => setIsHoveringGit(false)}>
                    <lord-icon
                        src={iconSrc.find(icon => icon.name === "github").lightSource}
                        trigger={isHoveringGit ? 'hover' : 'in'} //morph
                        delay="150"
                        stroke="bold"
                        state={isHoveringGit ? 'morph-open' : 'in-reveal'} //morph-open
                        style={{width: '60px', height: '60px'}}>
                    </lord-icon>
            </div>
            <div
                onMouseEnter={() => setIsHoveringMail(true)}
                onMouseLeave={() => setIsHoveringMail(false)}>
                    <lord-icon
                        src={iconSrc.find(icon => icon.name === "mail").lightSource}
                        trigger={isHoveringMail ? 'hover' : 'in'} //morph
                        delay="150"
                        stroke="bold"
                        state={isHoveringMail ? 'morph-open' : 'in-reveal'} //morph-open
                        style={{width: '60px', height: '60px'}}>
                    </lord-icon>
            </div>
        </div>
    )
}
export default Contact;