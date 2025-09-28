import { useState, useContext} from 'react';
import 'lord-icon-element';
import '../Toggle.scss';
import { UserContext } from '../Context';

const Thanks = () => {
    const {iconSrc, mode, change} = useContext(UserContext);
    const [isOff, setIsOff] = useState(mode);

    const handleChange = () => {
        change();
        setIsOff(!isOff);
    }    
    return(
        <div style={{textAlign: 'center',position: 'relative',top: '28%'}}>
            <label className="switch">
                <input type="checkbox" checked={!isOff} onChange={handleChange}/>
                <span className="slider"></span>
            </label>
        </div>
    )
}
export default Thanks;