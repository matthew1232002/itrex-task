import styled from 'styled-components';
import EmptyImg from '../../../assets/empty_list.svg';

const StyledEmptyList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #A1ABC9;
  align-items: center;
  margin: 0 auto;
  text-align: center;
`;

const EmptyList = () => (
  <StyledEmptyList>
    <img src={EmptyImg} alt="icon" />
    <p>
      You have no patients yet.
      <br />
      To create a patient profile, please contact your administrator.
    </p>
  </StyledEmptyList>
);

export default EmptyList;
