import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 55%;
  `;

export const DescriptionText = styled.div`
  display: flex;
  height: 75px;
  `
export const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 100px;
`
export const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  color: #555;

  &:hover {
    color: #007bff;
}
`;

export const SeminarItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: #f8f9fa;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);

  img{
    border-radius: 5px;
  }
`;

export const SeminarText = styled.span`
  flex-grow: 1;
  font-size: 17px;
  margin-bottom: 10px;
`;

export const TimeFrame = styled.div`
  display: flex;
  align-items: center;
  width: 100%
`;




