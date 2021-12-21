import {
  StyledIcon,
  StyledSearch,
  StyledSearchForm, StyledSearchHeader,
  StyledSearchInput, StyledSearchItems,
  StyledSearchList, StyledTitle,
} from './Title.styled';

const Title = () => (
  <StyledTitle>
    <h2>Resolutions</h2>
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
);

export default Title;
