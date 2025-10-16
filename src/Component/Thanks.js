import { useState, useContext} from 'react';
import 'lord-icon-element';
import '../Toggle.scss';
import { UserContext } from '../Context';

const Thanks = () => {
    const {mode, change} = useContext(UserContext);
    const [isOff, setIsOff] = useState(mode);

    const handleChange = () => {
        change();
        setIsOff(!isOff);
    }    
    return(
        <div className='toggle'>
            <label className="switch">
                <span style={{visibility:'hidden'}}>Toggle dark mode</span>
                <input type="checkbox" checked={!isOff} onChange={handleChange}/>
                <span className="slider"></span>
            </label>
        </div>
    )
}
export default Thanks;