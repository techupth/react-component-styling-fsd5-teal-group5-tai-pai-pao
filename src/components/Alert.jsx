// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export function Alert(props) {
  if (props.type === "a") {
    return (
      <button
        css={css`
          padding: 2px;
          background-color: #ff6961;
          font-size: 15px;
          border: none;
          border-radius: 5px;
          text-align: left;
          color: black;
          margin: 5px;
          width: 450px;
        `}
      >
        <p>&#128577; This is error alert box </p>
      </button>
    );
  } else if (props.type === "b")
    return (
      <button
        css={css`
          padding: 2px;
          background-color: #fac898;
          font-size: 15px;
          border: none;
          border-radius: 5px;
          text-align: left;
          color: black;
          margin: 5px;
          width: 450px;
        `}
      >
        <p>&#9843; This is warning alert box </p>
      </button>
    );
  else if (props.type === "c")
    return (
      <button
        css={css`
          padding: 2px;
          background-color: #fff49b;
          font-size: 15px;
          border: none;
          border-radius: 5px;
          text-align: left;
          color: black;
          margin: 5px;
          width: 450px;
        `}
      >
        <p>&#128712; This is info alert box </p>
      </button>
    );
  else if (props.type === "d")
    return (
      <button
        css={css`
          padding: 2px;
          background-color: #6fc276;
          font-size: 15px;
          border: none;
          border-radius: 5px;
          text-align: left;
          color: black;
          margin: 5px;
          width: 450px;
        `}
      >
        <p>&#9989; This is success alert box </p>
      </button>
    );
  return <Alert></Alert>;
}
