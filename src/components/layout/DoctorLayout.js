import React from 'react';

import logo from '../../assets/logo.png'
import userAvatar from '../../assets/user_avatar.png';
import {
    StyledBtn,
    StyledContainer,
    StyledControllers,
    StyledHeader, StyledIcon,
    StyledLogo,
    StyledMain,
    StyledSearch,
    StyledSearchForm,
    StyledSearchHeader,
    StyledSearchInput, StyledSearchItems,
    StyledSearchList,
    StyledTitle,
    StyledUser,
    StyledUserData,
    StyledUserImg,
    StyledUserProfession,
    StyledWrapper
} from "./DoctorLayout.styled";

const DoctorLayout = (props) => {
    return (
        <StyledWrapper>
            <StyledContainer>
                <StyledHeader>
                    <StyledLogo>
                        <div><img src={logo} alt="logo"/></div>
                        <span>PALM CLINIC</span>
                    </StyledLogo>
                    <StyledUser>
                        <StyledUserData>
                            <p>Miranda Nelson</p>
                            <StyledUserProfession>Doctor</StyledUserProfession>
                        </StyledUserData>
                        <StyledUserImg>
                            <img src={userAvatar} alt="logo"/>
                        </StyledUserImg>
                    </StyledUser>
                </StyledHeader>
                <StyledMain>
                    <StyledControllers>
                        <StyledBtn>Patients</StyledBtn>
                        <StyledBtn>Resolutions</StyledBtn>
                    </StyledControllers>
                    <div>
                        <StyledTitle>
                            <h2>My Patients</h2>
                            <StyledSearch>
                                <StyledSearchInput>
                                    <input placeholder="Search" type='text'/>
                                </StyledSearchInput>
                                <StyledSearchForm>
                                    <StyledIcon/>
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
                        {props.children}
                    </div>
                </StyledMain>
            </StyledContainer>
        </StyledWrapper>
    );
};

export default DoctorLayout;