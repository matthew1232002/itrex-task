import styled from 'styled-components';
import SelectIcon from '../../../assets/select__icon.svg';
import ArrowUp from '../../../assets/arrow-up.svg';
import Search from '../../../assets/search.svg';

export const StyledIcon = styled.div`
  background: url(${SelectIcon}) no-repeat;
  padding-left: 30px;
  display: none;
  @media (max-width: 769px) {
    display: block;
  }
`;

export const StyledSearch = styled.div`
  display: flex;
`;

export const StyledSearchForm = styled.form`
  display: flex;
  position: relative;
  p{
    font-size: 15px;
    line-height: 21px;
    color: #A1ABC9;
    padding: 2px 16px 0 0;
  }
  @media (max-width: 769px) {
    p{
      display: none;
    }
  }
`;

export const StyledSearchHeader = styled.div`
  cursor: pointer;
  background: url(${ArrowUp}) no-repeat;
  background-position-y: center;
  background-position-x: right;

  span{
    color: #7297FF;
    font-size: 15px;
    line-height: 21px;
  }
`;

export const StyledSearchInput = styled.div`
  margin: 0 18px 0 0;
  background: url(${Search}) no-repeat;
  background-position-y: center;
  padding-left: 30px;

  input{
    width: 55px;
    border: none;
    &:focus{
      outline: none;
    }
    ::placeholder{
      font-size: 15px;
      line-height: 21px;
      color: #A1ABC9;
    }
  }

  @media (max-width: 769px) {
    input{
      display: none;
    }
  }
`;

export const StyledSearchItems = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  border-radius: 8px;
  background: #F9FAFF;
  display: none;
  div{
    font-size: 15px;
    line-height: 21px;
    cursor: pointer;
    padding: 10px 96px 10px 24px;
    &:hover{
      color: #7297FF;
    }
  }
`;

export const StyledSearchList = styled.div`
  width: 70px;

  @media (max-width: 769px) {
    display: none;
  }
`;

export const StyledTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 36px 32px 0;

  h2{
    font-size: 24px;
    font-weight: 600;
    line-height: 26px;
  }

  @media (max-width: 600px) {
    margin: 0 0 16px 0;
    h2{
      font-size: 20px;
      line-height: 24px;
    }
  }
`;
