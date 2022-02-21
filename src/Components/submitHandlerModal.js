import React, { useState, useEffect } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useNavigate } from 'react-router-dom';
import {ModalStyleDiv} from './Styles/ModalStyleDiv.styled';

function SubmitHandlerModal({ modalMsg, modalShow, setModalShow }) {
    const [open, setOpen] = useState(modalShow);
    const navigate = useNavigate();
    const onCloseModal = () => {
        setOpen(false);
        setModalShow(false);
    }
    const onYesClickHandler = () => {
        setOpen(false);
        setModalShow(false);
        navigate('/result');
    }
    useEffect(() => {
        setOpen(modalShow)
    }, [modalShow])

    return (
        <div>
            <Modal open={open} onClose={onCloseModal} center>
                <ModalStyleDiv>
                    <p>{modalMsg}</p>
                    <div style={{ display: 'flex' }}>
                        <button onClick={onCloseModal}>
                            No
                        </button>
                        <button onClick={onYesClickHandler}>
                            Yes
                        </button>
                    </div>

                </ModalStyleDiv>
            </Modal>
        </div>
    )
}

export default SubmitHandlerModal