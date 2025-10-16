import ReactDom from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';

export default function Modal({isOpen, onClose, children}) {
    return (
        <div>
            {ReactDom.createPortal(
                    <CSSTransition
                        in={isOpen}
                        timeout={300} // Duration of your transition
                        classNames="modal" // Prefix for your CSS classes
                        unmountOnExit // Unmounts the component when exiting
                        >
                        <div className="modal-overlay" >
                            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            {children}
                            </div>
                        </div>
                        {/* <div style={{position: 'fixed',top: '0',left: '0',right: '0',bottom: '0',zIndex: '1000',backgroundColor: 'rgb(0, 0, 0, .7)'}}></div><div className='modal'>
                                    {children}
                                </div> */}
                    </CSSTransition>, document.getElementById('modal-root')
                )
            }
        </div>
    )
}
Modal.propTypes = {
                isOpen: PropTypes.bool.isRequired,
                onClose: PropTypes.func,
                children: PropTypes.node
            };