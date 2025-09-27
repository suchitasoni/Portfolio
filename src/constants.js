import Contact from "./Component/Contact";
import Projects from "./Component/Projects";
import Education from "./Component/Education";
import Experience from "./Component/Experience";
import Home from "./Component/Home";
import Resume from "./Component/Resume";
import Thanks from "./Component/Thanks";
import Blog from "./Component/Blog";

export const iconSrc = [
    {name: "work", lightSource: "https://cdn.lordicon.com/obyhgzls.json", darkSource: "https://cdn.lordicon.com/uiigekiw.json"},
    {name: "education", lightSource: "https://cdn.lordicon.com/lufygyut.json", darkSource: "https://cdn.lordicon.com/toprgkru.json"},
    {name: "projects", lightSource: "https://cdn.lordicon.com/xpesqpji.json", darkSource: "https://cdn.lordicon.com/wgmzmyvv.json"},
    {name: "home", lightSource: "https://cdn.lordicon.com/hpivxauj.json", darkSource: "https://cdn.lordicon.com/ltlylmiu.json"},
    {name: "blog", lightSource: "https://cdn.lordicon.com/joiudcrl.json", darkSource: "https://cdn.lordicon.com/vdaopqjy.json"},
    {name: "linkedIn", lightSource: "https://cdn.lordicon.com/dbugezxr.json", darkSource: "https://cdn.lordicon.com/xxfmfkoa.json"},
    {name: "github", lightSource: "https://cdn.lordicon.com/lllcnxva.json", darkSource: "https://cdn.lordicon.com/acgiczyg.json"},
    {name: "mail", lightSource: "https://cdn.lordicon.com/gtvaxhwv.json", darkSource: "https://cdn.lordicon.com/zvamcipt.json"},
    {name: "resume", lightSource: "https://cdn.lordicon.com/yrtftktn.json", darkSource: "https://cdn.lordicon.com/qtebspeb.json"},
    {name: "thanks", lightSource: "https://cdn.lordicon.com/avlfdgbi.json", darkSource: "https://cdn.lordicon.com/bbwxffiv.json"}
]

export const gridLayout = 
    [
        {id: 1, component: <Education iconSrc={iconSrc}/>, className: "grid-element row-5 column-2 bg-purple"},
        {id: 2, component: <Resume iconSrc={iconSrc}/>, className: "grid-element row-3 column-2 bg-pink"},
        {id: 3, component: <Projects iconSrc={iconSrc}/>, className: "grid-element row-3 column-3 bg-green"},
        {id: 4, component: <Experience iconSrc={iconSrc}/>, className: "grid-element row-7 column-2 bg-yellow"},
        {id: 5, component: <Home iconSrc={iconSrc}/>, className: "grid-element row-4 column-5 bg-blue"},
        {id: 6, component: <Blog iconSrc={iconSrc}/>, className: "grid-element row-4 column-2 bg-orange"},
        {id: 7, component: <Contact iconSrc={iconSrc}/>, className: "grid-element row-2 column-4 bg-green"},
        {id: 8, component: <Thanks iconSrc={iconSrc}/>, className: "grid-element row-2 column-3 bg-pink"},
    ]

