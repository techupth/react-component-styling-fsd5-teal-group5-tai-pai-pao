// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export function Alert(props) {
  return (
    <div
      css={css`
        box-sizing: border-box;

        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        gap: 15px;

        margin: 20px;
        padding-left: 20px;

        border-radius: 10px;
        width: 650px;
        height: 76px;
        background-color: ${props.color};
        font-size: 14px;
        font-weight: bold;
        color: black;
      `}
    >
      <img src={props.image} alt="My Happy SVG" />
      <div>{props.alertMessage}</div>
    </div>
  );
}
