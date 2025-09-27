import { useState, useContext, useRef} from 'react';
import Lordicon from 'react-lordicon';
import { UserContext } from '../Context';
import Modal from './Modal';
import { sendForm } from 'emailjs-com';

const linkedIn = "https://linkedin.com/in/suchita-soni";
const gitLink = "https://github.com/suchitasoni";
const Contact = () => {
    const [isHoveringInsta, setIsHoveringInsta] = useState(false);
    const [isHoveringGit, setIsHoveringGit] = useState(false);
    const [isHoveringMail, setIsHoveringMail] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [title, setTitle] = useState("Hey, lets connect!");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("I would like to work with you.");
    const [email, setEmail] = useState("");
    const {iconSrc, mode} = useContext(UserContext);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        sendForm("service_ldbw54m","template_j7a2kei",form.current,"AZwS4f8_NAvdnd_22")
        .then(
            () => {
            console.log('SUCCESS!');
            resetForm();
            setModalOpen(false);
            },
            (error) => {
            console.log('FAILED...', error.text);
            },
        );
    };
    const resetForm=()=>{
        setTitle("Hey, lets connect!");
        setName("");
        setMessage("I would like to work with you.");
        setEmail("");
    }
    return(
        <div style={{textAlign: 'center',display: 'flex',justifyContent: 'space-evenly'}}>
            <div
                onMouseEnter={() => setIsHoveringInsta(true)}
                onMouseLeave={() => setIsHoveringInsta(false)}
                onClick={()=>{window.open(linkedIn, "_blank")}}>
                    <lord-icon
                        src={mode ? iconSrc.find(icon => icon.name === "linkedIn").lightSource : iconSrc.find(icon => icon.name === "linkedIn").darkSource}
                        trigger={isHoveringInsta ? 'hover' : 'in'} //morph
                        delay="150"
                        stroke="bold"
                        state={isHoveringInsta ? 'hover' : 'in-reveal'} //morph-open
                        style={{width: '80px', height: '80px'}}>
                    </lord-icon>
            </div>
            <div
                onMouseEnter={() => setIsHoveringGit(true)}
                onMouseLeave={() => setIsHoveringGit(false)}
                onClick={()=>{window.open(gitLink, "_blank")}}>
                    <lord-icon
                        src={mode ? iconSrc.find(icon => icon.name === "github").lightSource : iconSrc.find(icon => icon.name === "github").darkSource}
                        trigger={isHoveringGit ? 'hover' : 'in'} //morph
                        delay="150"
                        stroke="bold"
                        state={isHoveringGit ? 'morph-open' : 'in-reveal'} //morph-open
                        style={{width: '80px', height: '80px'}}>
                    </lord-icon>
            </div>
            <div
                onMouseEnter={() => setIsHoveringMail(true)}
                onMouseLeave={() => setIsHoveringMail(false)}
                onClick={()=>{setModalOpen(true)}}>
                    <lord-icon
                        src={mode ? iconSrc.find(icon => icon.name === "mail").lightSource : iconSrc.find(icon => icon.name === "mail").darkSource}
                        trigger={isHoveringMail ? 'hover' : 'in'} //morph
                        delay="150"
                        stroke="bold"
                        state={isHoveringMail ? 'morph-open' : 'in-reveal'} //morph-open
                        style={{width: '80px', height: '80px'}}>
                    </lord-icon>
            </div>
            <Modal isOpen={modalOpen} onClose={()=>{setModalOpen(false)}}>
                <h1 style={{textAlign: 'center'}}>Contact Me</h1>
                <form id="form" ref={form} onSubmit={sendEmail}>
                    <div className="field">
                        <input required type="text" id="title" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder='Subject'/>
                    </div>
                    <div className="field">
                        <input required type="text" id="name" value={name}  onChange={(e)=>setName(e.target.value)} placeholder='Your name'/>
                    </div>
                    <div className="field">
                        <input required type="text" id="message" value={message}  onChange={(e)=>setMessage(e.target.value)} placeholder='Message'/>
                    </div>
                    <div className="field">
                        <input required type="text" id="email" value={email}  onChange={(e)=>setEmail(e.target.value)} placeholder='Your email id'/>
                    </div>
                    <div style={{display: 'flex',flexDirection: 'row',marginTop: '20px',gap: '30px',justifyContent: 'space-between'}}>
                        <div className='btnbg'><input className='btnfg' type="submit" id="button" value="Send Email" /></div>
                        <div className='btnbg'><input className='btnfg' type="button" id="cancelbtn" value="Close" onClick={()=>{setModalOpen(false); resetForm();}}/></div>
                    </div>
                    </form>
            </Modal>
        </div>
    )
}
export default Contact;