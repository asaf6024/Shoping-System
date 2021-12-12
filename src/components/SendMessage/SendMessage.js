import React, { useState, useEffect } from 'react'
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

            <MyModal
                headlineText={'בדיקה'}
                show={modalShow}
                onHide={() => setModalShow(false)}
                ButtonText='ביטול'
                ButtonCloseText={'שליחה'}
                message={message}
            />

        </div>
    )
}
export default SendMessage
