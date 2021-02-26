import React from 'react';
import {goToBack} from '../../Router/Coordinator'
import {useHistory} from 'react-router-dom';
import { Button } from '@material-ui/core';

function Error(){

    const history = useHistory()

    return(
        <div>
            <h1>A página que você pesquisou não existe. Tente novamente.</h1>
            <Button 
                variant="contained" 
                color="primary" 
                onClick={() => goToBack(history)}>
                Voltar
            </Button>
        </div>
    )
}

export default Error;