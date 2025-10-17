import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { UserContext } from "../Context";
import { useTrail, a } from "@react-spring/web";

const Trail = ({ open, children }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    from: { opacity: 0 },
    to: { opacity: 1 },
  });
  return (
    <div style={{display: 'flex',flexFlow: 'wrap',justifyContent: 'space-between',width: '70vw',gap: '30px',marginTop:'20px'}}>
      {trail.map(({ height, ...style }, index) => (
        <a.div className="skill-item" style={style}>
            {items[index]}
        </a.div>
      ))}
    </div>
  );
};

const ExpandedBox = () => {
  const [open, setOpen] = useState(false);
  const [openSkill, setOpenSkill] = useState(false);
  const navigate = useNavigate();
  const { iconSrc, mode, setLoading } = useContext(UserContext);
  const handleButtonClick = () => {
    setOpen(false);
    setTimeout(() => {
      navigate("/Portfolio");
    }, 300); // Match the timeout duration in CSSTransition
  };
  useEffect(() => {
    let root = document.getElementById('root');
    if (!mode) {
      root.style.setProperty('--education-background', "#2a2a28");
      root.style.setProperty('--education-tile', "#000000ff");
      root.style.setProperty('--text-color', "#fff");
      root.style.setProperty('--swing-board', "#000000ff")
    }
    else{
      root.style.setProperty('--education-background', "#f0e9a4");
      root.style.setProperty('--education-tile', "#d2dee0");
      root.style.setProperty('--text-color', "#000000ff");
      root.style.setProperty('--swing-board', "#3f200c")
    }
    setOpen(true);
    setLoading(false);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleScroll = (event) => {
    const { scrollTop, scrollHeight, clientHeight } = event.target.scrollingElement;
    console.log(scrollTop, scrollHeight, clientHeight);

    if (scrollTop + clientHeight >= scrollHeight) {
          console.log("ss");
          setOpenSkill(true);
    }
  };

  return (
    <div style={{cursor:'pointer'}}>
      <CSSTransition
        in={open}
        timeout={300} // Duration of your transition
        classNames="page" // Prefix for your CSS classNamees
      >
        <div
          className="page-overlay"
          onClick={handleButtonClick}
        >
          <div className="education-grid">
            <div
                style={{
                    padding: "20px 0px",
                    zIndex: "1",
                }}
                >
                <h1 className="experience-heading">
                    <div className="pin"></div>
                    EDUCATION
                </h1>
                </div>
            <div
              className="education-item"
              style={{ gridArea: "5 / 3 / 8 / 14", opacity: "1" }}
            >
              <a href="https://www.linkedin.com/in/suchita-soni/details/certifications/">
                Certifications
              </a>
              <li>Java Fundamentals | Code With Mosh</li>
              <li>Frontend Developer(React) | HackerRank</li>
            </div>
            <div
              className="education-item"
              style={{ gridArea: "9/3/12/14", opacity: 1 }}
            >
              <p>Senior Secondary (12th Grade) | PCM</p>
              <p>Maharishi Vidya Mandir School | CBSE</p>
              <p>2015 - 2016</p>
            </div>
            <div
              className="education-item"
              style={{ gridArea: "13/3/16/14", opacity: 1 }}
            >
              <p>Bachelor's of Engineering / ECE</p>
              <p>Oriental College of Technology | RGPV University</p>
              <p>2016 - 2020</p>
            </div>
          </div>
          <div style={{padding: '20px 50px',justifyItems: 'center'}}>
            <div
                style={{
                    padding: "20px 0px",
                    zIndex: "1", height: "150px"
                }}
                >
                <h1 className="experience-heading">
                    <div className="pin"></div>
                    SKILLS
                </h1>
                </div>
            <Trail open={openSkill}>
                <div id="react">REACT</div>
                <div id="javascript">JAVASCRIPT</div>
                <div id="html">HTML</div>
                <div id="css">CSS</div>
                <div id="redux">REDUX</div>
                <div id="typescript">TYPESCRIPT</div>
            </Trail>
            </div>
        </div>
      </CSSTransition>
    </div>
  );
};

export default ExpandedBox;
