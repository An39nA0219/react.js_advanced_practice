import styled from "styled-components";

export const StyledComponents = () => {
  return (
    <SContainer>
      <STitle>- Styled Components -</STitle>
      <SButton>FIGHT!</SButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  border: solid 2px blue;
  border-radius: 20px;
  padding: 8px;
  margin: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const STitle = styled.p`
  margin: 0;
  color: yellowgreen;
`;

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
