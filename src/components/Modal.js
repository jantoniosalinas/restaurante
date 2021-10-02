import React from 'react';
import ReactDOM from 'react-dom';
import { Form } from './Form';
//import { FormMeat } from './FormMeat';
import FocusTrap from 'focus-trap-react';
import '../styles.css'

export const Modal = ({
            onClickOutside,
            onKeyDown,
            modalRef,
            buttonRef,
            closeModal,
            onSubmit,
            id
        }) => {
              
        let reserved = true;
        let meat = false;
        let salad = false;
        let desserts = false;
        let cocktails = false;
        if ( id === 1 ) reserved = true; 
        if ( id === 2 ) { reserved = false; meat = true; }
        if ( id === 3 ) { reserved = false; salad = true; }
        if ( id === 4 ) { reserved = false; desserts = true; }
        if ( id === 5 ) { reserved = false; cocktails = true; }

        //console.log(`my Id = ${id} reserved=${reserved} meat = ${meat} salad=${salad} desserts=${desserts} cocktails=${cocktails}`);

        return ReactDOM.createPortal(
            <FocusTrap>
            <aside
                tag="aside"
                role="dialog"
                tabIndex="-1"
                aria-modal="true"
                className="modal-cover"
                onClick={onClickOutside}
                onKeyDown={onKeyDown}
            >
                <div className="modal-area" ref={modalRef}>
                    <button
                        ref={buttonRef}
                        aria-label="Close Modal"
                        aria-labelledby="close-modal"
                        className="_modal-close"
                        onClick={closeModal}
                    >
                        <span id="close-modal" className="_hide-visual">
                        Close
                        </span>
                        <svg className="_modal-close-icon" viewBox="0 0 40 40">
                            <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
                        </svg>
                    </button>
                    <div className="modal-body">
                        <Form onSubmit={onSubmit} 
                              reserved={reserved}
                              meat={meat}
                              salad={salad}
                              desserts={desserts}
                              cocktails={cocktails}
                              id={id} />
                    </div>
                </div>
            </aside>
            </FocusTrap>,
            document.body
        );
};

export default Modal;
