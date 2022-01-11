import React from 'react'

export const VisibilityControl = props => {
    return (
        <div>
            <input 
                type="checkbox"
                className='form-check-input'
                checked={props.isChecked}
                onChange={e => props.cb(e.target.checked)}
            />
            <label htmlFor="form-check-label">
                Show {props.description}
            </label>
        </div>
    )
}