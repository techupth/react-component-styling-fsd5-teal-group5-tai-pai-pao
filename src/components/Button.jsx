// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export function Button(props) {
  if (props.type === "primary") {
    return (
      <button
        css={css`
          padding: 20px;
          background-color: #0000ff;
          font-size: 24px;
          border: none;
          border-radius: 5px;
          text-align: center;
          color: white;
        `}
      >
        Button
      </button>
    );
  } else if (props.type === "secondary")
    return (
      <button
        css={css`
          padding: 20px;
          background-color: #87ceeb;
          font-size: 24px;
          border: none;
          border-radius: 5px;
          text-align: center;
          color: white;
        `}
      >
        Button
      </button>
    );
  return <Button></Button>;
}
