import React from 'react';
import { Alert, AlertColor, AlertTitle } from '@mui/material';

                                    
export let AlertComponent = (props : {'message' : string , 'type' : AlertColor, "cssClass" : string}) : JSX.Element => { 
    return (
        <Alert severity={props.type} className={props.cssClass} >
            <AlertTitle sx={{fontSize : '13px'}}>
                {props.message}
            </AlertTitle>
        </Alert>
    )
}

export default AlertComponent;