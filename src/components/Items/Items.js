import React, { useState } from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import './items.css'

import Add from '../Add/Add';

const Items = ({ setItems, items, headline }) => {
    const [displayAdd, setDisplayAdd] = useState(false)

    const changeValue = (id, isActive, variable, value) => {

        if (variable == 'amount')
            items.forEach(i => i.id == id ? i.amount = value : '')
        else if (variable == 'comment')
            items.forEach(i => i.id == id ? i.comment = value : '')
        else if (variable == 'isActive')
            items.forEach(i => i.id == id ? i.isActive = !isActive : '')
    }

    return (
        <MDBTable>
            <MDBTableHead color="primary-color" textWhite>
                <tr>
                    <th>#</th>
                    <th className='text-right'>פריט</th>
                    <th>כמות</th>
                    <th>הערות</th>
                    <th>האם להזמין</th>
                </tr>
            </MDBTableHead>
            <MDBTableBody>
                {
                    items != undefined && items.map((c, index) => {
                        return <tr key={c.id}>
                            <td>{index + 1}</td>
                            <td><h4 className='text-right'>{c.name}</h4></td>
                            <td>
                                <input className='form-control' type='number' placeholder='כמות' defaultValue={c.amount}
                                    onChange={(e) => changeValue(c.id, c.comment, 'amount', e.target.value)}
                                />
                            </td>
                            <td>
                                <input className='form-control' type='text' placeholder='הערה' defaultValue={c.comment}
                                    onChange={(e) => changeValue(c.id, c.comment, 'comment', e.target.value)}
                                />
                            </td>
                            <td>
                                <input className='form-control' type='checkbox' defaultChecked={c.isActive}
                                    onChange={(e) => changeValue(c.id, c.isActive, 'isActive', e.target.value)}
                                />
                            </td>
                        </tr>

                    })

                }
                {
                    displayAdd &&
                    <Add
                        number={items.length}
                        setDisplayAdd={setDisplayAdd}
                        items={items}
                        setItems={setItems}
                    />

                }
                <tr>
                    <td colSpan='5'>
                        <h5 onClick={() => setDisplayAdd(true)}>
                            הוספת {headline}&nbsp;
                            <i className="fas fa-plus-circle"></i>

                        </h5>
                    </td>
                </tr>

            </MDBTableBody>
        </MDBTable >
    );
}

export default Items;