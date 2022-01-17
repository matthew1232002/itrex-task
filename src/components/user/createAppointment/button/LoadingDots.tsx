import styled from 'styled-components';

const StyledLoader = styled.div`
    display: inline-block;
    position: relative;
    width: 50px;
    height: 17px;
    div {
    position: absolute;
    top: 5px;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: #fff;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  div:nth-child(1) {
    animation: lds-ellipsis1 0.6s infinite;
  }
  div:nth-child(2) {
    animation: lds-ellipsis2 0.6s infinite;
  }
  div:nth-child(3) {
    left: 22px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  div:nth-child(4) {
    left: 44px;
    animation: lds-ellipsis3 0.6s infinite;
  }
  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
  }
`;

const LoadingDots = () => (
  <StyledLoader>
    <div />
    <div />
    <div />
    <div />
  </StyledLoader>
);

export default LoadingDots;
