import React, {createContext, useState} from 'react';
import Contact from "./Component/Contact";
import Projects from "./Component/Projects";
import Education from "./Component/Education";
import Experience from "./Component/Experience";
import Home from "./Component/Home";
import Resume from "./Component/Resume";
import Thanks from "./Component/Thanks";
import Blog from "./Component/Blog";
import Loader from './Component/Loader';
import PropTypes from 'prop-types';
const UserContext = createContext(
    {mode: null,
    change: () => {},
    loading: null,
    setLoading: () => {},
    iconSrc: null,
    gridLayout: null
}
);


const UserProvider = ({children}) =>{

    const [lightMode, setLightMode] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const iconSrc = [
        {name: "work", lightSource: "https://cdn.lordicon.com/obyhgzls.json", darkSource: "https://cdn.lordicon.com/uiigekiw.json"},
        {name: "education", lightSource: "https://cdn.lordicon.com/lufygyut.json", darkSource: "https://cdn.lordicon.com/toprgkru.json"},
        {name: "projects", lightSource: "https://cdn.lordicon.com/xpesqpji.json", darkSource: "https://cdn.lordicon.com/wgmzmyvv.json"},
        {name: "home", lightSource: "https://cdn.lordicon.com/hpivxauj.json", darkSource: "https://cdn.lordicon.com/ltlylmiu.json"},
        {name: "blog", lightSource: "https://cdn.lordicon.com/joiudcrl.json", darkSource: "https://cdn.lordicon.com/vdaopqjy.json"},
        {name: "linkedIn", lightSource: "https://cdn.lordicon.com/kpoplnek.json", darkSource: "https://cdn.lordicon.com/ofrzywfo.json"},
        {name: "github", lightSource: "https://cdn.lordicon.com/lllcnxva.json", darkSource: "https://cdn.lordicon.com/acgiczyg.json"},
        {name: "mail", lightSource: "https://cdn.lordicon.com/gtvaxhwv.json", darkSource: "https://cdn.lordicon.com/zvamcipt.json"},
        {name: "resume", lightSource: "https://cdn.lordicon.com/yrtftktn.json", darkSource: "https://cdn.lordicon.com/qtebspeb.json"},
        {name: "thanks", lightSource: "https://cdn.lordicon.com/avlfdgbi.json", darkSource: "https://cdn.lordicon.com/bbwxffiv.json"}
    ];
    const gridLayout = 
        [
            {id: 1, component: <Education/>, className: "grid-element row-5 column-2 bg-purple", from: {x: -100, y:0}},
            {id: 2, component: <Resume/>, className: "grid-element row-3 column-2 bg-pink", from: {x: -100, y:0}},
            {id: 3, component: <Projects/>, className: "grid-element row-3 column-3 bg-green", from: {x: -100, y:0}},
            {id: 4, component: <Experience/>, className: "grid-element row-7 column-2 bg-yellow", from: {x: 100, y:0}},
            {id: 5, component: <Home/>, className: "grid-element row-4 column-5 bg-blue", from: {x: 100, y:0}},
            {id: 6, component: <Blog/>, className: "grid-element row-4 column-2 bg-orange", from: {x: -100, y:0}},
            {id: 7, component: <Contact />, className: "grid-element row-2 column-4 bg-green", from: {x: -100, y:0}},
            {id: 8, component: <Thanks/>, className: "grid-element row-2 column-3 bg-pink", from: {x: 100, y:0}},
    ];
    const changeMode = () => {
        setLightMode(!lightMode);
    }
    const handleLoader = (state) => {
        setIsLoading(state);
    }

    const contextValue = React.useMemo(() => ({
        mode: lightMode,
        change: changeMode,
        loading: isLoading,
        setLoading: handleLoader,
        iconSrc: iconSrc,
        gridLayout: gridLayout
    }), [lightMode, isLoading, iconSrc, gridLayout]);

    return(
        <UserContext.Provider value={contextValue}>
            {isLoading && (
                <Loader mounted={isLoading}>
                    <div className="spinner-overlay">
                        <lord-icon
                            src='https://cdn.lordicon.com/dxrixobg.json'
                            trigger="loop"
                            style={{width: '115px', height: '115px'}}
                        ></lord-icon>
                    </div>
                </Loader>
            )}
            {children}
        </UserContext.Provider>
    )
}
UserProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export {UserContext, UserProvider};