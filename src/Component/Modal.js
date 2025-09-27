import ReactDom from 'react-dom';
export default function Modal({isOpen, onClose, children}) {
    return (
        <div>
            {isOpen &&
                ReactDom.createPortal(
                    <><div style={{position: 'fixed',top: '0',left: '0',right: '0',bottom: '0',zIndex: '1000',backgroundColor: 'rgb(0, 0, 0, .7)'}}></div><div className='modal'>
                        {children}
                    </div></>, document.getElementById('modal-root')
                )
            }
        </div>
    )
}