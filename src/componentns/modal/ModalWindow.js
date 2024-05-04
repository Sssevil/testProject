import React from 'react';
import {useModalContext} from "../../context/ModalProvider";

function ModalWindow() {

    const {title, closeModal} = useModalContext()
    return (
        <div className='modal'>
            <div className='modal_win'>
                <p>{title}</p>
                <button onClick={closeModal}>закрыть</button>
            </div>
        </div>
    );
}

export default ModalWindow;