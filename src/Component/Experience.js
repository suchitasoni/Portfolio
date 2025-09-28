import React, {useState, useContext} from 'react';
import 'lord-icon-element';
import { UserContext } from '../Context';
import { useTrail, a } from '@react-spring/web'


const Trail = ({ open, children }) => {
  const items = React.Children.toArray(children)
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  })
  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} className="trailsText" style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  )
}
const Experience = () => {
    const [isHovering, setIsHovering] = useState(false);
    const {iconSrc, mode} = useContext(UserContext);
  const [open, set] = useState(true)

    return(
        <div style={{textAlign: 'center',margin: '80px 0px'}}>
            <h2 className='heading'>Work Experience</h2>
            <div
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}>
                    <lord-icon
                        id="work-icon"
                        src={mode ? iconSrc.find(icon => icon.name === "work").lightSource : iconSrc.find(icon => icon.name === "work").darkSource}
                        trigger={isHovering ? 'hover' : 'in'} //morph
                        delay="150"
                        stroke="bold"
                        state={isHovering ? 'morph-open' : 'in-reveal'} //morph-open
                        colors="primary:#121331,secondary:#7166ee,tertiary:#ee66aa,quaternary:#ebe6ef"
                        style={{width: '130px', height: '130px'}}>
                    </lord-icon>
            </div>
            <div className="container" onClick={() => set(state => !state)}>
                <Trail open={open}>
                    <li id='first'>React Development</li>
                    <li id='second'>API Integration $ State management</li>
                    <li id='third'>Performance Optimization</li>
                    <li id='fourth'>Agile Collaboration</li>
                </Trail>
            </div>
        </div>
    )
}
export default Experience;