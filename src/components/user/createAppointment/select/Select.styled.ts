import styled from 'styled-components';
import ReactSelect from 'react-select';

export const CustomSelect = styled(ReactSelect)`
  & .Select{
    &__menu{
      border-radius: 8px;
      box-shadow: none;
      filter: drop-shadow(0px 4px 40px rgba(118, 136, 187, 0.16));
      overflow-y: hidden;
      &-list{
        &::-webkit-scrollbar{
          width: 8px;
          margin-right: 44px;
          background-color: rgba(220, 224, 236, 0.3);
        }
        &::-webkit-scrollbar-thumb {
          background-color: rgba(220, 224, 236, 0.5);
          border-radius: 8px;
        }
      }
    }
    &__option{
      cursor: pointer;
      &--is-focused,
      &--is-selected{
        background-color: #F9FAFF;
        color: black;
      }
      &:active{
        background-color: #F9FAFF;
        color: black;
      }
    }
    &__control{
      margin-top: 4px;
      height: 56px;
      border: 1px solid #DCE0EC;
      border-radius: 8px;
      &--is-focused{
        box-shadow: none;
        &:hover{
          border: 1px solid #7297FF;
        }
      }
      &--menu-is-open{
        svg{
          transform: rotate(-180deg);
          color: #7297FF;
        }
      }
      &:hover{
        cursor: pointer;
      }
    }
    &__indicator-separator{
      background: none;
    }
    &__indicator{
      padding: 0 30px;
    }
  }
`;
