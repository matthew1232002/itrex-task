import styled from 'styled-components';
import Search from '../../../assets/search.svg';

export const StyledMain = styled.main`
  background: #F9FAFF;
  border-radius: 16px;
  padding: 40px 16px 0 48px;
  min-height: calc(100% - 80px);
  @media (max-width: 600px) {
    padding: 40px 24px 0 24px;
  }
`;

export const StyledSearchInput = styled.div`
  margin: 0 18px 0 0;
  background: url(${Search}) no-repeat;
  background-position-y: center;
  padding-left: 30px;

  input {
    width: 55px;
    border: none;

    &:focus {
      outline: none;
    }

    ::placeholder {
      font-size: 15px;
      line-height: 21px;
      color: #A1ABC9;
    }
  }

  @media (max-width: 769px) {
    input {
      display: none;
    }
  }
`;
