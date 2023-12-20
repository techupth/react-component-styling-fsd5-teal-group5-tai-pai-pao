// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

function Button(props) {
    if(props.type==="primary"){
        return (
            <button
                css = {css`
                display: block;
                margin: 7px 0;
                width: 200px;
                height: 50px;
                top: 291px;
                left: 119.14px;
                border-radius: 4px;
                background-color: #074EE8;
                color: white;
                `}>
                {props.text}
            </button>
        )
    }else if(props.type==="secondary"){
        return (
            <button
                css = {css`
                display: block;
                margin: 7px 0;
                width: 200px;
                height: 50px;
                top: 291px;
                left: 119.14px;
                border-radius: 4px;
                background-color: #07A4E8;
                color: white;
                `}>
                {props.text}
            </button>
        )
    }

    return (
        <button>{props.text}</button>
    )
}
export default Button;
