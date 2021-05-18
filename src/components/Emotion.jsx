/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

export const Emotion = () => {
  const containerStyle = css`
    border: solid 2px blue;
    border-radius: 20px;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
  `;
  const titleStyle = css({
    margin: 0,
    color: "yellowgreen"
  });
  return (
    <div css={containerStyle}>
      <p css={titleStyle}>- Emotion -</p>
      <SButton>FIGHT!</SButton>
    </div>
  );
};

const SButton = styled.button`
  background-color: lightpink;
  border: none;
  padding: 8px;
  border-radius: 8px;
  &:hover {
    background-color: lightyellow;
    cursor: pointer;
  }
`;
