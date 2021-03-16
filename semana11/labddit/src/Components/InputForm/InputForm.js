import React from 'react'
import { TextField } from '@material-ui/core';

function InputForm(props) {

    return (
        <TextField
            name={props.name}
            value={props.value}
            type={props.type}
            id={props.id}
            label={props.label}
            variant={props.variant}
            fullWidth
            margin={props.margin}
            onChange={props.onChange}
            required
        />
    )
}
export default InputForm;