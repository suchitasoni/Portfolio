import { useState, useContext} from 'react';
import Lordicon from 'react-lordicon';
import { UserContext } from '../Context';

const Home = () => {
    const [isHovering, setIsHovering] = useState(false);
        const {iconSrc, mode} = useContext(UserContext);

    return(
        <div >
            <div
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}>
                    <lord-icon
                        src={mode ? iconSrc.find(icon => icon.name === "thanks").lightSource : iconSrc.find(icon => icon.name === "thanks").darkSource}
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
export default Home;