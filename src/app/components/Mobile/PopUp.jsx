import React from 'react'

function PopUp({ item }) {



    return (
        <div style={{ backgroundColor: 'white', padding: '20px' }}>

            {item &&
                <table style={{ width: '100%' }} >
                    <thead>
                        <tr style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <th>size</th>
                            <th>color</th>
                            <th>price</th>
                            <th></th>
                        </tr>

                    </thead>
                    <tbody>
                        <tr style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <td>{item.size}</td>
                            <td><div className="color-circle" style={{ backgroundColor: `${item.color}` }}></div></td>
                            <td>${item.price}</td>
                            <td><input type="checkbox" /></td>
                        </tr>
                    </tbody>
                </table>
            }
        </div>
    )
}

export default PopUp