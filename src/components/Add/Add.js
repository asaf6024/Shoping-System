import { MDBCard } from 'mdbreact'
import React, { useState, useEffect } from 'react'

export const Add = ({ number, setDisplayAdd, items, setItems }) => {
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [amount, setAmount] = useState(1)
    const [comment, setComment] = useState('')

    useEffect(() => {
        setId(number + 1)
    }, [])


    const addNewProduct = (e) => {
        e.preventDefault();

        const isActive = true

        let newProduct = {
            id,
            name,
            amount,
            comment,
            isActive
        }

        setItems([...items, newProduct])
        setDisplayAdd(false)

    }

    return (
        <tr>
            <td>{id}</td>
            <td>
                <input type='text'
                    className='form-control'
                    required
                    value={name}
                    placeholder='הקלידו שם מוצר...'
                    onChange={(e) => setName(e.target.value)}
                />
            </td>
            <td>
                <input type='text'
                    className='form-control'
                    required
                    value={amount}
                    placeholder='כמות'
                    onChange={(e) => setAmount(e.target.value)}
                />
            </td>
            <td>
                <input type='text'
                    className='form-control'
                    required
                    value={comment}
                    placeholder='הערה'
                    onChange={(e) => setComment(e.target.value)}
                />
            </td>
            <td>
                <i className="fas fa-save"
                    onClick={e => {
                        name != '' && amount != '' ?
                            addNewProduct(e)
                            : alert('מלאו את כל שדות החובה')
                    }
                    }
                ></i>
            </td>
        </tr>
    )
}
export default Add
