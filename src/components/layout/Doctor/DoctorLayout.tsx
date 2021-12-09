import userAvatar from '../../../assets/user_avatar.png';
import {
  StyledBtn,
  StyledControllers,
  StyledIcon,
  StyledMain,
  StyledSearch,
  StyledSearchForm,
  StyledSearchHeader,
  StyledSearchInput, StyledSearchItems,
  StyledSearchList,
  StyledTitle,
} from './DoctorLayout.styled';
import DoctorAndUserLayout from '../DoctorAndUserLayout';
import Header from '../Header/Header';
import { ChildrenProps } from '../../models/children.model';

const DoctorLayout = ({ children }: ChildrenProps) => (
  <DoctorAndUserLayout>
    <Header name="Miranda Nelson" status="Doctor" userAvatar={userAvatar} />
    <StyledMain>
      <StyledControllers>
        <StyledBtn to="/">Patients</StyledBtn>
        <StyledBtn to="/">Resolutions</StyledBtn>
      </StyledControllers>
      <div>
        <StyledTitle>
          <h2>My Patients</h2>
          <StyledSearch>
            <StyledSearchInput>
              <input placeholder="Search" type="text" />
            </StyledSearchInput>
            <StyledSearchForm>
              <StyledIcon />
              <p> Sort by:</p>
              <StyledSearchList>
                <StyledSearchHeader>
                  <span>Date</span>
                </StyledSearchHeader>
                <StyledSearchItems>
                  <div className="search__item">Date</div>
                  <div className="search__item">Name</div>
                </StyledSearchItems>
              </StyledSearchList>
            </StyledSearchForm>
          </StyledSearch>
        </StyledTitle>
        {children}
      </div>
    </StyledMain>
  </DoctorAndUserLayout>
);

export default DoctorLayout;
