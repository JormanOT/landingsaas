import React from 'react';
import Popup from 'reactjs-popup';
import './Modal.scss'
import 'reactjs-popup/dist/index.css';

const Modal = ({ id , term , privacy}) => {

    return (
        <Popup
            trigger={<a href='#' className="button"> {id} </a>}
            modal
            nested
        >
            {close => (
                <div className="modal">
                    <button className="close" onClick={close}>
                        &times;
                    </button>
                    <div className="header"> {id} </div>
                    <div className="content">
                        {id === 'Terms Of Use' ?
                            term.map((data, i) => (
                                <div key={i}>
                                    <h3>{data.title}</h3>
                                    <p>{data.description}</p>
                                    <br />
                                </ div>
                            ))
                            :
                            privacy.map((data, i) => (
                                <div key={i}>
                                    <h3>{data.title}</h3>
                                    <p>{data.description}</p>
                                    <br />
                                </div>
                            ))
                        }
                    </div>
                </div>
            )}
        </Popup>
    )
}

export default Modal