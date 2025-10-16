import {useState, useContext} from 'react';
import 'lord-icon-element';
import { UserContext } from '../Context';

const Blog = () => {
    const [isHovering, setIsHovering] = useState(false);
    const {iconSrc, mode} = useContext(UserContext);

    return(
        <div style={{textAlign: "center"}}>
            <div style={{position: 'relative',fontWeight: '600',fontStyle: 'italic',marginBottom: '15%',fontSize:'x-large'}}>Blog</div>
            <div
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}>
                    <lord-icon
                        src={mode ? iconSrc.find(icon => icon.name === "blog").lightSource : iconSrc.find(icon => icon.name === "blog").darkSource}
                        trigger={isHovering ? 'hover' : 'in'} //morph
                        delay="150"
                        stroke="bold"
                        state={isHovering ? 'morph-open' : 'in-reveal'} //morph-open
                        style={{width: '130px', height: '130px'}}>
                    </lord-icon>
            </div>
            <div style={{position: 'relative',fontWeight: '600',fontStyle: 'italic',marginBottom: '15%',fontSize:'x-large'}}>Coming soon...</div>

        </div>
    )
}
export default Blog;