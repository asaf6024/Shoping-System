import Modal from 'react-bootstrap/Modal'
import React from 'react'
import ReactWhatsapp from 'react-whatsapp';

function MyModal(props) {

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                </Modal.Title>
            </Modal.Header>

            <Modal.Body className='text-center'>
                <h4>ההזמנה נשמרה</h4>
                <p>
                    לחצו על "שליחה" לשיתוף בווטסאפ
                </p>
            </Modal.Body>

            <Modal.Footer className='text-center' style={{ margin: 'auto' }}>
                <ReactWhatsapp number="972502820405" message={props.message} className='btn success'>
                    <i className="fas fa-paper-plane fa-2x"></i>&nbsp;שליחה
                </ReactWhatsapp>
                {props.ButtonText !== '' ?
                    <button
                        className='btn danger'
                        onClick={props.onHide}>{props.ButtonText}&nbsp;
                        <i className="fas fa-times-circle fa-2x"></i>
                    </button>
                    : ''
                }
            </Modal.Footer>
        </Modal>
    );
}
export default MyModal