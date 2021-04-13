import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';

const Code = (props) => {
    return (
        <>
                <div className="head">
                    <i class={props.logo} ></i>
                    <h3>{props.lang}</h3>
                    <Button><AspectRatioIcon /></Button>
                </div>
        </>
    )
}

export default Code;