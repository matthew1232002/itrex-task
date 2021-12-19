import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Plus from '../../../assets/plus.svg';
import SelectIcon from '../../../assets/select__icon.svg';
import ArrowUp from '../../../assets/arrow-up.svg';

export const StyledCreateAppointment = styled(Link)`
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  background: #7297FF;
  color: #FFF;
  border-radius: 8px;
  padding: 12px 16px 12px 48px;
  background-image: url(${Plus});
  background-repeat: no-repeat;
  background-position-y: center;
  background-position-x: 16px;
  margin: -10px 0 0 64px;
  @media (max-width: 950px){
    display: none;
  }
`;

export const StyledIcon = styled.div`
  background: url(${SelectIcon}) no-repeat;
  padding-left: 30px;
  display: none;
  @media (max-width: 950px) {
    display: block;
  }
`;

export const StyledSearch = styled.div`
  display: flex;
`;

export const StyledSearchList = styled.div`
  width: 106px;

  @media (max-width: 950px) {
    display: none;
  }
`;

export const StyledSearchForm = styled.form`
  display: flex;
  position: relative;

  p {
    font-size: 15px;
    line-height: 21px;
    color: #A1ABC9;
    padding: 2px 16px 0 0;
  }

  @media (max-width: 950px) {
    p {
      display: none;
    }
  }
`;

export const StyledSearchHeader = styled.div`
  cursor: pointer;
  background: url(${ArrowUp}) no-repeat;
  background-position-y: center;
  background-position-x: right;

  span {
    color: #7297FF;
    font-size: 15px;
    line-height: 21px;
  }
`;

export const StyledSearchItems = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  border-radius: 8px;
  background: #F9FAFF;
  display: none;

  div {
    font-size: 15px;
    line-height: 21px;
    cursor: pointer;
    padding: 10px 96px 10px 24px;

    &:hover {
      color: #7297FF;
    }
  }
`;

export const StyledTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 36px 32px 0;

  h2 {
    font-size: 24px;
    font-weight: 600;
    line-height: 26px;
  }

  @media (max-width: 600px) {
    margin: 0 0 16px 0;
    h2 {
      font-size: 20px;
      line-height: 24px;
    }
  }
`;

export const StyledAppointmentsList = styled.div`
  display: grid;
  gap: 24px 20px;
  grid-template-columns: repeat(auto-fit,minmax(406px,1fr));
  height: calc(100vh - 306px);
  background-color: #F9FAFF;
  overflow: auto;
  overflow-x: hidden;
  padding: 0 32px 0 0;
  row-gap: 24px;
  grid-auto-rows: max-content;

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
  }
`;
