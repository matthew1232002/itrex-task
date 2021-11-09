import styled from "styled-components";

export const StyledPatientsList = styled.div`
  display: grid;
  gap: 24px 20px;
  grid-template-columns: repeat(auto-fit, minmax(406px, 1fr));
  height: calc(100vh - 280px);
  background-color: #F9FAFF;
  overflow: scroll;
  overflow-x: hidden;
  padding: 0 32px 0 0;
  &::-webkit-scrollbar{
    width: 12px;
    height: auto;
    background-color: rgba(220, 224, 236, 0.3);
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(220, 224, 236, 0.5);
    border-radius: 8px;
  }
  @media  (max-width: 769px){
    grid-template-columns: 1fr;
  }
  @media (max-width: 600px) {
    padding: 0;
    height: 100vh;
    &::-webkit-scrollbar{
      display: none;
    }
  }
`;