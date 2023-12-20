// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import frown from "../assets/frown.png"
import acir from "../assets/alert-cir.png"
import atri from "../assets/alert-tri.png"
import check from "../assets/check.png"

export function Alert(props) {
    if(props.type==="error"){
        return (
            <button
                css = {css`
                display: block;
                margin: 7px 0;
                width: 330.97px;
                height: 50px;
                top: 291px;
                left: 119.14px;
                border-radius: 4px;
                background-color: #F9C8C8;
                color: black;
                text-align:left;
                `}>
                <img src={frown} alt="" /> 
                {props.text}
            </button>
        )
    }else if(props.type==="warning"){
        return (
            <button
                css = {css`
                display: block;
                margin: 7px 0;
                width: 330.97px;
                height: 50px;
                top: 291px;
                left: 119.14px;
                border-radius: 4px;
                background-color: #F9D9C8;
                color: black;
                text-align:left;
                `}>
                <img src={atri} alt="" /> 
                {props.text}
            </button>
        )
    }else if(props.type==="info"){
        return (
            <button
                css = {css`
                display: block;
                margin: 7px 0;
                width: 330.97px;
                height: 50px;
                top: 291px;
                left: 119.14px;
                border-radius: 4px;
                background-color: #F9EBC8;
                color: black;
                text-align:left;
                `}>
                <img src={acir} alt="" /> 
                {props.text}
            </button>
        )
    }else if(props.type==="success"){
        return (
            <button
                css = {css`
                display: block;
                margin: 7px 0;
                width: 330.97px;
                height: 50px;
                top: 291px;
                left: 119.14px;
                border-radius: 4px;
                background-color: #CEF7CD;
                color: black;
                text-align:left;
                `}>
                <img src={check} alt="" /> 
                {props.text}
            </button>
        )
    }

    return (
        <button>{props.text}</button>
    )
}
