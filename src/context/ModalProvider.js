import React, {createContext, useContext, useState} from 'react';


const ModalContext = createContext({})

export function useModalContext (){
    return useContext(ModalContext)
}

function ModalProvider({children}) {
    const [title,setTitle]=useState('')
    const [modal, setModal]=useState(false)

    function openModal (){
        setTitle('Пользователь успешно создан')
        setModal(true)
    }
    function openModalDelete (){
        setTitle('Пользователь успешно удален')
        setModal(true)
    }

    function closeModal(){

        setModal(false)
    }


    const value = {
        title, modal, openModal, closeModal,openModalDelete
    }

    return (
        <ModalContext.Provider value={value}>
            {children}
        </ModalContext.Provider>
    );
}

export default ModalProvider;