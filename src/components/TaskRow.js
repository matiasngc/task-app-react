import React from 'react'

export const TaskRow = props => {
    return (
        <tr key={props.tareaa.name}>
            <td>{props.tareaa.name}</td>
            <td>
                <input
                    type="checkbox"
                    checked={props.tareaa.done}
                    onChange={() => props.checkboxRow(props.tareaa)}
                />
            </td>
        </tr>
    )
}
