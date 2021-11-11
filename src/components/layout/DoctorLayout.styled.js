import styled from "styled-components";
import {Link} from "react-router-dom";
import Search from '../../assets/search.svg';
import ArrowUp from '../../assets/arrow-up.svg';
import SelectIcon from '../../assets/select__icon.svg'

export const StyledWrapper = styled.div`
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;
  min-height: 100vh;
  background: #E4EBFF;
  overflow: hidden;

  @media (max-width: 600px) {
    padding: 0;
  }
`;

export const StyledContainer = styled.div`
  height: 100vh;
  padding: 0 64px 48px 64px;
  @media (max-width: 600px) {
    padding: 0;
  }
`;

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  @media (max-width: 600px) {
    padding: 20px 24px;
  }
`;

export const StyledLogo = styled.div`
  display: flex;
  div{
    padding-right: 4px;
  }
  span {
    font-weight: 600;
    padding: 4px 0 0 0;
`;

export const StyledUser = styled.div`
  display: flex;
`;

export const StyledUserData = styled.div`
  padding: 0 16px 0 0;
  text-align: right;
  font-size: 15px;
  font-weight: 600;
  line-height: 19px;
  @media (max-width: 600px) {
    display: none;
  }
`;

export const StyledUserProfession = styled.p`
  font-size: 13px;
  font-weight: 500;
  line-height: 17px;
  color: #A1ABC9;
`;

export const StyledUserImg = styled.div`
  position: relative;
  width: 40px;
  &:before {
    content: "";
    display: block;
    background: #34C197;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 999;
  }
  &:after {
    content: '';
    border-right: 11px solid #E4EBFF;
    border-bottom: 11px solid #E4EBFF;
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 50%;
  }
`;

export const StyledMain= styled.main`
  background: #F9FAFF;
  border-radius: 16px;
  padding: 40px 16px 0 48px;
  min-height: calc(100% - 80px);
  @media (max-width: 600px) {
    padding: 40px 24px 0 24px;
  }
`;

export const StyledControllers= styled.div`
  margin-bottom: 56px;
  @media (max-width: 600px) {
    margin-bottom: 40px;
  }
`;

export const StyledBtn= styled(Link)`
  background: #FFFFFF;
  color: #7297FF;
  outline: none;
  border: none;
  border-radius: 8px;

  margin: 0 12px 0 0;
  padding: 12px 0;
  width: 160px;
  text-decoration: none;

  @media (max-width: 600px) {
    width: 120px;
  }
`;

export const StyledTitle= styled.div`
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

export const StyledSearch= styled.div`
  display: flex;
`;

export const StyledSearchInput= styled.div`
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

export const StyledSearchForm= styled.form`
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

export const StyledIcon= styled.div`
  background: url(${SelectIcon}) no-repeat;
  padding-left: 30px;
  display: none;
  @media (max-width: 769px) {
    display: block;
  }
`;

export const StyledSearchList= styled.div`
  width: 70px;

  @media (max-width: 769px) {
    display: none;
  }
`;

export const StyledSearchHeader= styled.div`
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

export const StyledSearchItems= styled.div`
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