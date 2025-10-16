import { useState, useContext} from 'react';
import 'lord-icon-element';
import { UserContext } from '../Context';
import { DynamicTyping } from './Reusable';

const Home = () => {
    const [isHovering, setIsHovering] = useState(false);
        const {iconSrc, mode} = useContext(UserContext);

    return(
        <div style={{height: '100%',display: 'flex',width: '100%'}}>
            <div style={{alignContent: 'space-around'}}
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
            <div style={{fontWeight: '600',fontSize: 'large',flexBasis: '85%',padding: '4% 0 4% 4%',textAlign: 'center',alignSelf:'center'}}>
                <DynamicTyping text="Hi, I'm Suchita" speed={30} /><br />
                <DynamicTyping text="Passionate Frontend Developer specializing in React & JavaScript" speed={35}  /><br/>
                <DynamicTyping text="Focused on building interactive, user-friendly, and performant web apps" speed={30}  /><br/>
            </div>
        </div>
    )
}
export default Home;