import React from 'react';
import {useModalContext} from "../../context/ModalProvider";
import ModalWindow from "../../componentns/modal/ModalWindow";

function ModalPage() {
   const {modal}=useModalContext()

   if (modal){
       return <ModalWindow/>
   }
}

export default ModalPage;