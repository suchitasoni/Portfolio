import {useState, useContext, useEffect} from 'react';
import 'lord-icon-element';
import { UserContext } from '../Context';
import { Link } from 'react-router-dom';

const Education = () => {
    const [isHovering, setIsHovering] = useState(false);
        const {iconSrc, mode, setLoading} = useContext(UserContext);
    

    return(
        <Link to="/education" style={{textAlign: "center",display: "block", height: "-webkit-fill-available", textDecoration: 'none', color: mode ? 'black' : 'white'}}>
            <div style={{position: 'relative',fontWeight: '600',fontStyle: 'italic',marginBottom: '15%',fontSize:'x-large'}}>Education & Skills</div>
            <div
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}>
                    <lord-icon
                        src={mode ? iconSrc.find(icon => icon.name === "education").lightSource : iconSrc.find(icon => icon.name === "education").darkSource}
                        trigger={isHovering ? 'hover' : 'in'} //morph
                        delay="150"
                        stroke="bold"
                        state={isHovering ? 'morph-open' : 'in-reveal'} //morph-open
                        style={{width: '130px', height: '130px'}}>
                    </lord-icon>
            </div>
            <div style={{position: 'relative',fontWeight: '600',fontStyle: 'italic',top: '15%',fontSize:'large'}}>“Knowledge is power. Continuous learning is growth.”</div>
        </Link>
    )
}
export default Education;