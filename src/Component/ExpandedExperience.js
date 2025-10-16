import React, { useContext, useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { UserContext } from "../Context";
import { useTrail, a } from "@react-spring/web";
import "../experience.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const experiences = [
  {
    role: "Associate Consultant (React Developer)",
    company: "Infosys Ltd",
    duration: "Nov 2022 – Present",
    description: [
      "Leading the development of high-performance React.js and TypeScript applications for Verizon client projects.",
      "Implemented scalable state management with Redux Toolkit to streamline data flow and reduce complexity.",
      "Redesigned complex dashboards and timeline views to enhance usability and visual clarity.",
      "Integrated CI/CD pipelines using GitLab for efficient deployment and testing.",
      "Collaborated closely with cross-functional teams using Agile methodology to deliver client-focused solutions."
    ],
    techStack: ["React.js", "TypeScript", "Redux Toolkit", "GitLab", "Jira"],
  },
  {
    role: "Senior Software Engineer (Frontend Developer)",
    company: "Capgemini",
    duration: "Sept 2020 – Nov 2022",
    description: [
      "Developed ADA-compliant React.js applications for MetLife US & Mexico to manage user profiles and improve accessibility.",
      "Migrated legacy UIs to modern React architecture, improving performance and maintainability by 30%.",
      "Designed responsive and reusable UI components aligned with the company’s design system.",
      "Collaborated in sprint planning and daily stand-ups, ensuring smooth Agile delivery."
    ],
    techStack: ["React.js", "Redux", "CSS3", "REST APIs", "Jira"],
  },
  {
    role: "Frontend Developer Intern",
    company: "Capgemini",
    duration: "Dec 2020 – Sept 2020",
    description: [
      "Built and redesigned key UI modules for user registration and dashboard pages.",
      "Implemented MFA authentication and dynamic form rendering using React and Redux.",
      "Collaborated with design and backend teams to optimize UI performance and accessibility."
    ],
    techStack: ["React.js", "Redux", "JavaScript (ES6)", "HTML5", "CSS3"],
  },
];
const Trail = ({ open, children }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    from: { opacity: 0 },
    to: { opacity: 1 },
  });
  return (
    <div
      style={{
        display: "flex",
        flexFlow: "wrap",
        justifyContent: "space-between",
        width: "70vw",
        gap: "30px",
        marginTop: "20px",
      }}
    >
      {trail.map(({ height, ...style }, index) => (
        <a.div className="skill-item" style={style}>
          {items[index]}
        </a.div>
      ))}
    </div>
  );
};

const ExpandedExperience = () => {
  const [open, setOpen] = useState(false);
  const [openSkill, setOpenSkill] = useState(false);
  const navigate = useNavigate();
  const { iconSrc, mode, setLoading } = useContext(UserContext);
  const ref = useRef(null);

  // Track scroll progress of this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // triggers when element enters and leaves viewport
  });

  // Animate vertical line height based on scroll
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const handleButtonClick = () => {
    setOpen(false);
    setTimeout(() => {
      navigate("/Portfolio");
    }, 300); // Match the timeout duration in CSSTransition
  };
  useEffect(() => {
    let root = document.getElementById("root");
    if (!mode) {
      root.style.setProperty("--education-background", "#2a2a28");
      root.style.setProperty("--education-tile", "#000000ff");
      root.style.setProperty("--text-color", "#fff");
      root.style.setProperty("--swing-board", "#000000ff");
    } else {
      root.style.setProperty("--education-background", "#f0e9a4");
      root.style.setProperty("--education-tile", "#d2dee0");
      root.style.setProperty("--text-color", "#000000ff");
      root.style.setProperty("--swing-board", "#3f200c");
    }
    setOpen(true);
    setLoading(false);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleScroll = (event) => {
    const { scrollTop, scrollHeight, clientHeight } =
      event.target.scrollingElement;

    if (scrollTop + clientHeight >= scrollHeight) {
      setOpenSkill(true);
    }
  };

  return (
    <div>
      <CSSTransition
        in={open}
        timeout={300} // Duration of your transition
        classNames="page" // Prefix for your CSS classNamees
      >
        <div className="page-overlay" onClick={handleButtonClick} ref={ref}>
          <div
            style={{
              padding: "20px 0px",
              zIndex: "1",height:'150px'
            }}
          >
            <h1 className="experience-heading">
              <div className="pin"></div>
              EXPERIENCE
            </h1>
          </div>

          <div className="timeline">
            {/* Animated central line */}
            <motion.div
              className="timeline-line"
              style={{ scaleY: scrollYProgress }}
            />

            {experiences.map((exp, index) => (
              <motion.div
                className="timeline-item"
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true, amount: 0.4 }}
              >
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>{exp.role}</h3>
                  <h4>{exp.company}</h4>
                  <p className="duration">{exp.duration}</p>
                  <ul>
                    {exp.description.map((line, i) => (
                      <li key={i}>{line}</li>
                    ))}
                  </ul>
                  <div className="tech-stack">
                    {exp.techStack.map((tech, i) => (
                      <span key={i} className="tech">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </CSSTransition>
    </div>
  );
};

export default ExpandedExperience;
