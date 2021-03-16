import React from 'react'
import { Button } from '@material-ui/core';

function ButtonsForm(props) {
    return (
        <Button
            onClick={props.onClick}
            variant={"contained"}
            color={props.color}
            fullWidth
            type={props.type}
        >{props.content}
        </Button>
    )
}
export default ButtonsForm;