import React from 'react'
import {Background, ModalWrapper, ModalContent, CloseModalButton} from './ModalElements'
const Modal = ({ showModal, setShowModal, text}) => {
  return (
    <>
      {showModal ? (
        <>
        <Background onClick={setShowModal}>
        </Background>
          <ModalWrapper>
            <ModalContent>
              <h1>{text}</h1>
            </ModalContent>
            <CloseModalButton onClick={setShowModal}/>
          </ModalWrapper>
        </>
      ) : null}
    </>
  )
}

export default Modal