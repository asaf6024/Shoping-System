import React, { useState, useEffect } from 'react'
import ReactWhatsapp from 'react-whatsapp';
import MyModal from '../Modal/MyModal';

const SendMessage = ({ saveReservation, reservation, setModalShow, modalShow }) => {

    const [message, setMessage] = useState('')
    useEffect(() => {

        console.log('reservation', reservation)
        if (reservation.length > 1) {

            setMessage(`*הזמנה*\n       
             ${reservation[0].filter(r => r.isActive ? r : '').map((r, i) => `${i == 0 ? `*מוצרי חלב*\n` : ''} ${r.name} - ${r.amount} ${r.comment != '' ? `| ${r.comment}` : ''}\n`).join('')} 
             ${reservation[1].filter(r => r.isActive ? r : '').map((r, i) => `${i == 0 ? `*מוצרים למטבח*\n` : ''} ${r.name} - ${r.amount} ${r.comment != '' ? `| ${r.comment}` : ''}\n`).join('')} 
             ${reservation[2].filter(r => r.isActive ? r : '').map((r, i) => `${i == 0 ? `*ירקות*\n` : ''} ${r.name} - ${r.amount} ${r.comment != '' ? `| ${r.comment}` : ''}\n`).join('')} 
             ${reservation[3].filter(r => r.isActive ? r : '').map((r, i) => `${i == 0 ? `*ממתקים*\n` : ''} ${r.name} - ${r.amount} ${r.comment != '' ? `| ${r.comment}` : ''}\n`).join('')} 
             ${reservation[4].filter(r => r.isActive ? r : '').map((r, i) => `${i == 0 ? `*קפואים*\n` : ''} ${r.name} - ${r.amount} ${r.comment != '' ? `| ${r.comment}` : ''}\n`).join('')} 
             ${reservation[5].filter(r => r.isActive ? r : '').map((r, i) => `${i == 0 ? `*חומרי ניקוי ורחצה*\n` : ''} ${r.name} - ${r.amount} ${r.comment != '' ? `| ${r.comment}` : ''}\n`).join('')}                     
             `
            )

        }

    }, [reservation])

    return (
        <div className='buttonDiv'>
            <button className='btn saveButton' onClick={(e) => {
                saveReservation(e)
            }}>
                <i className="fas fa-save"></i>&nbsp;שמירה
            </button>
            {/* <ReactWhatsapp number="972502820405" message={message} className='btn sendButton'>
                <i className="fas fa-paper-plane"></i>&nbsp;שליחה
            </ReactWhatsapp> */}

            {/* <MyModal
                headlineText={'התראה!'}
                headlineBody={notificationsState}
                show={modalShow}
                onHide={() => setModalShow(false)}
                ButtonDeleteText=''
                ButtonText='סגירה'
                onHide={() => seNotifcationNotActive()}
            /> */}
            {/* <MyModal /> */}

            {/* <MyModal
                modalShow={modalShow}
                ButtonText='שליחה'
                onHide={setModalShow(false)}
                ButtonCloseText='סגירה'
            /> */}
            <MyModal
                headlineText={'בדיקה'}
                show={modalShow}
                onHide={() => setModalShow(false)}
                ButtonText='ביטול'
                ButtonCloseText={'שליחה'}
                message={message}
            // ButtonDinamicFunction={() => actionAndUpdate()}
            />



        </div>
    )
}
export default SendMessage
