import React, {useState, useContext} from 'react';
import 'lord-icon-element';
import { UserContext } from '../Context';
import { useTrail, a } from '@react-spring/web'
import { Link } from 'react-router-dom';


const Trail = ({ open, children }) => {
  const items = React.Children.toArray(children)
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 60 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  })
  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div className="trailsText" style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  )
}
const Experience = () => {
    const [isHovering, setIsHovering] = useState(false);
    const {iconSrc, mode} = useContext(UserContext);
  const [open, setOpen] = useState(true)

    return(
        <Link to="/experience" style={{textAlign: 'center',margin: '5% 0px',height: '90%',textDecoration: 'none', color: mode ? 'black' : 'white'}}>
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
                        style={{width: '130px', height: '130px', float: 'none'}}>
                    </lord-icon>
            </div>
            <div className="container">
                <Trail open={open}>
                    <li id='first'>React Development</li>
                    <li id='second'>API Integration</li>
                    <li id='third'>State management</li>
                    <li id='fourth'>Performance Optimization</li>
                    <li id='fifth'>Agile Collaboration</li>
                </Trail>
            </div>
        </Link>
    )
}
export default Experience;