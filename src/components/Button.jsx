// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export function Button(props) {
  return (
    <button
      css={css`
        width: 150px;
        height: 50px;
        background-color: ${props.color};
        font-size: 14px;
        color: white;
      `}
    >
      Button
    </button>
  );
}
